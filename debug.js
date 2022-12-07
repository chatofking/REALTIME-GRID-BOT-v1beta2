const API_KEY = 'apikey';
const SECRET_KEY = 'secretkey';

var start = new Date(Date.now() - (7200 * 1000)).toISOString();

console.log(start);
//https://data.alpaca.markets/v1beta1/crypto/ETHUSD/bars?exchanges=CBSE&timeframe=1Min&start=
//https://data.alpaca.markets/v1beta2/crypto/bars?symbols=ETH/USD&timeframe=1Min&start=
var bars_url = 'https://data.alpaca.markets/v1beta2/crypto/bars?symbols=ETH/USD&timeframe=1Min&start=' + start;

fetch(bars_url, {
    headers: {
        'APCA-API-KEY-ID': API_KEY,
        'APCA-API-SECRET-KEY': SECRET_KEY
    }
}).then((r) => r.json())
    .then((response) => {
        console.log(response);
          
        for (const key in response.bars) {
            const bar = response.bars[key];
            const data = bar.map(b => (
                {
                    open: b.o,
                    high: b.h,
                    low: b.l,
                    close: b.c,
                    time: Date.parse(b.t) / 1000
                }
            ));
            console.log(data);
        }})
