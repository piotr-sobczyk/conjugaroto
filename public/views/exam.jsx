var React = require('react');
var $ = require('jquery');

var Alert = require('react-bootstrap').Alert;
var Panel = require('react-bootstrap').Panel;
var Button = require('react-bootstrap').Button;

var ResultDisplay = React.createClass({
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

var QuestionPanel = React.createClass({
    getInitialState: function () {
        return {
            answer: ""
        }
    },
    componentWillReceiveProps: function(nextProps) {
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
        this.props.onSubmit(this.state.answer);
    },
    render: function(){
        return (
            <Panel>
                <div>{this.props.question.form}</div>
                <strong>{this.props.question.verb}</strong>

                <div>Your answer:</div>
                <div><input type="text" value={this.state.answer} onChange={this.answerChanged}/></div>
                <button onClick={this.submitClicked}>Submit</button>
            </Panel>
        );
    }
});

var QuestionNumber = React.createClass({
    guiQuestionNo: function () {
        return this.props.currQuestionNo + 1;
    },
    render: function(){
        return (
            <div>
                Question: {this.guiQuestionNo()} of {this.props.totalQuestions}
            </div>
        )
    }
});

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

    componentDidMount: function() {
        $.get("/questions", function(result) {
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

        if(this.state.currentQuestionNo >= this.state.questions.length){
            mainPanel = (<Alert bsStyle="success">
                <span>We are done for today!</span>
                <Button bsStyle="link" href="#">Back to main page</Button>
            </Alert>)
        } else {
            mainPanel = (
                <div>
                    <QuestionPanel question={this.currentQuestion()} onSubmit={this.submitAnswer}/>
                    <QuestionNumber currQuestionNo={this.state.currentQuestionNo} totalQuestions={this.state.questions.length}/>
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