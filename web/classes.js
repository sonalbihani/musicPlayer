var current_user = "user1";
var track = /** @class */ (function () {
    function track(id, n, s, g, u) {
        this.id = id;
        this.name = n;
        this.singer = s;
        this.genre = g;
        this.url = u;
    }
    track.prototype.addRating = function (rating) {
        this.total_rating += rating;
        this.no_rated += 1;
    };
    return track;
}());
var playlist = /** @class */ (function () {
    function playlist(n) {
        this.tracks = [];
        this.name = n;
    }
    playlist.prototype.addSong = function (s) {
        this.tracks.push(s);
    };
    playlist.prototype.addRating = function (rating) {
        this.total_rating += rating;
        this.no_rated += 1;
    };
    return playlist;
}());
var user = /** @class */ (function () {
    function user(u) {
        this.playlist_array = [];
        this.name = u;
    }
    // addSongToP(s: track){
    //     this..push(s);
    //     updateStorage(this);
    // }
    user.prototype.addPlaylist = function (pll) {
        this.playlist_array.push(pll);
        updateStorage(this);
    };
    return user;
}());
var songs_library = [];
var t4 = new track(4, 'Stuck on A Feeling', 'Adele', 'Jazz', 'media/Stuck on a Feeling.mp3');
var t2 = new track(2, 'Bailando English', 'Enrique', 'Bollywood', 'media/Bailando English.mp3');
var t3 = new track(3, 'The Gift', 'Jim Brickman', 'Pop', 'media/The Gift.mp3');
var t1 = new track(1, 'Ankahee', 'Shreya Ghoshal', 'Bollywood', 'media/Ankahee.mp3');
var t5 = new track(5, 'Selah', 'Kanye West', 'Bollywood', 'media/Selah.mp3');
var t6 = new track(6, 'Love me Like you Do', 'Ellie Goulding', 'Pop', 'media/Love Me Like You Do.mp3');
var t7 = new track(7, 'Perfect', 'Shreya Ghoshal', 'Bollywood', 'media/Ankahee.mp3');
var t8 = new track(8, 'Thunder', 'Shreya Ghoshal', 'Bollywood', 'media/Ankahee.mp3');
var t9 = new track(9, 'Play Date', 'Shreya Ghoshal', 'Bollywood', 'media/Ankahee.mp3');
var t10 = new track(10, 'Blinding Lights', 'Shreya Ghoshal', 'Bollywood', 'media/Ankahee.mp3');
t1.total_rating = 56;
t1.no_rated = 16;
t2.total_rating = 10;
t2.no_rated = 2;
t3.total_rating = 24;
t3.no_rated = 8;
t4.total_rating = 24;
t4.no_rated = 5;
t5.total_rating = 5;
t5.no_rated = 1;
t6.total_rating = 4;
t6.no_rated = 1;
t7.total_rating = 20;
t7.no_rated = 5;
songs_library.push(t1);
songs_library.push(t2);
songs_library.push(t3);
songs_library.push(t4);
songs_library.push(t5);
songs_library.push(t6);
songs_library.push(t7);
songs_library.push(t8);
songs_library.push(t9);
songs_library.push(t10);
var user1 = new user("user1");
var user2 = new user("user2");
var user3 = new user("user3");
var pl1 = new playlist('Bollywood');
var pl2 = new playlist('Pop');
var pl3 = new playlist('Rock');
var pl4 = new playlist('Jazz');
var pl5 = new playlist('Party');
var pl6 = new playlist('Slow');
pl1.addSong(t1);
pl1.addSong(t2);
pl2.addSong(t3);
pl2.addSong(t4);
pl3.addSong(t5);
pl3.addSong(t6);
pl4.addSong(t7);
pl4.addSong(t8);
pl1.addSong(t9);
pl1.addSong(t10);
user1.addPlaylist(pl1);
user1.addPlaylist(pl2);
user1.addPlaylist(pl3);
user1.addPlaylist(pl4);
user1.addPlaylist(pl5);
user1.addPlaylist(pl6);
user2.addPlaylist(pl3);
user2.addPlaylist(pl4);
user2.addPlaylist(pl6);
user3.addPlaylist(pl1);
user3.addPlaylist(pl2);
localStorage.setItem("song-library", JSON.stringify(songs_library));
localStorage.setItem("user1", JSON.stringify(user1));
localStorage.setItem("user2", JSON.stringify(user2));
localStorage.setItem("user3", JSON.stringify(user3));
function updateStorage(u) {
    localStorage.setItem("user1", JSON.stringify(u));
}
function changeUser(u) {
    current_user = u.name;
}
function findSong(id) {
    for (var i = 0; i < songs_library.length; i++) {
        if (songs_library[i].id == id) {
            return songs_library[i];
        }
    }
}
function playSong(id) {
    var t = findSong(id);
    var myAudio = document.getElementById("audio-player");
    var myAudioSource = document.getElementById("audio-source");
    myAudio.src = t.url;
    myAudio.play();
}
function findPlaylist(u, name) {
    var pl_list = u.playlist_array;
    for (var i = 0; i < pl_list.length; i++) {
        if (pl_list[i].name == name) {
            return pl_list[i].tracks;
        }
    }
}
function playSongbyURL(s) {
    var myAudio = document.getElementById("audio-player");
    var myAudioSource = document.getElementById("audio-source");
    myAudio.src = s;
    myAudio.play();
}
