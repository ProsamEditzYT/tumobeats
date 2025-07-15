window.onload = function() {
    
    //  Variaveis de elementos
   let title = document.querySelector("#title");
    let previousButton = document.querySelector("#previous-button");
    let playButton = document.querySelector("#play-button");
    let nextButton = document.querySelector("#next-button");
   
   


    //  Funcões
    function changeTitle(value) {
    title.innerText = value;
   }
   // Previous button
previousButton.onclick = function() {
    console.log("previous button clicked")
}

    // Play button
playButton.onclick = function() {
    console.log("play button clicked")
}

    // Next button
nextButton.onclick = function() {
    console.log("next button clicked")
}
   
   
   changeTitle("Sayhan")
    console.log(title);
}