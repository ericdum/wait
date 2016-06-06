##IfStop [![Build Status](https://travis-ci.org/ericdum/ifstop.svg?branch=master)](https://travis-ci.org/ericdum/ifstop)

###Usage

```javascript
var IfStop = require('ifstop');
var loading = new IfStop();

if (loading.stop()) return false;
// ... do your work
loading.done();

```
