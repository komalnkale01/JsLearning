
var square = function(num1){

    return num1 * num1;

}

var num = 5;
var result = square(num);
console.log(`Sqaure of ${num} is ${result}  and type of sqaure varibale is ${typeof square}`);

var num = 6;
var result = square(num);
console.log(`Sqaure of ${num} is ${result}  and type of sqaure varibale is ${typeof square}`);

var num = 25;
var result = square(num);
console.log(`Sqaure of ${num} is ${result}  and type of sqaure varibale is ${typeof square}`);

var num = 100;
var result = square(num);
console.log(`Sqaure of ${num} is ${result}  and type of sqaure varibale is ${typeof square}`);

var num = 67;
var result = square(num);
console.log(`Sqaure of ${num} is ${result}  and type of sqaure varibale is ${typeof square}`);

var num = 89;
var result = square(num);
console.log(`Sqaure of ${num} is ${result}  and type of sqaure varibale is ${typeof square}`);

var num = 59;
var result = square(num);
console.log(`Sqaure of ${num} is ${result}  and type of sqaure varibale is ${typeof square}`);

console.log(`--------step 3--------------`);


var area = function(length, width){
    
    return length * width;

}

var result = area(499,917)
console.log(`Area of Rectangle is: ${result}`);

console.log(`--------step 4--------------`);

var swapValues = function(value1, value2){
    console.log(`----------------Before Swap-------------`);
    console.log(`Value 1 is ${value1} and Value 2 is ${value2}`);

    var temp = value1;
    value1 = value2;
    value2 = temp;
    
    console.log(`----------------After Swap-------------`);
    console.log(`Value 1 is ${value1} and Value 2 is ${value2}`);

}

swapValues("Mahi", "Raina");
swapValues(55, 77);


console.log(`--------step 5--------------`);

var data = function(){

    var str = "JS the most popular language of internet"
    console.log(`Total Characters of String is: ${str.length}`);

    var value = str.charAt(6);
    console.log(`Character at 6th index position is: '${value}' `);
    var value = str.charAt(11);
    console.log(`Character at 11th index position is: '${value}' `);

    var value = str.charAt(str.length-1);
    console.log(`Character at last index position is: '${value}' `);

    var value = str.charAt(0);
    console.log(`Character at First index position is: '${value}' `);

    var value = str.charAt(str.length-3);
    console.log(`Character at 3rd last index position is: '${value}' `);

    var str = "JS the most popular language of internet"
    var totalnoWords = str.split(" ");

    console.log(totalnoWords);

     var length = totalnoWords.length * totalnoWords.length;
     console.log(`Sqaure of Length is:${length}`);











}

data()


