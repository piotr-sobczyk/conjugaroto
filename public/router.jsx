var React = require("react");

var PageHeader = require("react-bootstrap").PageHeader;

//react-router imports
var Router = require('react-router');
var Route = require('react-router').Route;
var DefaultRoute = require('react-router').DefaultRoute;
var RouteHandler = require('react-router').RouteHandler;
var Link = require('react-router').Link;

//views imports
var Home = require('./views/home.jsx');
var Exam = require("./views/exam.jsx");
var Settings = require("./views/settings.jsx");

var App = React.createClass({
    render: function () {
        return (
            <div>
                <PageHeader className="text-center">Conju-gar(oto)</PageHeader>
                <RouteHandler/>
            </div>
        );
    }
});

var routes = (
    <Route handler={App} path="/">
        <DefaultRoute handler={Home}/>
        <Route name="exam" handler={Exam}/>
        <Route name="settings" handler={Settings}/>
    </Route>
);

module.exports = {
    run: function(hostElem){
        Router.run(routes, function (Handler) {
            React.render(<Handler/>, hostElem);
        });
    }
};