// Load jquery
newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.src = 'https://code.jquery.com/jquery-2.1.4.min.js';
document.getElementsByTagName('head')[0].appendChild(newScript);

// Load ZeroClipboard
//$.getScript("https://cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.2.0/ZeroClipboard.min.js");
newScript2 = document.createElement('script');
newScript2.type = 'text/javascript';
newScript2.src = 'https://cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.2.0/ZeroClipboard.min.js';
document.getElementsByTagName('head')[0].appendChild(newScript2);

// Insert button
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