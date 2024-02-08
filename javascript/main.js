//document.getElementById("mainTitle").innerText = "hello world";

// gameWindow reference 
const gameWindow = document.getElementById("gameWindow");
// character reference
const mainCharacter = document.getElementById("mainCharacter")
const ofsetCharacter = 16;
const sign = document.getElementById("sign");
gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    console.log(e.target.id);
    mainCharacter.style.left = x - ofsetCharacter + "px";
    mainCharacter.style.top = y - ofsetCharacter + "px";

    switch (e.target.id) {
        case "door1":
            mainCharacter.style.backgroundColor = "#FFF00";
            door1.style.opacity = 0.5;
            sign.style.opacity = 0.8;
            break;

        case "sign":
            sign.style.opacity = 0.5;
            door1.style.opacity = 0.8;
            break;
        default:
            //explode
            mainCharacter.style.backgroundColor = "#ff9100";
            door1.style.opacity = 0.8;
            sign.style.opacity = 0.8;
            break;
    }

}