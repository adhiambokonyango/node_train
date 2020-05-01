// import event module
var events = require('events');

// create event emitter object
var eventEmitter = new events.EventEmitter();

// create event handler
var connectHandler = function connected() {
console.log('connection successful');

// fire data recieved event
    eventEmitter.emit('data_received');
}

// bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// bind data recieved event with anonymous function
eventEmitter.on('data_received', function () {
console.log('data received successfully');
});

// fire the connection event
eventEmitter.emit('connection');

console.log('program ended');