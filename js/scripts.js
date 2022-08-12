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

  // const option = document.getElementById("input[name = 'option']:checked").value;



  let result;
  if (question1, question3, question5  === "1") {
    result = "Python";
  } else if (question2 === "2") {
    result = "JavaScript";
  } else {
    result = "Ruby";
  }

  document.querySelector("div#results").removeAttribute("class");
  document.getElementById("output").innerText = result;
}

window.addEventListener("load", function() {
  const form = document.getElementById("language");
  form.addEventListener("submit", letsTest);
});