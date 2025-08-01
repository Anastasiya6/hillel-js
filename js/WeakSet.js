'use strict';

//Завдання 4 — WeakSet: Відстеження вже оброблених об’єктів

class ObjectTracker{

    ws = new WeakSet();

    mark(obj){
       this.ws.add(obj);
    }
    wasProcessed(){
        if(this.ws.has(obj)){
            return true;
        }
        return false;
    }

}
const tracker = new ObjectTracker();

const obj = { name: "A" };

console.log(tracker.wasProcessed(obj)); // false
tracker.mark(obj);
console.log(tracker.wasProcessed(obj)); // true