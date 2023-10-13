

const array = [11, 3, 6, 10, 43, 29, 50];array

var count = 0;
var flag = 0;

for (let index = 0 ; index < array.length;index++){

    flag = 0;

    for(let value = 2; value < array[index]; value++){
     
         if(array[index] % value == 0){

            flag = 1;
         }
    }
    if(flag == 0){
        count++;
    }
}
console.log(" Total Prime Numbers ", count);




















// var flag = 0;
// var count = 0;

// for (let )

// for(let index = 2; index < num; index ++){
//     if(num%index ==0){

//         flag = 1;
//     }
// }

// if(flag == 0){
//     console.log(` This number is prime`);
// }else{
//     console.log(` This number is not prime`);
// }

