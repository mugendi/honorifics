const honorifics = require('./lib/honorifics.js');
const honorifics_gender = require('./data/honorifics-gender.json');
const _ = require('lodash');


function extract(str) {

    if (!str || typeof str !== 'string') {
        throw new Error("Argument passed must be a string");
    }

    // console.log(honorifics.honorific_regex);

    var matches = (str.match(honorifics.honorific_regex) || [])
        // .map(w => w.trim());

    // console.log(matches);

    matches = matches.map(honorofic => {
            honorofic = honorofic.toLowerCase();

            for (var gender in honorifics_gender) {
                let arr = honorifics_gender[gender];
                let pat = new RegExp('(' + arr.join('|') + ')\\.?', 'i');

                honorofic = honorofic.trim();

                if (pat.test(honorofic)) {
                    return {
                        honorofic,
                        gender
                    }
                }

            }

            return {
                        honorofic : honorofic,
                        gender : 'unknown'
                    }
        })
        .filter(m => m);

    // console.log(matches);

    matches = _.merge(
        {string : str},
        {name : str.replace(honorifics.honorific_regex, '').trim()} ,
        {gender:'unknown'},
         _.pick(_.first( _.orderBy( _.map( _.countBy( _.filter(matches, o=>o.gender!=='unknown'), 'gender') , (c, i) => {
            return {
                gender: i,
                count : c
            }
        }), 'count', 'desc')), 'gender') ,

        (matches.length ? { honorofics :matches } : {})
    );

    return _.size(matches) ? matches : null;

}


module.exports = {extract};