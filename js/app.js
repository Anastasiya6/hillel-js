import HistoryTracker from "./HistoryTracker.js";

let historyTracker = new HistoryTracker();
historyTracker.push('/home');

historyTracker.push('/about');
historyTracker.back();
historyTracker.push('/contact');
historyTracker.back();
console.log(historyTracker);

window.onpopstate = (event) => {
    console.log('event.state ' + JSON.stringify(event.state));
}