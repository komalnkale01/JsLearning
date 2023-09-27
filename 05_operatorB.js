function greaterNumber(num1, num2) {

  console.log(num1, num2);

  var result = num1 > num2 ? num1 : num2;

  console.log(`Greater Number ${result}`);
}
greaterNumber(15, 10);
greaterNumber(10, -10);
greaterNumber(800, 899);

function isEvenOrOddNum(num1){

     var result = num1 % 2 == 0 ? true : false ; 
     return result ;
}

var num1 = 29;
var result = isEvenOrOddNum(num1);
console.log(`Given number is ${num1} and result is= ${result}`);

var num1 = 44;
var result = isEvenOrOddNum(num1);
console.log(`Given number is ${num1} and result is= ${result}`);

var num1 = 0;
var result = isEvenOrOddNum(num1);
console.log(`Given number is ${num1} and result is= ${result}`);

var num1 = 101;
var result = isEvenOrOddNum(num1);
console.log(`Given number is ${num1} and result is= ${result}`);


function wordLength(str) {

    console.log(`Length of String ${str.length}`);
    var result = str.length % 2 == 0 ? "EVEN" : "ODD";
    
    return result;   
}

var returnResult = wordLength("JavaScript");
console.log(`Print given String is odd or Even "JavaScript" ${returnResult}`);

var returnResult = wordLength("Developer");
console.log(`Print given String is odd or Even "Developer" ${returnResult}`);

var returnResult = wordLength("Google");
console.log(`Print given String is odd or Even "Google" ${returnResult}`);
