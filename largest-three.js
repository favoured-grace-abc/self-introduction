
function findLargest(a, b, c) {
  let largest;
  if (a >= b && a >= c) {
    largest = a;
  } else if (b >= a && b >= c) {
    largest = b;
  } else {
    largest = c;
  }

  console.log(`The largest number is ${largest}`);
}

findLargest(42, 78, 55);
findLargest(100, 120, 50);
findLargest(5, 8, 10);