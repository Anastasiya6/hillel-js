import URLParser from "./URLParser.js";

const url = new URLParser("https://example.com/products/item?search=book&page=2");
console.log(url.protocol);
console.log(url.hostname);
console.log(url.path);
console.log(url.queryParams);