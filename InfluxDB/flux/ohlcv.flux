from(bucket: "stocks")
  |> range(start: -1y)
  |> filter(fn: (r) => 
    r._measurement == "daily_candle" and
    r.code_name == "GS글로벌"
  )
  |> keep(columns: ["_time", "code", "code_name", "_field", "_value"])
  |> pivot(rowKey:["_time"], columnKey: ["_field"], valueColumn: "_value")


from(bucket: "stocks")
  |> range(start: -1y)
  |> filter(fn: (r) => 
    r._measurement == "daily_candle" and
    r.code_name == "GS글로벌"
  )
  |> aggregateWindow(every: 2d, fn: mean, column: "_value", createEmpty: false)
  |> keep(columns: ["_time", "code", "code_name", "_field", "_value"])
  |> pivot(rowKey:["_time"], columnKey: ["_field"], valueColumn: "_value")

