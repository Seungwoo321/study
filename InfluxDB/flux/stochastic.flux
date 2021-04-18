// 매매전략
// - 골든크로스: %K (매수세)가 증가 하여 %D 를 뚫고 올라오는 형태, 매수신호
// - 데드크로스: %K 가 %D 를 뚫고 내려오는 형태, 매도 신호 
// Stochastic 
//  => %K : 스토캐스틱 N = (현재 가격 - N 일중 최저가) / (N 일중 최고가 - N 일중 최저가) 
//  => %D : 스토캐스틱 N 의 m 일 이동평균선 
// Stochastic Fast 
//  => %K 와 %D 를 그대로 사용
//  => 파라메터 (N-m) 으로 표시 
// Stochastic Slow 
//  => %K 와 %D 각각을 t 일 이동평균을 구한 값 
//  => 파라메터 (N-m-t) 으로 표시 

import "math"
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

from(bucket: "stocks")
    |> range(start: -80d )
    |> filter(fn: (r) =>
        r._measurement == "daily_candle" and
        r.code_name == "GS글로벌" and
        r._field != "volume"
    )
    |> Stochastic(n: 5, m: 3, t: 3)