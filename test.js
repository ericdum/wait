var IfStop = require("./index");
var expect = require("expect.js");

describe("if stop", function(){
  var loading = new IfStop();
  it("true at first test", function(){
    expect(loading.true()).to.be.eql(true);
  })
  it("false for next tests", function(){
    expect(loading.true()).to.be.eql(false);
    expect(loading.true()).to.be.eql(false);
    expect(loading.true()).to.be.eql(false);
  })
  it("true after called done", function(){
    expect(loading.true()).to.be.eql(false);
    loading.done();
    expect(loading.false()).to.be.eql(false);
    expect(loading.false()).to.be.eql(true);
  })
});
