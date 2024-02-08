//document.getElementById("mainTitle").innerText = "hello world";

// gameWindow reference 
const gameWindow = document.getElementById("gameWindow");
// character reference
const mainCharacter = document.getElementById("mainCharacter")


gameWindow.onclick = function (e) {
    console.log(e.target.id);
}