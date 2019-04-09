$(document).ready(function() {
    var japan = document.getElementById('japan');
    japan.onclick = showjapan;
}) //funzione - variabile japan 

function showjapan (){
    var opened = window.open("");
    var jap= load("articles.html");
opened.document.write("<html><head><title>MyTitle</title></head><body>" + jap + "</body></html>");
}