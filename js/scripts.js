// Business Logic

function python() {
  return "python";
}

function ruby() {
  return "ruby";
}

function javaScript() {
  return "JavaScript";
} 

// User Interface Logic


function letsTest(event) {
  event.preventDefault();
  const question1 = document.getElementById("question1").value;
  const question2 = document.getElementById("question2").value;
  const question3 = document.getElementById("question3").value;
  const question4 = document.getElementById("question4").value;
  const question5 = document.getElementById("question5").value;
  console.log("checking");

}


window.addEventListener("load", function() {
  const form = document.getElementById("language");
  form.addEventListener("submit", letsTest);
});