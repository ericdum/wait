"use strict"
class IfStop {
  constructor() {
    this._done = true;
  }
  stop() {
    return this.false();
  }
  true() {
    if (this._done) {
      this.start();
      return true;
    } else {
      return false;
    }
  }
  false() {
    if (this._done) {
      this.start();
      return false;
    } else {
      return true;
    }
  }
  start() {
    this._done = false;
  }
  done() {
    this._done = true;
  }
}

module.exports = IfStop;
