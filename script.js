$( document ).ready(function() {    
    $( "#change_screen a" ).hover(
      function() {
        var image_class = $( this ).attr("class");
        $("#phone img").removeClass( "visible" );
        $("#" + image_class).addClass( "visible" );
      }, function() {
        $("#phone img").removeClass( "visible" );
        $("#main_image").addClass( "visible" );
      }
    );
    
});