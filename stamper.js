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

    loadScript("https://code.jquery.com/jquery-2.1.4.min.js", function () {
      //jQuery loaded
      console.log('jquery loaded');

      //Load ZeroClipboard, callback to insert_button afterward.
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.2.0/ZeroClipboard.min.js", function(){
        console.log('ZeroClipboard loaded');
        ZeroClipboard.config({ swfPath: "https://cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.2.0/ZeroClipboard.swf" });
        $("#watch7-headline").before("<button id='clipboard-button' class='yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-active'>Copy Timestamp To Clipboard</button>");

        // Add functionality to button
        var new_clipboard_button = new ZeroClipboard( document.getElementById("clipboard-button") );

        new_clipboard_button.on( "ready", function( readyEvent ) {
          // alert( "ZeroClipboard SWF is ready!" );

          new_clipboard_button.on( "copy", function (event) {
            timestamp_data = $(".ytp-time-current").text();
            ZeroClipboard.setData("text/plain", timestamp_data);
          });
        });
      });
    });
})();