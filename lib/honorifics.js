
const _ = require('lodash');

var honorifics = require('../data/honorifics.json');


honorifics = honorifics.filter(w => w.length > 1);

var honorific_regex = new RegExp('(\\b)(' + honorifics.join('|') + ')\\.?(\\.|\\b)', 'ig');


module.exports = {
    honorifics,
    honorific_regex
};