When dealing with names, you come across honorifics, titles, suffixes and prefixes. 

Extracting these is important in dealing with the sanitrizing the names and/or inferring gender.
 

```javascript 

const honorifics = require('honorifics');

var str = 'Sir Dr. Alex Mark Jr.';
var res = honorifics.extract(str);
console.log(JSON.stringify(res,0,4));

var str = 'Dr. Alex Mark Jr.';
var res = honorifics.extract(str);
console.log(JSON.stringify(res,0,4));

```

This should output:

```json
{
    "string": "Sir Dr. Alex Mark Jr.",
    "name": "Alex Mark",
    "gender": "male",
    "honorofics": [
        {
            "honorofic": "sir",
            "gender": "male"
        },
        {
            "honorofic": "dr.",
            "gender": "unknown"
        },
        {
            "honorofic": "jr.",
            "gender": "unknown"
        }
    ]
}       

{
    "string": "Dr. Alex Mark Jr.",
    "name": "Alex Mark",
    "gender": "unknown",
    "honorofics": [
        {
            "honorofic": "dr.",
            "gender": "unknown"
        },
        {
            "honorofic": "jr.",
            "gender": "unknown"
        }
    ]
}                             
```