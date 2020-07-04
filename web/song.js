/// <reference path="classes.ts" />
var userr = JSON.parse(localStorage.getItem(current_user));
var lib = JSON.parse(localStorage.getItem("song-library"));
var container = document.getElementById("songs-all");
for (var i = 1; i <= lib.length; i++) {
    container.innerHTML += "<div onclick=\"playSong(" + lib[i - 1].id + ")\" class=\"col-md-3 browse-grid\">\n    <img onclick=\"playSong(" + lib[i - 1].id + ")\" src=\"images/v" + i + ".jpg\" title=\"allbum-name\">\n    <i class=\"glyphicon glyphicon-play-circle\"></i>\n    <a class=\"sing\" href=\"\">" + lib[i - 1].name + "</a>\n</div>";
}
