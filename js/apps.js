$( document ).ready(function() {
    console.log( "ready!" );

    $.getJSON( "json/test.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<div id='" + key + "' class='col-xs-6 col-sm-4 col-md-2'>" + val + "</div>" );
      console.log(items);
    });
    $( "<div/>", {
      "class": "container",
      html: items.join( "" )
    }).appendTo( ".content" );
  });
});
