# node-bulk-insert

Benchmark of the different methods to insert data in a PostgresSQL database as a bulk


## Results

Result on a MacBook Pro 2018:

```
{
  "basic": {
    "1.json": {
      "min": "0.6840250492095947 ms",
      "max": "1.4842709302902222 ms",
      "avg": "0.8384066939353942 ms",
      "med": "0.7564929723739624 ms",
      "speed": "1321.8893453324283 row/sec"
    },
    "10.json": {
      "min": "0.9161490201950073 ms",
      "max": "1.070801019668579 ms",
      "avg": "0.9747372150421143 ms",
      "med": "0.9809809923171997 ms",
      "speed": "10193.877433219934 row/sec"
    },
    "100.json": {
      "min": "1.8479928970336914 ms",
      "max": "2.3453519344329834 ms",
      "avg": "1.976016104221344 ms",
      "med": "1.9412320852279663 ms",
      "speed": "51513.67565009962 row/sec"
    },
    "1000.json": {
      "min": "9.640676975250244 ms",
      "max": "14.10464096069336 ms",
      "avg": "10.495341289043427 ms",
      "med": "9.640676975250244 ms",
      "speed": "103727.15552727488 row/sec"
    },
    "10000.json": {
      "min": "89.06203007698059 ms",
      "max": "122.17223298549652 ms",
      "avg": "94.99332730770111 ms",
      "med": "89.56003499031067 ms",
      "speed": "111656.94610416221 row/sec"
    }
  },
  "parameter": {
    "1.json": {
      "min": "0.7060130834579468 ms",
      "max": "1.2044039964675903 ms",
      "avg": "0.9667821049690246 ms",
      "med": "0.9826450347900391 ms",
      "speed": "1017.6614795735157 row/sec"
    },
    "10.json": {
      "min": "1.0329630374908447 ms",
      "max": "1.3081109523773193 ms",
      "avg": "1.174041998386383 ms",
      "med": "1.2064579725265503 ms",
      "speed": "8288.726360735232 row/sec"
    },
    "100.json": {
      "min": "1.8283939361572266 ms",
      "max": "2.31270694732666 ms",
      "avg": "1.9806609869003295 ms",
      "med": "1.9776500463485718 ms",
      "speed": "50565.06341181783 row/sec"
    },
    "1000.json": {
      "min": "9.821784019470215 ms",
      "max": "12.55698299407959 ms",
      "avg": "10.461495077610016 ms",
      "med": "10.658682942390442 ms",
      "speed": "93820.22201100657 row/sec"
    },
    "10000.json": {
      "min": "87.43684494495392 ms",
      "max": "119.99942994117737 ms",
      "avg": "94.15889576673507 ms",
      "med": "91.68186902999878 ms",
      "speed": "109072.82002211308 row/sec"
    }
  },
  "pg_function": {
    "1.json": {
      "min": "0.807062029838562 ms",
      "max": "4.595963001251221 ms",
      "avg": "1.3419786095619202 ms",
      "med": "1.0045729875564575 ms",
      "speed": "995.4478294627642 row/sec"
    },
    "10.json": {
      "min": "0.9172619581222534 ms",
      "max": "1.2616400718688965 ms",
      "avg": "1.0695415019989014 ms",
      "med": "1.0510530471801758 ms",
      "speed": "9514.267645033295 row/sec"
    },
    "100.json": {
      "min": "1.792876958847046 ms",
      "max": "2.3800700902938843 ms",
      "avg": "1.9180954098701477 ms",
      "med": "1.849505066871643 ms",
      "speed": "54068.519081780956 row/sec"
    },
    "1000.json": {
      "min": "9.256685018539429 ms",
      "max": "10.757052063941956 ms",
      "avg": "10.068720424175263 ms",
      "med": "10.480473041534424 ms",
      "speed": "95415.54050441907 row/sec"
    },
    "10000.json": {
      "min": "85.81861996650696 ms",
      "max": "224.2135339975357 ms",
      "avg": "111.95509887933731 ms",
      "med": "91.03330302238464 ms",
      "speed": "109849.908418033 row/sec"
    }
  }
}
```