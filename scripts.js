//Get Elements

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const bar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const range = player.querySelectorAll(".player__slider");
const fullscreen = player.querySelector(".full");
let move = false;

//Call Functions

function play() {
    const method = video.paused ? "play" : "pause";
    video[method]();            
}

function updateBtn() {
    const change = this.paused ? "►" : "❚❚"; 
    toggle.textContent = change;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip)
}

function slide() {
    video[this.name] = this.value
}


function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    bar.style.flexBasis = percent + "%" 
}

function scrub(e){
    const time = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = time
}

function keys(e){
    if(e.keyCode == 32) {
        play() 
    }
    else if(e.keyCode == 39){
        video.currentTime += 10
    }
    else if(e.keyCode == 37){
        video.currentTime -= 10
    }
}

function full() {
    video.requestFullscreen()
}

//Adding Event Listeners


video.addEventListener("click", play);
video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);
video.addEventListener("timeupdate", handleProgress);


toggle.addEventListener("click", play);

skipButtons.forEach(btn => btn.addEventListener("click", skip));
fullscreen.addEventListener("click", full)

range.forEach(inp => inp.addEventListener("mousemove", slide));

progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => move && scrub(e));
progress.addEventListener("mousedown", () => {move = true});
progress.addEventListener("mouseup", () => {move = false});

window.addEventListener("keydown", keys)