
let emit = new Emitter();
emit.on('order', ['pizza', 'burger']);
emit.on('order', ['pizza1', 'burger1']);
console.log(emit.emit('order'))