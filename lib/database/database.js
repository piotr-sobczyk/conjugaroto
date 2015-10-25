var Datastore = require('nedb');
var Promise = require('bluebird');
Promise.promisifyAll(Datastore.prototype);

//In-memory datastore
var db = new Datastore();

var verbs = [{
    infinitive: "fazer",
    forms: {
        present_ind: {
            first_singular: "faço",
            second_singular: "fazes",
            third_singular: "faz",
            first_plural: "fazemos",
            third_plural: "fazem"
        }
    }
}, {
    infinitive: "ler",
    forms: {
        present_ind: {
            first_singular: "leio",
            second_singular: "lês",
            third_singular: "lê",
            first_plural: "lemos",
            third_plural: "leem"
        }
    }
}, {
    infinitive: "dar",
    forms: {
        present_ind: {
            first_singular: "dou",
            second_singular: "dás",
            third_singular: "dá",
            first_plural: "damos",
            third_plural: "dão"
        }
    }
}, {
    infinitive: "despir",
    forms: {
        present_ind: {
            first_singular: "dispo",
            second_singular: "despes",
            third_singular: "despe",
            first_plural: "despimos",
            third_plural: "despem"
        }
    }
}, {
    infinitive: "dormir",
    forms: {
        present_ind: {
            first_singular: "durmo",
            second_singular: "dormes",
            third_singular: "dorme",
            first_plural: "dormimos",
            third_plural: "dormem"
        }
    }
}, {
    infinitive: "dizer",
    forms: {
        present_ind: {
            first_singular: "digo",
            second_singular: "dizes",
            third_singular: "diz",
            first_plural: "dizemos",
            third_plural: "dizem"
        }
    }
}, {
    infinitive: "esquecer",
    forms: {
        present_ind: {
            first_singular: "esqueço",
            second_singular: "esqueces",
            third_singular: "esquece",
            first_plural: "esquecemos",
            third_plural: "esquecem"
        }
    }
}, {
    infinitive: "estar",
    forms: {
        present_ind: {
            first_singular: "estou",
            second_singular: "estas",
            third_singular: "está",
            first_plural: "estamos",
            third_plural: "estão"
        }
    }
}, {
    infinitive: "conseguir",
    forms: {
        present_ind: {
            first_singular: "consigo",
            second_singular: "consegues",
            third_singular: "consegue",
            first_plural: "conseguimos",
            third_plural: "conseguem"
        }
    }
}, {
    infinitive: "conhecer",
    forms: {
        present_ind: {
            first_singular: "conheço",
            second_singular: "conheces",
            third_singular: "conhece",
            first_plural: "conhecemos",
            third_plural: "conhecem"
        }
    }
}, {
    infinitive: "ser",
    forms: {
        present_ind: {
            first_singular: "sou",
            second_singular: "és",
            third_singular: "é",
            first_plural: "somos",
            third_plural: "são"
        }
    }
}, {
    infinitive: "ter",
    forms: {
        present_ind: {
            first_singular: "tenho",
            second_singular: "tens",
            third_singular: "tem",
            first_plural: "temos",
            third_plural: "têm"
        }
    }
}, {
    infinitive: "vir",
    forms: {
        present_ind: {
            first_singular: "venho",
            second_singular: "vens",
            third_singular: "vem",
            first_plural: "vimos",
            third_plural: "vêm"
        }
    }
}, {
    infinitive: "ver",
    forms: {
        present_ind: {
            first_singular: "vejo",
            second_singular: "vês",
            third_singular: "vê",
            first_plural: "vemos",
            third_plural: "veem"
        }
    }
}, {
    infinitive: "haver",
    forms: {
        present_ind: {
            third_singular: "há",
        }
    }
}];

db.insert(verbs);

module.exports = {
    loadVerbs: function (callback) {
        return db.findAsync({});
    }
};