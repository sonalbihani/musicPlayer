
var container = document.getElementById("navig") as HTMLInputElement;
container.innerHTML+=`<!--logo and iconic logo start-->
<div class="logo">
    <h1><a href="index.html">Mosaic</a></h1>
</div>
<div class="logo-icon text-center">
    <a href="index.html">M </a>
</div>
<!-- /w3l-agile -->
<!--logo and iconic logo end-->
<div class="left-side-inner">

    <!--sidebar nav start-->
    <ul class="nav nav-pills nav-stacked custom-nav">
        <li class="active"><a href="index.html"><i class="lnr lnr-home"></i><span>Home</span></a></li>
        <li><a href="song.html"><i class="lnr lnr-music-note"></i> <span>Songs</span></a></li>
        <li><a href="playlist.html"><i class="lnr lnr-users"></i> <span>Playlists</span></a></li>
    </ul>
    <!--sidebar nav end-->
</div>
`;
var current_user="user1";
let userr = JSON.parse(localStorage.getItem(current_user));
container = document.getElementById("page-wrapper") as HTMLInputElement;
container.innerHTML+= `<div class="inner-content text-center" >
<form  action="song.html">
   <h2>Enter url of song : </h2> 
    <input type="text" name="song_url" id="song_url">
    <input type="submit" value="Submit"> 
</form>

<!--body wrapper start-->
</div>`;

function functionSubmit(that){
 alert(that);
}


