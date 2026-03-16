
let totalBill = 15000;
let numberOfPeople = 4;
let tipPercent = 10;

let tipAmount = (totalBill * tipPercent) / 100;
let totalWithTip = totalBill + tipAmount;
let eachPersonPays = totalWithTip / numberOfPeople;

console.log(`tip amount: ${tipAmount}`);
console.log(`total with tip: ${totalWithTip}`);
console.log(`each person pays: ${eachPersonPays}`);