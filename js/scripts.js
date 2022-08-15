// User Interface Logic


function letsTest(event) {
  event.preventDefault();
  const question1 = document.getElementById("question1").value;

  let result;
  if (question1==="1") {
    result = "Ruby"
  } else if (question1==="2") {
    result = "Python!";
  } else if (question1==="3") {
    result = "JavaScript!";
  } else {
    result = "unavailable! Please select an answer for each question.";
  }

  document.querySelector("div#results").removeAttribute("class");
  document.getElementById("output").innerText = result;
}

window.addEventListener("load", function() {
  const form = document.getElementById("language");
  form.addEventListener("submit", letsTest);
});