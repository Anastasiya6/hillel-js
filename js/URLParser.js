class URLParser {

    constructor(urlFull){
        const urlPart = urlFull.split('?');
        this.params = urlPart.length === 2 ? urlPart.at(-1) : null;
        this.urlArray = urlPart[0].split('/');
    }

    get protocol(){
        return this.urlArray[0];
    }

    get hostname(){
        return this.urlArray[2];
    }

    get path(){
        return this.urlArray[3]+'/'+this.urlArray[4];
    }

    get queryParams(){
        let obj = {};
        if(this.params){
            const elem1 = this.params.split('&');
            for(let i = 0; i <= elem1.length - 1; i++){
                const elements = elem1[i].split('=');
                obj[elements[0]] = elements[1];
            }
        }
        return obj;
    }
}

const url = new URLParser("https://example.com/products/item?search=book&page=2");
console.log(url.protocol);
console.log(url.hostname);
console.log(url.path);
console.log(url.queryParams);
export default URLParser