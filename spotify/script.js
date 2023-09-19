console.log("welcome to spotify");
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar'); 

let songs =[
    {songName: "Salam-Ishq", filePath: "song/1.mp3", coverPath = "cover/1.jpg"},
    {songName: "Salam-Ishq", filePath: "song/1.mp3", coverPath = "cover/1.jpg"},
    {songName: "Salam-Ishq", filePath: "song/1.mp3", coverPath = "cover/1.jpg"},
    {songName: "Salam-Ishq", filePath: "song/1.mp3", coverPath = "cover/1.jpg"},
    {songName: "Salam-Ishq", filePath: "song/1.mp3", coverPath = "cover/1.jpg"},
    
]

audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
})

//Listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar


})