
function maleMarriageEligibility(gender,age,boyName) {
    var eligibility = gender == `Male` && age >=21 ? `hey ${boyName} you are eligible for Marriage` : `Not Eligible for Marriage`;
    return eligibility;
}

 var result = maleMarriageEligibility("Male",25,"Billgates");
 console.log(result);

 var result = maleMarriageEligibility("Male",17,"Stew Jobs");
 console.log(result);

 console.log(`---------------------Step 2 -------------`);
 function femaleMarriageEligibility(gender,age,girlName) {

    var eligibility = gender == `Female` && age >=18 ? `hey ${girlName} you are eligible for Marriage` : `Not Eligible for Marriage`;
    return eligibility;

 }

 var result =  femaleMarriageEligibility("Female",16,"Jenifer");
 console.log(result);

 var result =  femaleMarriageEligibility("Female",27,"Malinda Gates");
 console.log(result);





