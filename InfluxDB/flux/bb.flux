import "math"
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

from(bucket: "stocks")
    // |> range(start: time(v: "2019-01-01T15:00:00Z"), stop: time(v: "2020-01-01T15:00:00Z"))
    |> range(start: -80d )
    |> filter(fn: (r) =>
        r._measurement == "daily_candle" and
        r.code_name == "GS글로벌" and
        r._field == "close"
    )
    |> bolingerBand(n: 40, std: 0.5)

