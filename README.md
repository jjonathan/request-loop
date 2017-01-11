# request-loop
A package that make a lopping in a url.

### Installation

```sh
$ npm install request-loop
```

### Usage

```javascript
var Request = require('request-loop').Request;
var request = new Request();

request.setHost('localhost');
request.setPort('8083');
request.setPath('/helloworld.php');
request.setTimeReload('30');

request.start();
```
