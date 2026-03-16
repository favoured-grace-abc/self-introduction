

function calculateBill(unitsUsed) {
  let bill = 0;

  if (unitsUsed > 100) {
    bill += (unitsUsed - 100) * 20;
    unitsUsed = 100;
  }
  if (unitsUsed > 50) {
    bill += (unitsUsed - 50) * 15;
    unitsUsed = 50;
  }
  bill += unitsUsed * 10;

  console.log(`Units used: ${unitsUsed}`)
  console.log(`Total bill: ${bill}`)
}

[30, 75, 100, 200].forEach(units => {
  console.log("\n");
  calculateBill(units);
})