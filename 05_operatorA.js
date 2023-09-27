

function squareOfWordLength(str){

    console.log(`incoming String ${str}`);
    var strLength = str.length;
    console.log(`Length of String is ${strLength}`);

    var squareofLength = strLength * strLength;

    console.log(`Sqaure of Length  ${squareofLength}  `);

}

squareOfWordLength("JavaScript");
squareOfWordLength(`Google Chrome`);
squareOfWordLength(`Developer Smart`);

console.log(" ");
function show() {
    
    var strName = 'I am Angular Developer';
    var strNameLength = strName.length;
    console.log(`Length of strName =  ${strNameLength}`);
    var totalNoofWords = strName.split(" ");
    console.log(`Total no of Words = ${totalNoofWords.length}`);
    console.log(`Divide   ${strName.length / totalNoofWords.length}  ` );
    console.log(`Multiply ${strName.length*totalNoofWords.length} `);


}
show();




