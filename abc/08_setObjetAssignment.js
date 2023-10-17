class Bank{

    bank_name;
    location;
    account_no;
    ifsc;
    interest_rate;

    constructor(bank_name,location,account_no,ifsc,interest_rate){
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc = ifsc;
        this.interest_rate = interest_rate;
    }

}

const axis_bank = new Bank("Axis Bank", "Pune",12345678,'Axis001',12);
const sbi_bank = new Bank("SBI Bank", "Pune",12345678,'sbi001',12);
const icici_bank = new Bank("icici_Bank", "Pune",12345678,'icici001',12);
const kotak_bank = new Bank("kotak Bank", "Pune",12345678,'kotak001',12);
const hdfc_bank = new Bank("hdfc Bank", "Pune",12345678,'hdfc001',12);
const panjab_bank = new Bank("panjab Bank", "Pune",12345678,'panjab_bank001',12);

const bankSet = new Set();

bankSet.add(axis_bank);
bankSet.add(sbi_bank);
bankSet.add(icici_bank);
bankSet.add(kotak_bank);
bankSet.add(hdfc_bank);
bankSet.add(panjab_bank);

console.log(bankSet.size);

for (const bankObj of bankSet) {

    console.log(`Bank Name:${bankObj.bank_name}, Location:- ${bankObj.location}`);  
}










