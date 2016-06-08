var IfStop = require("./index");
var expect = require("expect.js");

describe("if stop", function(){
  var loading = new IfStop();
  it("true at first test", function(){
    expect(loading.running()).to.be.eql(false);
  })
  it("false for next tests", function(){
    expect(loading.running()).to.be.eql(true);
    expect(loading.running()).to.be.eql(true);
    expect(loading.running()).to.be.eql(true);
  })
  it("true after called done", function(){
    expect(loading.stop()).to.be.eql(true);
    loading.done();
    expect(loading.stop()).to.be.eql(false);
    expect(loading.stop()).to.be.eql(true);
  })

  describe('Examples', function(){
    it("exp1", function(){
      var loading = new IfStop();
      if (loading.stop()) return expect(true).to.be(false);
      expect(true).to.be(true);
      if (loading.stop()) expect(true).to.be(true);
      if (loading.stop()) expect(true).to.be(true);
      loading.done();
      if (loading.stop()) expect(true).to.be(false);
    })
  })
});
