import axios from 'axios';

export default class Stock {
    constructor(symbol) {
        this.symbol = symbol;
    }

    async getStock() { 
        try {
            const res = await axios(` https://www.worldtradingdata.com/api/v1/stock?symbol=${this.symbol}&api_token=1DH0ZoULle8nifJE4VhE7ax6UEoz9FgzQjoHgd5x6kaXthk7ea7UEQ0LMLHY`);

            this.name = res.data.data[0].name;
            this.symb = res.data.data[0].symbol;
            this.price = res.data.data[0].price;
            this.open = res.data.data[0].price_open;
            this.day_high = res.data.data[0].day_high;
            this.day_low = res.data.data[0].day_low;
            this.year_high = res.data.data[0]['52_week_high'];
            this.year_low = res.data.data[0]['52_week_low'];
            this.day_change = res.data.data[0].change_pct;
            this.close = res.data.data[0].close_yesterday;
            this.market_cap = res.data.data[0].market_cap;
            this.volume = res.data.data[0].volume;
            this.stock_exchange = res.data.data[0].stock_exchange_short;
            this.last_trade_time = res.data.data[0].last_trade_time;
        } catch (error) {
            alert(error);
        }
    }
}