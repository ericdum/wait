##IfStop [![Build Status](https://travis-ci.org/ericdum/wait.svg?branch=master)](https://travis-ci.org/ericdum/wait)

###Usage

```javascript
var IfStop = require('ifstop');
var loading = new IfStop();

if (loading.stop()) return false;
// ... do your work
loading.done();

```
