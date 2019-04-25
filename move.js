<script>
  

  var caller = $(".item1 a");
  var container = $(".item1");
  
  function foo()
  {
      var randX = Math.floor(Math.random() * (container[0].offsetWidth - 150));
      var randY = Math.floor(Math.random() * -(container[0].offsetHeight - 100));
      console.log([randX, randY]);
      caller.stop().animate({"left": randX + "px", "top": randY + "px"});
  }
  
  $(document).ready(function() {
      
      caller.on('mouseenter', foo);
      caller.on('click', function(){
          alert('clicked!');
      });
      
  })

  </script>
