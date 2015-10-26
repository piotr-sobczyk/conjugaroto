var _ = require('underscore');
var database = require('./database/database');

var labels = require('./labels');

var allVerbQuestions = function (verb) {
    //temporarily we deal only with present form
    var forms = verb.forms.present_ind;
    return _.map(forms, function (value, formName) {
        return {
            verb: verb.infinitive,
            form: labels.verbForm[formName],
            expected: value
        };
    });
};

var composeTestFromVerbs = function (verbs) {
    //Returning subset of questions in random order
    return _.chain(verbs).map(allVerbQuestions).flatten().sample(30);
};

exports.generateTestQuestions = function getTestQuestions() {
    return database.loadVerbs().then(composeTestFromVerbs);
};