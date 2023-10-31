/* // disable rightclick
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
}  */



document.addEventListener("DOMContentLoaded", function () {
  const failedAlert = document.getElementById("failed");
  const sentAlert = document.getElementById("sent");
  // Set opacity of the "failed" alert to 1
  failedAlert.style.opacity = "0";
  sentAlert.style.opacity = "0";

  document.getElementById("testButton").addEventListener("click", function () {
    fetch('http://localhost:3301/test')
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.text(); // Read the response as text
      })
      .then(data => {
        console.log(data); // This will log the plain text response
        // Handle the response data here
        alert(data);
      })
      .catch(error => {
        console.error("2Error:", error);
        // Handle the error here
        alert("Failed to fetch test data.2");
      });
  });
  
  
   document.getElementById("powerpc").addEventListener("click", function () {
    fetch('http://localhost:3301/wake')
    .then(response => {
      if (!response.ok) {
        throw response.text;
      }
      return response.text();
    })
    .then(data => {
      console.log(data);
      sentAlert.style.opacity = "1";
      failedAlert.style.opacity = "0";
    })
    .catch(error => {
      console.log("Error:", error);
      // Handle the error here, for example:
      alert(error);
      sentAlert.style.opacity = "0";
      failedAlert.style.opacity = "1";
    });
  }); 
});