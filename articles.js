$(document).ready(function() {
    var japan = document.getElementById('japan');
    japan.onclick = showjapan;
}) //funzione - variabile japan 

function showjapan (){
    var opened = window.open("articles.html");
    var jap= load("articles.html");
    console.log(jap)
opened.document.write(jap);
}