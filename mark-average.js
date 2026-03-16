let english = 78, math = 85, science = 60, history = 92, art = 74;
let total = english + math + science + history + art;
let average = total / 5;

let grade;
if (average >= 90) grade = "A";
else if (average >= 80) grade = "B"
else if (average >= 70) grade = "C"
else if (average >= 60) grade = "D"
else grade = "F";

console.log(`total: ${total}`);
console.log(`average: ${average.toFixed(1)}`);
console.log(`grade: ${grade}`);