function notifyUser() {
  const email = document.getElementById("email").value;
  const msg = document.getElementById("successMsg");

  if (email.trim() !== "") {
    msg.style.display = "block";
  }
}


