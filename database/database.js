var Datastore = require('nedb');

//In-memory datastore
var db = new Datastore();

var questions = [{
    "form": "3rd person, indicativo, presente",
    "verb": "fazer",
    "expected": "faz"
}, {
    "form": "1st person, indicativo, presente",
    "verb": "ir",
    "expected": "vou"
}, {
    "form": "1st person, indicativo, presente",
    "verb": "ler",
    "expected": "leio"
}, {
    "form": "2nd person, indicativo, presente",
    "verb": "cozinhar",
    "expected": "cozinhas"
}];

db.insert(questions);

module.exports = {
    loadQuestions: function(callback){
        return db.find({}, function(err, docs){
            callback(docs);
        });
    }
};