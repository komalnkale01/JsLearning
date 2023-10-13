
const jsonData = `{
     "name":"Aleix Melon",
     "id":"E00245",
     "role":["Dev","DBA"],
     "age":23,
     "doj":"11-12-2019",
     "married":false,
     "address":{
        "street": "32,laham st.",
        "city": "innsbruck",
        "country": "austria"

     },
     "referred_by": "E0012"
}`


console.log( typeof jsonData);

const dataObject = JSON.parse(jsonData);
console.log(typeof dataObject);
console.log(dataObject);

console.log(dataObject.role[0]);


//console.log(dataObject.name);

var lastName = dataObject.name.slice(6);
console.log(lastName);

console.log(dataObject.doj.slice(6));








