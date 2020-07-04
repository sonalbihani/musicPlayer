var container = document.getElementById("navig");
container.innerHTML += "<!--logo and iconic logo start-->\n<div class=\"logo\">\n    <h1><a href=\"index.html\">Mosaic</a></h1>\n</div>\n<div class=\"logo-icon text-center\">\n    <a href=\"index.html\">M </a>\n</div>\n<!-- /w3l-agile -->\n<!--logo and iconic logo end-->\n<div class=\"left-side-inner\">\n\n    <!--sidebar nav start-->\n    <ul class=\"nav nav-pills nav-stacked custom-nav\">\n        <li class=\"active\"><a href=\"index.html\"><i class=\"lnr lnr-home\"></i><span>Home</span></a></li>\n        <li><a href=\"song.html\"><i class=\"lnr lnr-music-note\"></i> <span>Songs</span></a></li>\n        <li><a href=\"playlist.html\"><i class=\"lnr lnr-users\"></i> <span>Playlists</span></a></li>\n    </ul>\n    <!--sidebar nav end-->\n</div>\n";
var current_user = "user1";
var userr = JSON.parse(localStorage.getItem(current_user));
container = document.getElementById("page-wrapper");
container.innerHTML += "<div class=\"inner-content text-center\" >\n<form name =\"form1\" action=\"playlist.html\" onsubmit=\"formSubmit(this\">\n   <h2>Enter name of new Playlist: </h2> \n    <input type=\"text\" name=\"plname\" id=\"plname\">\n    <input type=\"submit\" value=\"Submit\"> \n</form>\n\n<!--body wrapper start-->\n</div>";
function functionSubmit(that) {
    alert(that);
}
