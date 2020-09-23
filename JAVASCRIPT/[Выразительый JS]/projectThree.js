const box = {
  locked: false,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: ["asdasd", "asdasd", 3],
  get content() {
    if (this.locked) throw new Error("Зanepтo");
    return this._content;
  },
  set content(value) {
    this._content = value;
  },
};

function withBoxUnluked() {
  this.unlock();
  const value = this.content;
  this.lock();
  return value;
}

console.log(withBoxUnluked.call(box));
console.log();
