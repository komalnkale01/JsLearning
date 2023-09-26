
function stringHandsOn() { 
    var str =  "  Hey you are doing good,keep it up    ";
    console.log(`Step 1.given string is : ${str}`);
    console.log(`Step 2.length of String before trim: ${str.length}`);

    console.log(`=======step 3========`);   
    var result = str.trim();
    console.log(result);
    console.log(`length after trim : ${result.length}`)

    console.log(`=======step 4========`);
    var lengthBeforeTrim = str.length;
    var lengthAfterTrim = result.length;

    var count = lengthBeforeTrim - lengthAfterTrim;
    console.log('Removed extra spaces are: ', count);

    console.log(`=======step 5========`);

    var firstChar = result.charAt(0);
    var lastChar = result.charAt(result.length-1);
    console.log(`firstChar : ${firstChar}, lastChar :${ lastChar}`);

    console.log(`=======step 6=======`)
    var noOfWords = result.split(" ");
    console.log(noOfWords);
    console.log(noOfWords.length);

    console.log(`====step 7========`);
    var indexOf = result.indexOf('good');
    console.log("Index of Good Word is:", indexOf);

     console.log(`========step 8============`);

      var result= str.slice(22)
      console.log(result);

      console.log(`=======step 9============`);
      var result = str.trim();
      console.log(result);
      console.log( result.endsWith(`up`));

       console.log(`-------step 10 ------------`);
       console.log(result.startsWith(`Hey`));

}
stringHandsOn();
