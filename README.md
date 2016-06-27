##IfStop [![Build Status](https://travis-ci.org/ericdum/wait.svg?branch=master)](https://travis-ci.org/ericdum/wait)

###Usage

```javascript
var IfStop = require('ifstop');
var loading = new IfStop();

if (loading.stop("name space or let it empty")) return false;
// ... do your work
loading.done("name space or let it empty");

```
