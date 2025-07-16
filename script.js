window.onload = async function() {

    //Carregar dados da internet (data.json)
    let request = await fetch("data.json");
    let audioData = await request.json();
    
    


    
    //  Variaveis de elementos
   let title = document.querySelector("#title");
    let previousButton = document.querySelector("#previous-button");
    let playButton = document.querySelector("#play-button");
    let nextButton = document.querySelector("#next-button");

    let scrubInput = document.querySelector("#scrub-input");
    let volumeInput = document.querySelector("#volume-input");
    
    let fileInput = document.querySelector("#file-input");
    console.log("fileInput");

    let audio = document.querySelector("audio");
    let currentMusic = 0;
    console.log(audioData[currentMusic]);
    

    
   
   
   
     //  Funcões
    function changeTitle(value) {
    title.innerText = value;
   }
   function updateInputBar(value, bar) {
    bar.style.transform = "scaleX(" + value / 100 + ")";
   }
    
   // Previous button
previousButton.onclick = function() {
    
    console.log("previous button clicked");
}

    // Play button
playButton.onclick = function() {

    if(audio.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
    console.log("play button clicked")
}

    // Next button
nextButton.onclick = function() {
    console.log("next button clicked")
}

scrubInput.querySelector("input").oninput = function(event) {
    let bar = scrubInput.querySelector(".range-bar");

    updateInputBar(event.target.value, bar);
}

volumeInput.querySelector("input").oninput = function(event) {
    let bar = volumeInput.querySelector(".range-bar")

    updateInputBar(event.target.value, bar);
}

fileInput.oninput = function() {
    console.log("aqui!");
}

function playAudio() {

    audio.src = audioData[currentMusic].url;
    audio.play()
}
function pauseAudio() {
    audio.pause();
}

audio.onplay = function() {
    let playIcon = document.querySelector("#icon-play");
    let pauseIcon = document.querySelector("#icon-pause");
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
    console.log("audio está a tocar");
}
audio.onpause = function() {
    let playIcon = document.querySelector("#icon-play");
    let pauseIcon = document.querySelector("#icon-pause");
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
}

   
   
   changeTitle("Sayhan")
    console.log(title);
}