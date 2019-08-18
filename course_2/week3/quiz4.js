// const add = require('./add.js');

// console.log(add)

// var EventEmitter = require('events').EventEmitter;
// var emitter = new EventEmitter();

// emitter.on('hello', console.log);

// emitter.emit('error', 'Hello!');

for (let i = 0; i < 5; i++) {
    let counter = require('./add.js')();
    
    console.log(counter);
}
