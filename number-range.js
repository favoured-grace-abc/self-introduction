
function checkRange(num) {
  if (num >= 1 && num <= 33) console.log("low")
    else if (num >= 34 && num <= 66) console.log("medium");
    else if (num >= 67 && num <= 100) console.log("high");
    else console.log("out of range")
}

[10, 50, 85, 0, 100].forEach(num => {
  console.log(`${num}:`);
  checkRange(num);
})