// Insert button
function insert_button()
{
	$("#watch-header").before("<button id='clipboard-button' class='yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-active'>Copy Timestamp To Clipboard</button>");

	// Add functionality to button
	var new_clipboard_button = new ZeroClipboard( document.getElementById("clipboard-button") );

	new_clipboard_button.on( "ready", function( readyEvent ) {
	  // alert( "ZeroClipboard SWF is ready!" );

	  new_clipboard_button.on( "aftercopy", function( event ) {
	    // `this` === `client`
	    // `event.target` === the element that was clicked
	    event.target.style.display = "none";
	    alert("Copied text to clipboard: " + event.data["text/plain"] );
	  } );
	} );
};


// Load jquery with callback
(function () {
    function loadScript(url, callback) {

        var script = document.createElement("script")
        script.type = "text/javascript";

        if (script.readyState) { //IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //Others
            script.onload = function () {
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function () {
         //jQuery loaded
         console.log('jquery loaded');

         //Load Zero query, callback to insert_button afterward.
         loadScript("https://code.jquery.com/jquery-2.1.4.min.js", insert_button());
    });
})();