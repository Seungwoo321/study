import "math"

ohlcv = from(bucket: "stocks")
  |> range(start: -1y)
  |> filter(fn: (r) => 
    r._measurement == "daily_candle" and
    r.code_name == "GS글로벌"
  )
  |> keep(columns: ["_time", "code", "code_name", "_field", "_value"])
  |> pivot(rowKey:["_time"], columnKey: ["_field"], valueColumn: "_value")


Stochastic = (tables=<-, n, m, t, start=-1y, stop=0d) => {
    maxHigh = (n, _t) => tables
    |> range(start: start, stop: stop)
    |> filter(fn: (r) => r._time <= _t and r._field == "high")
    |> tail(n: n)
    |> max()
    |> findRecord(
        fn: (key) => key._field == "high",
        idx: 0
    )

    minLow = (n, _t) => tables
    |> range(start: start, stop: stop)
    |> filter(fn: (r) => r._time <= _t and r._field == "low")
    |> tail(n: n)
    |> min()
    |> findRecord(
        fn: (key) => key._field == "low",
        idx: 0
    )

    tmp = tables
    |> map(fn: (r) => ({
        r with
        max: float(v: maxHigh(n: n, _t: r._time)._value),
        min: float(v: minLow(n: n, _t: r._time)._value)
    }))

    result = tmp
    |> filter(fn: (r) => r._field == "close")
    |> map(fn: (r) => ({
        r with
        _value: (float(v: r._value) - r.min) / (r.max - r.min) * 100.0
    }))
    |> drop(columns: ["min", "max", "_field"])
    |> movingAverage(n: m)
    |> duplicate(as: "k", column: "_value")
    |> movingAverage(n: t)
    |> rename(columns: { _value: "d" })

    return result
}

stoch1 = from(bucket: "stocks")
    |> range(start: -1y )
    |> filter(fn: (r) =>
        r._measurement == "daily_candle" and
        r.code_name == "GS글로벌" and
        r._field != "volume"
    )
    |> Stochastic(n: 5, m: 3, t: 3)
    |> keep(columns: ["_time", "k", "d"])


bolingerBand = (tables=<-, n, std, start=-1y, stop=0d) => {
    
    getStddev = (n, t) => tables
    |> range(start: start, stop: stop)
    |> filter(fn: (r) => r._time <= t)
    |> tail(n: n)
    |> stddev()
    |> map(fn: (r) => ({
        _field: "stddev",
        _value: r._value
    }))
    |> findRecord(
        fn: (key) => key._field == "stddev",
        idx: 0
    )

    result = tables
    |> movingAverage(n: n)
    |> map(fn: (r) => ({
        r with
        middle: r._value,
        upper: r._value + (getStddev(n: n, t: r._time)._value * std),
        lower: r._value - (getStddev(n: n, t: r._time)._value * std)
    }))
    |> drop(columns:["_field", "_value"])
    return result
}

biband1 = from(bucket: "stocks")
    // |> range(start: time(v: "2019-01-01T15:00:00Z"), stop: time(v: "2020-01-01T15:00:00Z"))
    |> range(start: -1y )
    |> filter(fn: (r) =>
        r._measurement == "daily_candle" and
        r.code_name == "GS글로벌" and
        r._field == "close"
    )
    |> bolingerBand(n: 40, std: 0.5)
    |> keep(columns: ["_time", "upper", "middle", "lower"])


join1 = join(
    // method: "left",
    tables: {
        t1: ohlcv,
        t2: stoch1,
    },
    on: ["_time"]
)

join(
    tables: {
        t1: join1,
        t2: biband1
    },
    on: ["_time"]
)
