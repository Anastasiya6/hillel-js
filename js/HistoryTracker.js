
class HistoryTracker {

    #listUrl  = null;

    constructor() {
        this.#listUrl =  [];
    }

    push(url){
        if(!this.#validateString(url)) return;
        history.pushState({state: url}, '', url);
        this.#listUrl.push(url);
    }

    back() {
        history.back();
    }

    #validateString = (str) => {
        if(typeof str !== 'string') return false;
        if(str.trim().length === 0) return false;

        return true;
    }
}

export default HistoryTracker