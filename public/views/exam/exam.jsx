var React = require('react');
var $ = require('jquery');

var Alert = require('react-bootstrap').Alert;
var Button = require('react-bootstrap').Button;

var ResultDisplay = require('./resultDisplay.jsx');
var QuestionPanel = require('./questionPanel.jsx');
var QuestionNumber = require('./questionNumber.jsx');


module.exports = React.createClass({
    getInitialState: function () {
        return {
            result: null,
            questions: [{
                form: "",
                verb: "",
                expected: ""
            }],
            currentQuestionNo: 0
        }
    },

    componentDidMount: function () {
        $.get("/questions", function (result) {
            this.setState({
                questions: result
            });
        }.bind(this));
    },

    currentQuestion: function () {
        return this.state.questions[this.state.currentQuestionNo];
    },

    submitAnswer: function (answer) {
        var expectedAnswer = this.currentQuestion().expected;
        var correct = answer === expectedAnswer;

        this.setState({
            result: {
                correct: correct,
                providedAnswer: answer,
                expectedAnswer: expectedAnswer
            },
            currentQuestionNo: this.state.currentQuestionNo + 1
        });
    },

    render: function () {
        var mainPanel = null;

        if (this.state.currentQuestionNo >= this.state.questions.length) {
            mainPanel = (<Alert bsStyle="success">
                <span>We are done for today!</span>
                <Button bsStyle="link" href="#">Back to main page</Button>
            </Alert>)
        } else {
            mainPanel = (
                <div>
                    <QuestionPanel question={this.currentQuestion()} onSubmit={this.submitAnswer}/>
                    <QuestionNumber currQuestionNo={this.state.currentQuestionNo}
                                    totalQuestions={this.state.questions.length}/>
                </div>)
        }

        return (
            <div>
                <ResultDisplay result={this.state.result}/>
                {mainPanel}
            </div>
        );
    }
});