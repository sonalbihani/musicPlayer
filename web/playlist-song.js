/// <reference path="classes.ts" />
var query = location.search;
var plname = query.slice(query.indexOf("=") + 1);
var cu = "user1";
var userr = JSON.parse(localStorage.getItem(current_user));
var lib = JSON.parse(localStorage.getItem("song-library"));
var container = document.getElementById("songs-all");
var pl_songs = findPlaylist(userr, plname);
for (var i = 1; i <= pl_songs.length; i++) {
    container.innerHTML += "<div onclick=\"playSong(" + pl_songs[i - 1].id + ")\" class=\"col-md-3 browse-grid\">\n    <img src=\"images/v" + i + ".jpg\" title=\"allbum-name\">\n    <i class=\"glyphicon glyphicon-play-circle\"></i>\n    <a class=\"sing\" href=\"\">" + pl_songs[i - 1].name + "</a>\n</div>";
}
