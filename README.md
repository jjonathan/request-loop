# request-looping
A package that make a lopping request in a url.

### Installation

```sh
$ npm install request-looping
```

### Usage

```javascript
var Request = require('request-looping').Request;
var request = new Request();

request.setHost('localhost');
request.setPort('8083');
request.setPath('/helloworld.php');
request.setTimeReload('30');

request.start();
```
