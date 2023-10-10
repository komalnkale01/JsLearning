class Vehicle{
    //properties or detamember or attributes
    model;
    color;
    seatingCapacity;
    chasiNo;
    speed;
    //constructor
    constructor(model,color,seatingCapacity,chasiNo,speed){
        this.model = model;
        this.color = color;
        this.seatingCapacity = seatingCapacity;
        this.chasiNo = chasiNo;
        this.speed = speed;
    }

    details(){

    }
}


console.log(`----------step 1-----------`);
const v1 = new Vehicle("Honda","Grey",'5','211244','180');
console.log(`Vehicle deatils ${v1.model},${v1.color},${v1.seatingCapacity},${v1.chasiNo},${v1.speed}`);

const v2 = new Vehicle("Maruti","White",'7','5577576','280');
console.log(`Vehicle deatils ${v2.model},${v2.color},${v2.seatingCapacity},${v2.chasiNo},${v2.speed}`);

const v3 = new Vehicle("mahindra","White",'7','5577576','280');
console.log(`Vehicle deatils ${v3.model},${v3.color},${v3.seatingCapacity},${v3.chasiNo},${v3.speed}`);

const v4 = new Vehicle("tata","White",'7','5577576','280');
console.log(`Vehicle deatils ${v4.model},${v4.color},${v4.seatingCapacity},${v4.chasiNo},${v4.speed}`);

const v5 = new Vehicle("piaggio","White",'7','5577576','280');
console.log(`Vehicle deatils ${v5.model},${v5.color},${v5.seatingCapacity},${v5.chasiNo},${v5.speed}`);



const arrayOfVehicle = [v1,v2,v3,v4,v5];
for (const vehileObject of arrayOfVehicle) {
    //element.details();
    console.log(`Vehicle deatils ${vehileObject.model},${vehileObject.color},${vehileObject.seatingCapacity},${vehileObject.chasiNo},${vehileObject.speed}`);
}

console.log(`------------step2--------------`);

class College{

    name;
    location;
    grade;
    establishmentYear;

    constructor(name,location,grade,establishmentYear){

        this.name = name;
        this.location = location;
        this.grade = grade;
        this.establishmentYear = establishmentYear;
    }

    display(){
        console.log(`College Details: College Name:${this.name} College location: ${this.location} College grade ${this.grade}, College Estableshment Year: ${this.establishmentYear} `);
    }
    
    traverseObject(clgObj){
        console.log(`College Details: College Name:${clgObj.name} College location: ${clgObj.location} College grade ${clgObj.grade}, College Estableshment Year: ${clgObj.establishmentYear} `);
    }




}

const c1 = new College("VP College","Baramati","A","1965");
c1.display();
const c2 = new College("COEP College","Pune","A","1965");
c2.display();
const c3 = new College("Modern College","Satara","A","1965");
c3.display();


console.log("===================Another Way display=================");
const noOfColleges = [c1,c2,c3] ;

for (const colObject of noOfColleges) {
    colObject.display();
}

console.log("+++++++++Step 3++++++++++++++++");
for (const colObject of noOfColleges) {

    for (const clgObj in noOfColleges) {
        colObject.traverseObject(noOfColleges[clgObj]);
    }
}

