/// <reference path="classes.ts" />
var query = location.search;
var plname = query.slice(query.indexOf("=")+1);
let cu = "user1";
let userr = JSON.parse(localStorage.getItem(current_user));
let lib = JSON.parse(localStorage.getItem("song-library"))
var container = document.getElementById("songs-all") as HTMLInputElement;
var pl_songs = findPlaylist(userr,plname);
for(let i =1; i<=pl_songs.length;i++){
    container.innerHTML += `<div onclick="playSong(`+pl_songs[i-1].id+`)" class="col-md-3 browse-grid">
    <img src="images/v`+i+`.jpg" title="allbum-name">
    <i class="glyphicon glyphicon-play-circle"></i>
    <a class="sing" href="">`+pl_songs[i-1].name+`</a>
</div>`
}
