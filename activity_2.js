function back(){
    window.location= "act1.html";
}
function getscore(){
    score = localStorage.getItem("score");
    document.getElementById("label2").innerHTML= "Score: " + score;
}