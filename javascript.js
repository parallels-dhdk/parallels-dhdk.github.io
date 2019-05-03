 
$(document).ready(function () 
    { 
    $("#css").load('1560.css')


    //about button in nav
    $(".about-button").click(function() {
        $("#mainbody").html("") //returns the content (innerHTML) of the mainbody and empty it.
        $("#mainbody").load('about.html') //loads data from a document and puts the returned data into mainbody.
    })

    //documentation button in nav
    $(".documentation-button").click(function() {
        $("#mainbody").html("")
        $("#mainbody").load('documentation.html')
    })

    //index button in navbar
    $(".index-button").click(function() {
        $("#mainbody").html("")
        $("#mainbody").load('index-text.html') 
    })

    //year buttons in timeline 
    $("#1560").click(function() {
        $("#css").html("")
        $("#css").load('1560.css')
    })
      
    $("#1860").click(function() {
        $("#css").html("")
        $("#css").load('1860.css')
    })

    $("#1927").click(function() {
        $("#css").html("")
        $("#css").load('1927.css')
    })     

    $("#1968").click(function() {
        $("#css").html("")
        $("#css").load('1968.css')
    })  
        
    $("#1980").click(function() {
        $("#css").html("")
        $("#css").load('1980.css')
    })
        
    $("#2040").click(function() {
        $("#css").html("")
        $("#css").load('2040.css')
    })    
    
})



    
  