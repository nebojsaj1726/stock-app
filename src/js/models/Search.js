import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
           
            const res = await axios(`https://www.worldtradingdata.com/api/v1/stock_search?search_term=${this.query}&search_by=symbol,name&sort_by=volume&sort_order=desc&stock_exchange=NASDAQ,NYSE&limit=50&page=1&api_token=1DH0ZoULle8nifJE4VhE7ax6UEoz9FgzQjoHgd5x6kaXthk7ea7UEQ0LMLHY`);
            
            this.result = res.data.data;
        } catch (error) {
            alert(error);
        }
       
    }
}






