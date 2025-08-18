import HistoryTracker from "./HistoryTracker.js";

HistoryTracker.popstate();

let historyTracker = new HistoryTracker();
historyTracker.push('/home');

historyTracker.push('/about');
historyTracker.back();
historyTracker.push('/contact');
historyTracker.back();
console.log(historyTracker.historyList);

