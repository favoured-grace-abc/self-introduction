
function checkSign(value) {
  if (value > 0) console.log("Positive");
  else if (value < 0) console.log("Negative");
  else console.log("Zero");
}

[-100, 0, 1, -1, 999].forEach(value => {
  console.log(`${value}:`);
  checkSign(value);
})