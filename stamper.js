// Load jquery
newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.src = 'https://code.jquery.com/jquery-2.1.4.min.js';
document.getElementsByTagName('head')[0].appendChild(newScript);

// Load ZeroClipboard
$.getScript("https://cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.2.0/ZeroClipboard.min.js")

// Insert button
$("<button>TEST</button>").insertBefore("#watch-header");