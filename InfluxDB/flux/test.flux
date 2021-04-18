





// 6
// stochastic fast/slow


    item = (n, t) => tables
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
        upper: r._value + (item(n: n, t: r._time)._value * std),
        lower: r._value - (item(n: n, t: r._time)._value * std)
    }))
    |> drop(columns:["_field", "_value"])



from(bucket: "stocks")
    |> range(start: -1y)
    |> filter(fn: (r) => 
        r._measurement == "daily_candle" and
        r.code_name == "GS글로벌"
    )
    // |> keep(columns: ["_time", "code", "code_name", "_field", "_value"])
    |> tail(n: 40)
    |> filter(fn: (r) => r._field == "low")
    |> min()


base = from(bucket: "stocks")
    |> range(start: -1y)
    |> filter(fn: (r) => 
        r._measurement == "daily_candle" and
        r.code_name == "GS글로벌"
    )
   

getMinLow = (data, t, start="-1y", stop="0d", n) => {
    min = from(bucket: "stocks")
    |> range(start: -1y)
    |> filter(fn: (r) => 
        r._measurement == "daily_candle" and
        r.code_name == "GS글로벌"
    )
    |> range(start: -1y)
    |> filter(fn: (r) => r._field == "low") //  r._time <= t and
    |> tail(n: 40)
    |> min()
    |> map(fn: (r) => ({
        _field: "low",
        _value: r._value
    }))
    |> findRecord(
        fn: (key) => key._field == "low",
        idx: 0
    )
    return min

}


base
    |> map(fn: (r) => ({
        r with
        min: getMinLow(data: base, t: r._time, n: 40)._value
    }))


 from(bucket: "stocks")
    |> range(start: -1y)
    |> tail(n: 40)
    |> filter(fn: (r) =>
        r._measurement == "daily_candle" and
        r.code_name == "GS글로벌" and
        r._field == "close"
    )
    |> max()





