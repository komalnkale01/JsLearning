
var voteEligible = function(age){

    if ( age == 0 ||  age < 0  || age > 130 || typeof age == 'undefined' || age == null  ){
        console.log(` ${age}  Invalid data`);
   
    }else{

        if(age>=21){
            console.log(`Your age: ${age} You are  Eligible for Voting`);
        }
        else{
            console.log(` Your age:   ${age}  so, Not eligible for Voting`);
        }
    }   
}


voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);



