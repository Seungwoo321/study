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
stochasticSlow = (tables=<-, n, m, t, start=-1y, stop=0d) => {
    StochasticN = (n, t) => tables
    |> range(start: start, stop: stop)
    |> filter(fn: (r) => r._time <= t)
    |> tail(n: n)
    |> min()
    |> map(fn: (r) => ({
        _field: "low",
        _value: r._value
    }))
    |> findRecord(
        fn: (key) => key._field == "low",
        idx: 0
    )

    result = tables
    |> map(fn: (r) => ({
        r with
        min: item(n: n, t: r._time)._value
    }))
    return result
}

from(bucket: "stocks")
    // |> range(start: time(v: "2019-01-01T15:00:00Z"), stop: time(v: "2020-01-01T15:00:00Z"))
    |> range(start: -80d )
    |> filter(fn: (r) =>
        r._measurement == "daily_candle" and
        r.code_name == "GS글로벌" and
        r._field == "low"
    )
    |> stochasticSlow(n: 5, m: 3, t: 3)

