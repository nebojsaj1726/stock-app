import { elements } from './base';

export const clearStock = () => {
    elements.stock.innerHTML = '';
};

export const numberWithCommas = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const renderStock = stock => {

    const markup = `
        <div class="stock__data">
            <h2 class="stock__name">${stock.name}</h2>
            <h3 class="stock__stkex">${stock.stock_exchange}</h3>
            <div class="stock__container">
                <div class="left">            
                    <p class="stock__data-text">Symbol: <strong>${stock.symb}</strong></p>
                    <p class="stock__data-text">Price: <strong>${stock.price}</strong></p>
                    <p class="stock__data-text">Previous close: <strong>${stock.close}</strong></p>
                    <p class="stock__data-text">Open: <strong>${stock.open}</strong></p>
                    <p class="stock__data-text">Day change: <strong>${stock.day_change}%</strong></p>
                    <p class="stock__data-text">Day high: <strong>${stock.day_high}</strong></p>
                </div>
                <div class="right">
                    <p class="stock__data-text">Day low: <strong>${stock.day_low}</strong></p>
                    <p class="stock__data-text">Year high: <strong>${stock.year_high}</strong></p>
                    <p class="stock__data-text">Year low: <strong>${stock.year_low}</strong></p>
                    <p class="stock__data-text">Market cap: <strong>${numberWithCommas(stock.market_cap)}</strong></p>
                    <p class="stock__data-text">Volume: <strong>${numberWithCommas(stock.volume)}</strong></p>
                    <p class="stock__data-text">Last trade: <strong>${stock.last_trade_time}</strong></p>
                </div>
            </div>
        </div>
    `;
    elements.stock.insertAdjacentHTML('afterbegin', markup);
};

