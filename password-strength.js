let password = "hello";

function checkPasswordStrength(password) {
  if (password.length < 6) console.log("Weak");
  else if (password.length >= 6 && password.length <= 10) console.log("Moderate");
  console.log("Strong");
}

["abc", "mypass", "sunshine", "SecurePass2024"].forEach(password => {
  console.log(`${password}:`);
  checkPasswordStrength(password);
})