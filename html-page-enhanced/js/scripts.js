$( document ).ready(function() {
 
    // This is how to do the same using jQuery.
    $( "#click-me" ).click(function( event ) {

        console.log('Button with id="click-me" was clicked');

        // The hash symbol selects an id, a period is a class selector
        // https://api.jquery.com/id-selector/
        // https://api.jquery.com/class-selector/
        // you should never use more than one unique id in a document.
        // you can spread javascript functions over multiple lines for easier reading.

        $('#demo').css({
            'color' : 'red',
            'font-size' : '44px' 
        });

        

    });
 
});
