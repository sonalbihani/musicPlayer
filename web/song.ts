/// <reference path="classes.ts" />
let userr = JSON.parse(localStorage.getItem(current_user));
let lib = JSON.parse(localStorage.getItem("song-library"))
var container = document.getElementById("songs-all") as HTMLInputElement;
for(let i =1; i<=lib.length;i++){
    container.innerHTML += `<div onclick="playSong(`+lib[i-1].id+`)" class="col-md-3 browse-grid">
    <img onclick="playSong(`+lib[i-1].id+`)" src="images/v`+i+`.jpg" title="allbum-name">
    <i class="glyphicon glyphicon-play-circle"></i>
    <a class="sing" href="">`+lib[i-1].name+`</a>
</div>`
}
