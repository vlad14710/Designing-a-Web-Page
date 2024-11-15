document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  document.getElementById("successMessage").classList.remove("hidden");
  this.reset();
});
