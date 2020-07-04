/// <reference path="classes.ts" />
var query = location.search;
let lib = JSON.parse(localStorage.getItem("song-library"))
if(query.length>1){
    var plname = query.slice(query.indexOf("=")+1);
    var plist_new= new playlist(plname);
    user1.addPlaylist(plist_new);
}
let userr = JSON.parse(localStorage.getItem(current_user));
var plist = userr.playlist_array;
var container = document.getElementById("playlist-all") as HTMLInputElement;
for(let i =1; i<=plist.length;i++){
    container.innerHTML += `<div class="col-md-3 browse-grid">
    <a href = "playlist-song.html?playlist=`+plist[i-1].name+`"><img src="images/v`+i+`.jpg" title="allbum-name">
    <a class="sing" href="">`+plist[i-1].name+`</a>
</div>`
}