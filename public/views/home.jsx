var React = require('react');

//react-bootstrap imports
var Well = require('react-bootstrap').Well;
var Button = require('react-bootstrap').Button;

var wellStyles = {maxWidth: 200, margin: '0 auto 10px'};

module.exports = React.createClass({
    render: function () {
        return (
            <Well style={wellStyles}>
                <Button bsStyle="primary" href="#exam" block>Exercise!</Button>
                <Button href="#settings" block>Settings</Button>
            </Well>
        );
    }
});