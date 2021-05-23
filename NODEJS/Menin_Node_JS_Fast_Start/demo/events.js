const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("anything", (data) => {
  console.log("ON: Anything", data);
});

emitter.emit("anything", { a: 1 });

class Dispatcher extends EventEmitter {
  subscribe(eventname, callback) {
    console.log("[Subscribe...]");
    this.on(eventname, callback);
  }

  dispatch(eventname, data) {
    console.log("[Dispatching...]");
    this.emit(eventname, data);
  }
}

const dis = new Dispatcher();

dis.subscribe("aa", (data) => {
  console.log("ON: aa", data);
});

dis.dispatch("aa", { aa: 22 });
