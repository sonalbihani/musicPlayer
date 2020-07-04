/// <reference path="classes.ts" />
//let current_user = "user1";
let libb = JSON.parse(localStorage.getItem("song-library"));
let u = JSON.parse(localStorage.getItem(current_user));
var container = document.getElementById("inner-content") as HTMLInputElement;
container.innerHTML+=`<div class="browse" id="browse-one">
<div class="tittle-head two">
    <h3 class="tittle">Songs</h3>
    <a href="song.html">
        <h4 class="tittle third">See all</h4>
    </a>
    <div class="clearfix"> </div>
</div>
<div id="song-browse">`
for(let i =1; i<=6;i++){
    container.innerHTML += `<div class="col-md-3 browse-grid">
    <img onclick="playSong(`+libb[i-1].id+`)" src="images/v`+i+`.jpg" title="allbum-name">
     <a href=""><i class="glyphicon glyphicon-play-circle"></i></a>
    <a class="sing" href="single.html">`+libb[i-1].name+`</a>
</div>`
}
container.innerHTML+=`</div>
<div class="clearfix"> </div>
</div>
<div class="browse" id="browse-two">
<div class="tittle-head two">
    <h3 class="tittle">Playlists</h3>
    <a href="playlist.html">
        <h4 class="tittle third">See all</h4>
    </a>
    <div class="clearfix"> </div>
</div>
<div id="playlist-browse">`
for(let j =1; j<=6;j++){
    container.innerHTML += `<div class="col-md-3 browse-grid">
    <a  href="playlist-song.html?playlist=`+u.playlist_array[j-1].name+`"><img src="images/v`+(j+6)+`.jpg" title="allbum-name"></a>
    <a class="sing" href="single.html">`+u.playlist_array[j-1].name+`</a>
</div>`
}

container.innerHTML+=`</div>
<div class="clearfix"> </div>
</div>`










