"use strict"

var DEFAULT_INDENTITY = '_default_';
function IfStop() {
  this._working = {};
}
IfStop.prototype.stop = function (name) {
  return this.running(name);
}
IfStop.prototype.running = function (name) {
  name = name || DEFAULT_INDENTITY;
  var st = !!this._working[name];
  this.tryStart(name);
  return st;
}
IfStop.prototype.stoped = function (name) {
  name = name || DEFAULT_INDENTITY;
  var st = !this._working[name];
  this.tryStart(name);
  return st;
}
IfStop.prototype.tryStart = function (name) {
  name = name || DEFAULT_INDENTITY;
  if (!this._working[name]) this.start(name);
}
IfStop.prototype.start = function (name) {
  name = name || DEFAULT_INDENTITY;
  this._working[name] = true;
}
IfStop.prototype.done = function (name) {
  name = name || DEFAULT_INDENTITY;
  this._working[name] = false;
}

module.exports = IfStop;
