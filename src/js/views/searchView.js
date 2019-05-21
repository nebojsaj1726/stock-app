import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.stock.innerHTML = '';
};

const renderMatch = match => {
    const markup = `
    <ul class="results__list">
        <li>
            <a class="results__link" href="#${match.symbol}">
                <div class="results__data">
                    <h4 class="results__name">${match.name} (${match.symbol})</h4>
                    <p class="results__stkex">${match.stock_exchange_short}</p>
                </div>
            </a>
        </li>
    </ul>
    `;
    elements.stock.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = matches => {
    matches.forEach(renderMatch);
};

export const renderMessage = () => {
    const message = `
        <p class="results__message">No results for your search</p>
    `;
    elements.stock.insertAdjacentHTML('beforeend', message);
}
