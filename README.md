# request-looping
A package that make a lopping request in a url.

### Installation

request-looping requires [Node.js](https://nodejs.org/) to run.

Download and extract the [request-lopping](https://github.com/jjonathan/request-looping) to your node_modules folder.

Install the dependencies:
```sh
$ npm install
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
