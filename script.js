console.log("Welcome To Protify")



//initialize the variable
let songindex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname')
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songname:"Jai Shree Ram", filepath:"songs/1.mp3",coverpath:"covers/1.jfif"},
    {songname:"issa vibe", filepath:"songs/2.mp3",coverpath:"covers/2.jfif"},
    {songname:"Gumrah title track", filepath:"songs/3.mp3",coverpath:"covers/4.jpg"},
    {songname:"Sahi Galat", filepath:"songs/4.mp3",coverpath:"covers/3.jpg"},
    {songname:"Bande", filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songname:"jugjugg jeyoo", filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
    {songname:"Gasolina", filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},  
    {songname:"Let me Down Slowly", filepath:"songs/8.mp3",coverpath:"covers/8.jpg"},  
]

songItems.forEach((element,i)=>{
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].filepath;
    element.getElementsByClassName('sonname')[0].innerText=songs[i].songname;
})


//audioElement().play;

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})



//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=(myprogressbar.value*audioElement.duration/100);
})

const makeallplays=()=>{
    
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
    
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        //console.log(e.target);
        makeallplays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songindex+1}.mp3`;
        mastersongname.innerText=songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})


//for next//

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=6){
        songindex=0;
    }
    else{
    songindex=songindex+1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})


// for previous //

document.getElementById('previos').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
    songindex=songindex-1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
        mastersongname.innerText=songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})