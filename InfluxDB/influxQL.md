
# InfluxQL


## 연속 쿼리 관리 
- show continuous queries
- drop continuous query trade_bitmex_to_xbt_usd_candles_5m on bitmex

## measurement 
 - drop measurement trades 
 - show measurements 


## 연속쿼리 형식 
```sql
CREATE CONTINUOUS QUERY <cq_name> ON <database_name>
RESAMPLE EVERY <infterval> FOR <interval>
BEGIN 
    <cq_query>
```

### 30분 캔들 조회
```sql
select first(price) as open, max(price) as high, min(price) as low, last(price) as close, sum(grossValue) as volume  from trade where symbol='XBTUSD' group by time(30m) fill(previous)
```

### 연속 쿼리 만들기

#### XBTUSD
- 5분 캔들
```sql
CREATE CONTINUOUS QUERY trade_bitmex_to_xbt_usd_candles_5m ON bitmex RESAMPLE EVERY 10s FOR 50m BEGIN SELECT first(price) AS open, max(price) AS high, min(price) AS low, last(price) AS close, sum(grossValue) AS volume INTO bitmex.autogen.trade_bitmex_to_xbt_usd_candles_5m FROM bitmex.autogen.trade where symbol = 'XBTUSD' GROUP BY time(5m) fill(previous) END
```

- 15분 캔들
```sql
CREATE CONTINUOUS QUERY trade_bitmex_to_xbt_usd_candles_15m ON bitmex RESAMPLE EVERY 10s FOR 150m BEGIN SELECT first(price) AS open, max(price) AS high, min(price) AS low, last(price) AS close, sum(grossValue) AS volume INTO bitmex.autogen.trade_bitmex_to_xbt_usd_candles_15m FROM bitmex.autogen.trade where symbol='XBTUSD' GROUP BY time(15m) fill(previous) END
```

- 30분 캔들
```sql
CREATE CONTINUOUS QUERY trade_bitmex_to_xbt_usd_candles_30m ON bitmex RESAMPLE EVERY 10s FOR 5h BEGIN select first(price) as open, max(price) as high, min(price) as low, last(price) as close, sum(grossValue) as volume into trade_bitmex_to_xbt_usd_candles_30m from bitmex.autogen.trade where symbol='XBTUSD' group by time(30m) fill(previous) END
```

- 1시간 캔들
```sql
drop continuous query trade_bitmex_to_xbt_usd_candles_1h on bitmex;

CREATE CONTINUOUS QUERY trade_bitmex_to_xbt_usd_candles_1h ON bitmex RESAMPLE EVERY 10s FOR 10h BEGIN SELECT first(price) AS open, max(price) AS high, min(price) AS low, last(price) AS close, sum(grossValue) AS volume INTO trade_bitmex_to_xbt_usd_candles_1h FROM trade where symbol='XBTUSD' GROUP BY time(1h) fill(previous) END
```

- 4시간 캔들
```sql
drop continuous query trade_bitmex_to_xbt_usd_candles_4h on bitmex;

CREATE CONTINUOUS QUERY trade_bitmex_to_xbt_usd_candles_4h ON bitmex RESAMPLE EVERY 10s FOR 40h BEGIN select first(price) as open, max(price) as high, min(price) as low, last(price) as close, sum(grossValue) as volume into trade_bitmex_to_xbt_usd_candles_4h from trade where symbol='XBTUSD' group by time(4h) fill(previous) END;
```

#### ETHUSD

- 1시간 캔들

```sql
drop continuous query trade_bitmex_to_eth_usd_candles_1h on bitmex;

CREATE CONTINUOUS QUERY trade_bitmex_to_eth_usd_candles_1h ON bitmex RESAMPLE EVERY 10s FOR 10h BEGIN SELECT first(price) AS open, max(price) AS high, min(price) AS low, last(price) AS close, sum(grossValue) AS volume INTO trade_bitmex_to_eth_usd_candles_1h FROM trade where symbol='ETHUSD' GROUP BY time(1h) fill(previous) END;
```

- 4시간 캔들
```sql
drop continuous query trade_bitmex_to_eth_usd_candles_4h on bitmex;

CREATE CONTINUOUS QUERY trade_bitmex_to_eth_usd_candles_4h ON bitmex RESAMPLE EVERY 10s FOR 40h BEGIN select first(price) as open, max(price) as high, min(price) as low, last(price) as close, sum(grossValue) as volume into trade_bitmex_to_eth_usd_candles_4h from trade where symbol='ETHUSD' group by time(4h) fill(previous) END;
```



#### BCHUSD
- 1시간 캔들
```sql
drop continuous query trade_bitmex_to_bch_usd_candles_1h on bitmex;

CREATE CONTINUOUS QUERY trade_bitmex_to_bch_usd_candles_1h ON bitmex RESAMPLE EVERY 10s FOR 10h BEGIN SELECT first(price) AS open, max(price) AS high, min(price) AS low, last(price) AS close, sum(grossValue) AS volume INTO trade_bitmex_to_bch_usd_candles_1h FROM trade where symbol='BCHUSD' GROUP BY time(1h) fill(previous) END
```

#### XRPUSD
- 1시간 캔들
```sql
drop continuous query trade_bitmex_to_xrp_usd_candles_1h on bitmex;

CREATE CONTINUOUS QUERY trade_bitmex_to_xrp_usd_candles_1h ON bitmex RESAMPLE EVERY 10s FOR 10h BEGIN SELECT first(price) AS open, max(price) AS high, min(price) AS low, last(price) AS close, sum(grossValue) AS volume INTO trade_bitmex_to_xrp_usd_candles_1h FROM trade where symbol='XRPUSD' GROUP BY time(1h) fill(previous) END
```


#### LTCUSD
- 1시간 캔들
```sql
drop continuous query trade_bitmex_to_ltc_usd_candles_1h on bitmex;

CREATE CONTINUOUS QUERY trade_bitmex_to_ltc_usd_candles_1h ON bitmex RESAMPLE EVERY 10s FOR 10h BEGIN SELECT first(price) AS open, max(price) AS high, min(price) AS low, last(price) AS close, sum(grossValue) AS volume INTO trade_bitmex_to_ltc_usd_candles_1h FROM trade where symbol='LTCUSD' GROUP BY time(1h) fill(previous) END

```
