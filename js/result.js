var points = sessionStorage.getItem("points");

var head_result = document.getElementById("result-header");
var body_result = document.getElementById("result-body");

head_result.innerHTML = "That's nice! You've got "+points;
body_result.innerHTML = "I hope you learned more about marvel!";


function reset(){
location.href = "index.html";
}

