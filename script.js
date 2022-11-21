window.addEventListener("DOMContentLoaded", main);
function main() {
    Startgame();
}

function Startgame() {
    const text = document.getElementById("text");
    const music = document.getElementById("op1");
    const poet = document.getElementById("op2");
    const theatre = document.getElementById("op3");
    
    music.addEventListener('click',PreformAndSing);
    poet.addEventListener('click',reciteApoem);
    theatre.addEventListener('click',writeAPlay);

}

    /*input.textContent = "Start the game";*/
    
    /*button.addEventListener('click',startFirstScene);
    */
function PreformAndSing() {
const text = document.getElementById("text");
const music = document.getElementById("op1"); 
text.textContent = "Good choice! Now pick an instrument of your choice";
music.addEventListener('click',playViolin);
poet.addEventListener('click',playPiano);
theatre.addEventListener('click',playHarp);
}

function playViolin() {
    const text = document.getElementById("text");
    const violin = document.getElementById("op1");
    const piano = document.getElementById("op2");
    const harp = document.getElementById("op3");
    text.textContent="Pick an instru"

    violin.textContent = "Violin"
    piano.textContent ="Piano"
    harp.textContent = "Harp"
}

function playPiano() {

}

function playHarp() {

}

function reciteApoem() {
    const text = document.getElementById("text");
    const poet = document.getElementById("op2");
    text.textContent = "Wonderful pick"

}

function writeAPlay() {
    const text = document.getElementById("text");
    const theatre = document.getElementById("op3");

    text.textContent = "Very interesting"
}