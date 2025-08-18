
class HistoryTracker {

    #urlList = [];
    #current = null;

    constructor() {
        this.#urlList.push(window.location.pathname);
    }

    static popstate() {
        window.onpopstate = (event) => {
            console.log('event.state ' + JSON.stringify(event.state));
        }
    }

    push(url){
        if(!this.#validateString(url)) return;
        history.pushState({state: url}, '', url);
        this.#urlList.push(url);
        this.#current = url;
    }

    back() {
        this.#current = this.#urlList[this.#urlList.indexOf(this.#current) - 1];
        this.#urlList.push(this.#current);
        history.back();
    }

    #validateString = (str) => {
        if(typeof str !== 'string') return false;
        if(str.trim().length === 0) return false;

        return true;
    }
    get historyList() {
        return [...this.#urlList];
    }
}

export default HistoryTracker