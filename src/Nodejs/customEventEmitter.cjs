export default function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener)
}

Emitter.prototype.emit = function (type, ...args) {
    if (this.events[type]) {
        this.events[type].forEach(function (listener) {
            listener(...args); // ✅ Call the listener with any provided arguments
        });
    }
}


// let emit = new Emitter();
// emit.on('order', ['pizza', 'burger']);
// emit.on('order', ['pizza1', 'burger1']);
// console.log(emit.emit('order'))