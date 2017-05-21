
const honorifics = require('./');

var str = 'Sir Dr. Alex Mark Jr.';
var res = honorifics.extract(str);
console.log(JSON.stringify(res,0,4));

var str = 'Esq mark muga';
var res = honorifics.extract(str);
console.log(JSON.stringify(res,0,4));