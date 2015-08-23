//react-bootstrap imports
//see: http://stackoverflow.com/questions/30371000/react-bootstrap-using-webpack
require('bootstrap/dist/css/bootstrap.css');

var router = require('./router.jsx');
router.run(document.getElementById('app'));
console.log("application started");