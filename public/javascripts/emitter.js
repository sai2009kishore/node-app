function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function (event, listener) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(listener);
}

Emitter.prototype.emit = function (event, ...args) {
    this.events[event].forEach(function (listener) {
        listener(...args);
    });
}

var emitter = new Emitter();

module.exports = {
    emitter: emitter,
    eventList: {
        FLUSH_DATA: 'flushData'
    }
};