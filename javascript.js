
var quaranta=false
function art1(){
    $("#mainbody").html("")
    $("#mainbody").load('japan.html')
}

function art2(){
    $("#mainbody").html("")
    $("#mainbody").load('alabama.html')
}

function art3(){
    $("#mainbody").html("")
    $("#mainbody").load('lottery.html')
}

function art4(){
    $("#mainbody").html("")
    $("#mainbody").load('delvey.html')
}

function art5(){
    $("#mainbody").html("")
    $("#mainbody").load('machine.html')
}

function art6(){
    $("#mainbody").html("")
    $("#mainbody").load('eudirective.html')
}


function index(){
    $("#mainbody").html("")
    $("#mainbody").load('index-text.html')
}

function about(){
    $("#mainbody").html("")
    $("#mainbody").load('about.html')
}

function documentation(){
    $("#mainbody").html("")
    $("#mainbody").load('documentation.html')
}

$(document).ready(function () 
{ 
$("#1560").click(function() {
    quaranta=false
    $("#css").html("")
    $("#css").load('1560.css')
})
      
    
$("#1860").click(function() {
    quaranta=false
    $("#css").html("")
    $("#css").load('1860.css')
})

$("#1927").click(function() {
    quaranta=false
    $("#css").html("")
    $("#css").load('1927.css')
})     

$("#1968").click(function() {
    quaranta=false
    $("#css").html("")
    $("#css").load('1968.css')
})  
      
       
$("#1980").click(function() {
    quaranta=false
    $("#css").html("")
    $("#css").load('1980.css')
})
    
$("#2040").click(function() {
    quaranta= true
    $("#css").html("")
    $("#css").load('2040.css')
})    
})









if (quaranta=true) {
var caller = $(".item1 a");
  var container = $(".item1");
  
  function foo()
  {
      var randX = Math.floor(Math.random() * (container[0].offsetWidth - 150));
      var randY = Math.floor(Math.random() * -(container[0].offsetHeight - 100));
      console.log([randX, randY]);
      caller.stop().animate({"left": randX + "px", "top": randY + "px"});
  }
  
  
      
      caller.on('mouseenter', foo);
      caller.on('click', function(){
          alert('clicked!');
      });
    }  