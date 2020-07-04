var current_user = "user1";
class track{
    id: number;
    genre: string;
    name: string;
    no_rated: number;
    total_rating: number;
    singer: string;
    url: string;
    constructor(id:number, n: string, s: string, g: string, u: string) {
        this.id = id;
        this.name = n;
        this.singer = s;
        this.genre = g;
        this.url = u;
    }
    addRating(rating: number){
        this.total_rating+=rating;
        this.no_rated+=1;
    }
}

class playlist{
    name: string;
    tracks: track[] =[];
    total_rating: number;
    no_rated: number;
    constructor(n: string,){
        this.name = n;
    }
    addSong(s: track){
        this.tracks.push(s);
    }
    addRating(rating: number ){
        this.total_rating+=rating;
        this.no_rated+=1;
    }

}

class user{
    name: string;
    playlist_array: playlist[] = [];

    // addSongToP(s: track){
    //     this..push(s);
    //     updateStorage(this);
    // }
    addPlaylist(pll: playlist){
        this.playlist_array.push(pll);
        updateStorage(this);
    }
    constructor(u: string) {
        this.name = u;   
    }
}
let songs_library: track[] = [];
let t4 = new track(4,'Stuck on A Feeling','Adele','Jazz','media/Stuck on a Feeling.mp3');
let t2 = new track(2,'Bailando English','Enrique','Bollywood','media/Bailando English.mp3');
let t3 = new track(3,'The Gift','Jim Brickman','Pop','media/The Gift.mp3');
let t1 = new track(1,'Ankahee','Shreya Ghoshal','Bollywood','media/Ankahee.mp3');
let t5 = new track(5,'Selah','Kanye West','Bollywood','media/Selah.mp3');
let t6 = new track(6,'Love me Like you Do','Ellie Goulding','Pop','media/Love Me Like You Do.mp3');
let t7 = new track(7,'Perfect','Shreya Ghoshal','Bollywood','media/Ankahee.mp3');
let t8 = new track(8,'Thunder','Shreya Ghoshal','Bollywood','media/Ankahee.mp3');
let t9 = new track(9,'Play Date','Shreya Ghoshal','Bollywood','media/Ankahee.mp3');
let t10 = new track(10,'Blinding Lights','Shreya Ghoshal','Bollywood','media/Ankahee.mp3');

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


let user1 = new user("user1");
let user2 = new user("user2");
let user3 = new user("user3");

let pl1 = new playlist('Bollywood');
let pl2 = new playlist('Pop'); 
let pl3 = new playlist('Rock');
let pl4 = new playlist('Jazz');
let pl5 = new playlist('Party');
let pl6 = new playlist('Slow');
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

localStorage.setItem("song-library",JSON.stringify(songs_library));
localStorage.setItem("user1",JSON.stringify(user1));
localStorage.setItem("user2",JSON.stringify(user2));
localStorage.setItem("user3",JSON.stringify(user3));

function updateStorage(u: user){
    localStorage.setItem("user1",JSON.stringify(u));
}

function changeUser(u: user){
    current_user = u.name;
}
function findSong(id: number){
    for(var i =0; i< songs_library.length;i++){
        if(songs_library[i].id==id){
            return songs_library[i];
        }
    }
}
function playSong(id: number){
    var t = findSong(id);
    var myAudio = <HTMLAudioElement>document.getElementById("audio-player");
    var myAudioSource = <HTMLSourceElement>document.getElementById("audio-source")
    myAudio.src = t.url;
    myAudio.play();
}
function findPlaylist(u: user,name: string){
    var pl_list =u.playlist_array;
    for(var i =0; i<pl_list.length ;i++){
        if(pl_list[i].name==name){
            return pl_list[i].tracks;
        }
    }
}

