var React = require('react');

var ProgressBar = require('react-bootstrap').ProgressBar;

module.exports = React.createClass({
    propTypes: {
        currQuestionNo: React.PropTypes.number.isRequired,
        totalQuestions: React.PropTypes.number.isRequired
    },

    guiQuestionNo: function () {
        //We add 1 to make it 1-based (human readable)
        return this.props.currQuestionNo + 1;
    },
    percentageProgress(){
        var percentage = (this.props.currQuestionNo/this.props.totalQuestions) * 100;
        return Math.round(percentage);
    },
    render: function () {
        return (
            <div>
                <div>
                    Question: {this.guiQuestionNo()} of {this.props.totalQuestions}
                </div>
                <ProgressBar now={this.percentageProgress()}/>
            </div>
        )
    }
});