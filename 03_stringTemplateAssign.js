
function stringTemplateAssign(){
    console.log(`My Dream Compnay name is: " Google"` );
    var hobby1 = "Coding";
    var hobby2 = "Travelling";
    var hobby3 = "Cooking";
    console.log(`My Hobbies are :${hobby1},${hobby2},${hobby3}`);

    var result = hobby1.concat(hobby2).concat(hobby3)
    console.log(`concatanation of hobbies ${result}`);
}
stringTemplateAssign();