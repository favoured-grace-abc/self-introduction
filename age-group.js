// Age Group Classifier

function classifyAge(age) {
  if (age >= 0 && age <= 2) console.log("Baby");
  else if (age >= 3 && age <= 12) console.log("Child");
  else if (age >= 13 && age <= 17) console.log("Teenager");
  else if (age >= 18 && age <= 35) console.log("Young Adult");
  else if (age >= 36 && age <= 59) console.log("Adult");
  else if (age >= 60) console.log("Senior");
  else console.log("Invalid age")
}

[2, 10, 15, 22, 45, 70].forEach(age => {
  console.log(`Age ${age}:`);
  classifyAge(age);
})