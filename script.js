// script.justifyContent: 
let caretColor = 0;


function addtocart() {
    cartcount++;
    document.getElementById("cart-count").innerText =cartcount;
}

document.getElementById("loginform").addEventListener("submit"), function(event) {
event.preventdefault();

const Email = document.getElementById("Email").value;
const Password = document.getElementById("Password").value;
const errormessage = document.getElementById("errormessage");

if (Email === "" || Password === "")
    errormessage.textContent = {}
else{
    errormessage.textContent = ""; //Reset message
    // Add here the codes for login vrification, suchas sending data to the kha
}
};