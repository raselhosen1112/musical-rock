
const searchBtn=()=>{
    const searchPlace=document.getElementById("searchPlace").value;
    const url= `https://api.lyrics.ovh/suggest/${searchPlace}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displaySong(data.data));
    const displaySong=songs=>{
        const songAlbum=document.getElementById('songAlbum');
        songAlbum.innerHTML='';
        songs.forEach(song => {
            const songDiv=document.createElement("div");
            songDiv.className="single-result row align-items-center my-3 p-3";
           songDiv.innerHTML=`

           <div class="col-md-9">
                        <h3 class="lyrics-name">${song.title}</h3>
                        <p class="author lead">Album by <span>${song.artist.name}</span></p>
                        <audio controls>
                       <source src="${song.preview}" type="audio/ogg">
                       
  
                             </audio>
                             
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button onclick="getLyrics('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
                    </div>
           `
          
            songAlbum.appendChild(songDiv);
        });
    }
}
const getLyrics= (artist, title)=>{
    const url=`https://api.lyrics.ovh/v1/${artist}/${title}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayLyris(data.lyrics))
}
const displayLyris=lyrics=>{
   const displaySongLyrics=document.getElementById("displayLyrics");
   displaySongLyrics.innerText=lyrics;
}