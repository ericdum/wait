"use strict"
class IfStop {
  constructor() {
    this._done = true;
  }
  stop() {
    return this.running();
  }
  running() {
    var st = !this._done;
    this.tryStart();
    return st;
  }
  stoped() {
    var st = this._done;
    this.tryStart();
    return st;
  }
  tryStart() {
    if (this._done) this.start();
  }
  start() {
    this._done = false;
  }
  done() {
    this._done = true;
  }
}

module.exports = IfStop;
