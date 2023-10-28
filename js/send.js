document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("login-error-msg2");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "1" && password === "1") {
            alert("Passed!");
            postMessage("blahblah")
        } else {
            document.getElementById("login-error-msg2").style.opacity = "1";
        }
    });
});

// disable rightclick
document.addEventListener("contextmenu", function (disablemouse) {
    disablemouse.preventDefault();
    document.getElementById('smefpw2').innerHTML += "<span style=\"font-family: verdana, sans-serif;\"><span style=\"color: #009EBD;\">[smef]</span> context menu is disabled</font><br>";
    i += 1;
    checkConsole();
}, false);

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 

