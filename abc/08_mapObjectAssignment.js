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


const bankMap = new Map();

bankMap.set(1234,axis_bank);
bankMap.set(1235,sbi_bank);
bankMap.set(1236,icici_bank);
bankMap.set(1237,kotak_bank);
bankMap.set(1238,hdfc_bank);
bankMap.set(1239,panjab_bank);

console.log(bankMap);

const totalKeys = bankMap.keys();
for (const key of totalKeys) {

    obj = bankMap.get(key);
    console.log("Bank Name",obj.bank_name,"Account No",obj.account_no,"Interest rate",obj.interest_rate);
    
}

