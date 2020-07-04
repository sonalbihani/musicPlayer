/// <reference path="classes.ts" />
//let current_user = "user1";
var libb = JSON.parse(localStorage.getItem("song-library"));
var u = JSON.parse(localStorage.getItem(current_user));
var container = document.getElementById("inner-content");
container.innerHTML += "<div class=\"browse\" id=\"browse-one\">\n<div class=\"tittle-head two\">\n    <h3 class=\"tittle\">Songs</h3>\n    <a href=\"song.html\">\n        <h4 class=\"tittle third\">See all</h4>\n    </a>\n    <div class=\"clearfix\"> </div>\n</div>\n<div id=\"song-browse\">";
for (var i = 1; i <= 6; i++) {
    container.innerHTML += "<div class=\"col-md-3 browse-grid\">\n    <img onclick=\"playSong(" + libb[i - 1].id + ")\" src=\"images/v" + i + ".jpg\" title=\"allbum-name\">\n     <a href=\"\"><i class=\"glyphicon glyphicon-play-circle\"></i></a>\n    <a class=\"sing\" href=\"single.html\">" + libb[i - 1].name + "</a>\n</div>";
}
container.innerHTML += "</div>\n<div class=\"clearfix\"> </div>\n</div>\n<div class=\"browse\" id=\"browse-two\">\n<div class=\"tittle-head two\">\n    <h3 class=\"tittle\">Playlists</h3>\n    <a href=\"playlist.html\">\n        <h4 class=\"tittle third\">See all</h4>\n    </a>\n    <div class=\"clearfix\"> </div>\n</div>\n<div id=\"playlist-browse\">";
for (var j = 1; j <= 6; j++) {
    container.innerHTML += "<div class=\"col-md-3 browse-grid\">\n    <a  href=\"playlist-song.html?playlist=" + u.playlist_array[j - 1].name + "\"><img src=\"images/v" + (j + 6) + ".jpg\" title=\"allbum-name\"></a>\n    <a class=\"sing\" href=\"single.html\">" + u.playlist_array[j - 1].name + "</a>\n</div>";
}
container.innerHTML += "</div>\n<div class=\"clearfix\"> </div>\n</div>";
