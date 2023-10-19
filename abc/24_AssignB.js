
class Employee{

    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){

        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company; 
    }
}

const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radha","HR",74000,"wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");



const empArray = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`Step 1. Print only TCS Employee name and Company name `);
empArray.forEach( function( empObj ){

    if(empObj.emp_company =="TCS"){
        console.log(`Employee Name :${empObj.emp_name} , Employee Company: ${empObj.emp_company}`);
    }
} )

console.log(`==============================================================`);
console.log(`Step 2. Print Employee who is working in Finance Department `);
empArray.forEach( function( empObj ){

    if(empObj.emp_dept =="Finance"){
        console.log(`Employee Name :${empObj.emp_name} , Employee Company: ${empObj.emp_dept}`);
    }
} )

console.log(`==============================================================`);
console.log(`Step 3. Print Employee who's name starts with R `);
empArray.forEach( function( empObj ){

    let empName = empObj.emp_name;
    if(empName.startsWith('R')){
        console.log(`Employee : ${empObj.emp_name}`);
    }
} )

console.log(`==============================================================`);
console.log(`Step 4. Print Employee who's salary >=75000`);
empArray.forEach( function( empObj ){
    if(empObj.emp_salary >= 75000){
        console.log(`Employee Name: ${empObj.emp_name}, Employee Company: ${empObj.emp_company}, Salary: ${empObj.emp_salary}`);
    }
} )


console.log(`==============================================================`);
console.log(`Step 5. Print Employee who's salary >=50000 and Who is Belong IT Department`);
empArray.forEach( function( empObj ){
    if(empObj.emp_salary >= 50000 && empObj.emp_dept=='IT'){
        console.log(`Employee Name: ${empObj.emp_name}, Employee Company: ${empObj.emp_company}, Salary: ${empObj.emp_salary}`);
    }
} )

console.log(`==============================================================`);
console.log(`Step 6. Print Employee who's Company name is 'Infy' `);
empArray.forEach( function( empObj ){
    if(empObj.emp_company =="Infy"){
        console.log(`Employee Name: ${empObj.emp_name}, Employee Company: ${empObj.emp_company}, Salary: ${empObj.emp_salary}`);
    }
} )












