var list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

$(document).ready(
  function(){
      $('#Add').click(
          function(){
              var toAdd = $('input[name=list_item]').val();
               $('ol').append('<li>' + toAdd + '</li>');
          });
     
     $("input[name=ListItem]").keyup(function(event){
        if(event.keyCode == 13){
          $("#Add").click();
        }         
    });
    
    $(document).on('dblclick','li', function(){
      $(this).toggleClass('strike').fadeOut('slow');    
    });
    
    $('input').focus(function() {
      $(this).val('');
    });
});


$(document).ready(function(){
  $("#ranDom").click(function(){
    $("#listTask li").remove();   
      $.ajax({
          url:"https://jsonplaceholder.typicode.com/todos",
          datatype:"json",
          success: function(data){
              for(let x = 0; x < 10; x++){
                  let pick = Math.floor(Math.random()*data.length);
                  $("#listTask").append("<li style='color:black'> " +data[pick].title+" </li>");
  
              }
             
          }
      });
      
  });

});


