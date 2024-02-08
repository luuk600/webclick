//document.getElementById("mainTitle").innerText = "hello world";

// gameWindow reference 
const gameWindow = document.getElementById("gameWindow");
// character reference
const mainCharacter = document.getElementById("mainCharacter")
const ofsetCharacter = 16;

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    console.log(e.target.id);
    mainCharacter.style.left = x - ofsetCharacter + "px";
    mainCharacter.style.top = y - ofsetCharacter + "px";
}