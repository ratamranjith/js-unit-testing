const emitter = require('events');
let emit = new emitter();
emit.on('sendMessage', () => {
    console.log("Vanakkam da mapla");
})
emit.emit('sendMessage');