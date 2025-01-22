//Get Elements

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const bar = player.querySelector(".bar");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const range = player.querySelectorAll(".slider");


//Call Functions

function play() {
    const method = video.paused ? "play" : "pause";
    video[method]();            
}

function updateBtn(){
    const change = this.paused ? "►" : "❚ ❚"; 
    toggle.textContent = change;
}

function skip(){
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip)
}





//Adding Event Listeners


video.addEventListener("click", play);
toggle.addEventListener("click", play);

video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);

skipButtons.forEach(btn => btn.addEventListener("click", skip))