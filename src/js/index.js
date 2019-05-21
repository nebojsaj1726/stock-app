import Search from './models/Search';
import Stock from './models/Stock';
import * as searchView from './views/searchView';
import * as stockView from './views/stockView';
import { elements, renderLoader, clearLoader } from './views/base';
 
/* Global app state
-Search object
-Current stock object
*/
const state = {};

// Search controller

const controlSearch = async () => {
    // get query from view
    const query = searchView.getInput();

    if (query) {
        // new search object and add to state
        state.search = new Search(query);

        // prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.stock);

        try {
            // search for stocks
            await state.search.getResults();

            // render results on UI
            clearLoader();
            if (state.search.result.length !== 0) {
                searchView.renderResults(state.search.result);
            } else {
                searchView.renderMessage();
            }
            
        } catch (error) {
            alert(error);
            clearLoader();
        }
    }
}

elements.searchForm.addEventListener('submit', e =>
{
    e.preventDefault();
    controlSearch();
})
 
// Stock controller

const controlStock = async () => {
    // Get symbol from url
    const symbol = window.location.hash.replace('#', '');
    
    if (symbol) {
        // Prepare UI for changes
        stockView.clearStock();
        renderLoader(elements.stock);

        // Create new stock object
        state.stock = new Stock(symbol);

        try {
            // Get stock data
            await state.stock.getStock();

            // Render stock
            clearLoader();
            stockView.renderStock(state.stock);

        } catch (error) {
            alert(error);
        }
    }  
}
    
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlStock));



