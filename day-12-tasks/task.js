// TASK - 1
function debounce(fn, delay) {
    let timer = null;

    return function (...args) {
        const context = this;

        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
}

// Test
const search = debounce((text) => {
    console.log("Searching:", text);
}, 500);

search("H");
search("He");
search("Hel");
search("Hello"); // Only this runs

// TASK - 2
function throttle(fn, limit) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCall >= limit) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

// Test
const logScroll = throttle(() => {
    console.log("Scroll event");
}, 1000);

setInterval(logScroll, 200);

// TASK - 3
function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;

        if (promises.length === 0) {
            resolve([]);
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    results[index] = value;
                    completed++;

                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        });
    });
}

// Test
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

myPromiseAll([p1, p2, p3])
    .then(res => console.log("Result:", res))
    .catch(err => console.log(err));

// TASK - 4
function deepClone(obj, visited = new WeakMap()) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    // Handle circular reference
    if (visited.has(obj)) {
        return visited.get(obj);
    }

    let clone = Array.isArray(obj) ? [] : {};

    visited.set(obj, clone);

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key], visited);
        }
    }

    return clone;
}

// Test
const original = {
    name: "Vedanth",
    nested: { a: 1 }
};

original.self = original; // circular reference

const copy = deepClone(original);

console.log(copy);

// TASK - 5
class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(listener => {
                listener(...args);
            });
        }
    }

    off(event, listenerToRemove) {
        if (!this.events[event]) return;

        this.events[event] = this.events[event].filter(
            listener => listener !== listenerToRemove
        );
    }

    once(event, listener) {
        const wrapper = (...args) => {
            listener(...args);
            this.off(event, wrapper);
        };

        this.on(event, wrapper);
    }
}

// Test
const emitter = new EventEmitter();

function greet(name) {
    console.log("Hello", name);
}

emitter.on("welcome", greet);
emitter.emit("welcome", "Vedanth");

emitter.off("welcome", greet);
emitter.emit("welcome", "No Output");

emitter.once("onceEvent", (msg) => console.log(msg));
emitter.emit("onceEvent", "Runs once");
emitter.emit("onceEvent", "Ignored");