"use strict"

var DEFAULT_INDENTITY = '_default_';
class IfStop {
  constructor() {
    this._working = {};
  }
  stop(name) {
    return this.running(name);
  }
  running(name) {
    name = name || DEFAULT_INDENTITY;
    var st = !!this._working[name];
    this.tryStart(name);
    return st;
  }
  stoped(name) {
    name = name || DEFAULT_INDENTITY;
    var st = !this._working[name];
    this.tryStart(name);
    return st;
  }
  tryStart(name) {
    name = name || DEFAULT_INDENTITY;
    if (!this._working[name]) this.start(name);
  }
  start(name) {
    name = name || DEFAULT_INDENTITY;
    this._working[name] = true;
  }
  done(name) {
    name = name || DEFAULT_INDENTITY;
    this._working[name] = false;
  }
}

module.exports = IfStop;
