//Will reveal object as soon as the browser loads

window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const question1 = document.getElementById("question1").value;
    const question2 = document.getElementById("question2").value;
    const question3 = document.getElementById("question3").value;
    const question4 = document.getElementById("question4").value;
    const question5 = document.getElementById("question5").value;
  }
}