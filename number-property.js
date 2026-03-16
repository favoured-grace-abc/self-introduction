
let n = 36;

console.log(`${n} is ${n % 2 === 0 ? "even" : "odd"}`);   

if (n > 0) console.log(`${n} is positive`);         
else if (n < 0) console.log(`${n} is negative`);
else console.log(`${n} is zero`);

console.log(`${n} is ${n % 4 === 0 ? "" : "not "} divisible by 4`); 

let sqrt = Math.sqrt(n);
console.log(`${n} is ${sqrt % 1 === 0 ? "" : "not "} a perfect square`);