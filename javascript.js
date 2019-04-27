$(document).ready(function () 
{ 
    var art1 = $("#button-art1")
    var art2 = $("#button-art2")
    var art3 = $("#button-art3")
    var art4 = $("#button-art4")
    var art5 = $("#button-art5")
    var art6 = $("#button-art6")
    
    
    art1.click(function() {
    $("#mainbody").html("")
    $("#mainbody").load('japan.html')
})

    art2.click(function() {
    $("#mainbody").html("")
    $("#mainbody").load('alabama.html')
})

    art3.click(function() {
    $("#mainbody").html("")
    $("#mainbody").load('lottery.html')
})

    art4.click(function() {
    $("#mainbody").html("")
    $("#mainbody").load('delvey.html')
})

    art5.click(function() {
    $("#mainbody").html("")
    $("#mainbody").load('machine.html')
})

    art6.click(function() {
    $("#mainbody").html("")
    $("#mainbody").load('eudirective.html')
})



    item1.click(function() {
    $("#mainbody").html("")
    $("#mainbody").load('japan.html')
})

    item2.click(function() {
    $("#mainbody").html("")
    $("#mainbody").load('alabama.html')
})

    item3.click(function() {
    $("#mainbody").html("")
    $("#mainbody").load('lottery.html')
})

    item4.click(function() {
    $("#mainbody").html("")
    $("#mainbody").load('delvey.html')
})

    item5.click(function() {
    $("#mainbody").html("")
    $("#mainbody").load('machine.html')
})

    item6.click(function() {
    $("#mainbody").html("")
    $("#mainbody").load('eudirective.html')
})








$(".index-button").click(function() {
    $("#mainbody").html("")
     $("#mainbody").load('index-text.html')
    
     

    item1 = $(".item1 a");
    container1 = $(".item1");

     item2 = $(".item2 a");
     container2 = $(".item2");

     item3 = $(".item3 a");
     container3 = $(".item3");

     item4 = $(".item4 a");
     container4 = $(".item4");

     item5 = $(".item5 a");
     container5 = $(".item5");

     item6 = $(".item6 a");
     container6 = $(".item6");
    
})

$(".about-button").click(function() {
    $("#mainbody").html("")
    $("#mainbody").load('about.html')
})

$(".documentation-button").click(function() {
    $("#mainbody").html("")
    $("#mainbody").load('documentation.html')
})


var quaranta= false
$("#css").load('1560.css')
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










var item1 = $(".item1 a");
var container1 = $(".item1");

var item2 = $(".item2 a");
var container2 = $(".item2");

var item3 = $(".item3 a");
var container3 = $(".item3");

var item4 = $(".item4 a");
var container4 = $(".item4");

var item5 = $(".item5 a");
var container5 = $(".item5");

var item6 = $(".item6 a");
var container6 = $(".item6");

  function foo(item, container)
  {
      var randX = Math.floor(Math.random() * (container[0].offsetWidth - 150));
      var randY = Math.floor(Math.random() * -(container[0].offsetHeight - 100));
      console.log([randX, randY]);
      item.stop().animate({"left": randX + "px", "top": randY + "px"});
  }
  
  
      
      item1.on('mouseenter', function(){ 
          if (quaranta) {
          foo(item1, container1);
          }
      })

      item2.on('mouseenter', function(){ 
        if (quaranta) {
        foo(item2, container2);
        }
    })

    item3.on('mouseenter', function(){ 
        if (quaranta) {
        foo(item3, container3);
        }
    })

    item4.on('mouseenter', function(){ 
        if (quaranta) {
        foo(item4, container4);
        }
    })

    item5.on('mouseenter', function(){ 
        if (quaranta) {
        foo(item5, container5);
        }
    })

    item6.on('mouseenter', function(){ 
        if (quaranta) {
        foo(item6, container6);
        }
    })

})