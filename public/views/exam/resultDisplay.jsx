var React = require('react');
var Alert = require('react-bootstrap').Alert;

module.exports = React.createClass({
    getDefaultProps: function () {
        return {
            result: null
        }
    },
    render: function () {
        var alertStyle = "info";
        var resultLabel = "Let's start!";
        var explanation = null;

        if (this.props.result) {
            var alertStyle = "success";
            resultLabel = "Correct";

            var provided = this.props.result.providedAnswer;
            explanation = (
                <div>
                    Your answer <strong>{provided}</strong> is good.
                </div>
            );

            if (!this.props.result.correct) {
                resultLabel = "Incorrect";
                var alertStyle = "danger";
                var expected = this.props.result.expectedAnswer;
                explanation = (
                    <div>
                        We expected <strong>{expected}</strong> and you gave <strong>{provided}</strong>
                    </div>);
            }
        }

        return (
            <Alert bsStyle={alertStyle}>
                <strong>{resultLabel}!</strong>
                {explanation}
            </Alert>
        );
    }
});
