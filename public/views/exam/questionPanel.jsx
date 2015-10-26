var React = require('react');

var Panel = require('react-bootstrap').Panel;

module.exports = React.createClass({
    getInitialState: function () {
        return {
            answer: ""
        }
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            answer: ""
        });
    },
    answerChanged: function (evt) {
        this.setState({
            answer: evt.target.value
        });
    },
    submitClicked: function () {
        this.submit();
    },
    keyPressed: function (evt) {
        if (evt.key === "Enter") {
            this.submit();
        }
    },
    submit: function () {
        this.props.onSubmit(this.state.answer);
    },
    render: function () {
        return (
            <Panel>
                <div>{this.props.question.form}</div>
                <strong>{this.props.question.verb}</strong>

                <div>Your answer:</div>
                <div><input type="text" value={this.state.answer} onChange={this.answerChanged}
                            onKeyPress={this.keyPressed}/></div>
                <button onClick={this.submitClicked}>Submit</button>
            </Panel>
        );
    }
});
