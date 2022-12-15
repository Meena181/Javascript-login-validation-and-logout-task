var email=document.querySelector("#email");
var password=document.querySelector("#password");
var warning=document.querySelector(".wrong");
var open=document.querySelector(".hide");
var loginPage = document.querySelector(".main-wrap");
var loginpage=document.querySelector(".main-wrap");

function verify() {
    if(email.value==="kirubhag@gmail.com" && password.value==="kirubha2022") {
		open.style="display:block";
		loginPage.style = "display:none;";
	} else {
		warning.style="display:block;";
	}
}
function loginopen(){
    loginpage.style="display:flex;";
    open.style="display:none;";
    email.value="";
    password.value="";
    warning.style="display:none;";
}