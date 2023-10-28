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

document.addEventListener("DOMContentLoaded", function () {
  const failedAlert = document.getElementById("failed");
  const sentAlert = document.getElementById("sent");
  // Set opacity of the "failed" alert to 1
  failedAlert.style.opacity = "0";
  sentAlert.style.opacity = "0";
  
  document.getElementById("powerpc").addEventListener("click", function() {
    // Simulate a successful WoL packet transmission (replace with your AJAX request)
      // Change the visibility of the alerts
      sentAlert.style.opacity = "1";
  });
});
