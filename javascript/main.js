//document.getElementById("mainTitle").innerText = "hello world";

// gameWindow reference 
const gameWindow = document.getElementById("gameWindow");
// game state
gameState = {
    door2locked: true
}



const sec = 1000;
//Main Character
const mainCharacter = document.getElementById("mainCharacter");
const offsetCharacter = 16;

//statue
const counterAvatar = document.getElementById("counterAvatar")

//speech bubbels
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech")
const counterSpeech = document.getElementById("counterSpeech")

const mcAudio = document.getElementById("mcAudio");
const cAudio = document.getElementById("cAudio");
//Inventory
const inventoryBox = document.getElementById("inventoryBox"); //div
const inventoryList = document.getElementById("inventoryList"); //ul

//Foreground Items
const door1 = document.getElementById("door1");
const sign = document.getElementById("sign");


gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    if (e.target.id !== "mcImage", "mainCharacter") {
        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";
    }


    console.log(e.target.id);
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";

    switch (e.target.id) {
        case "door1":


            if (document.getElementById("key1") !== null) {
                console.log('Key picked up');
                document.getElementById("key1").remove();
                mainCharacter.style.backgroundColor = "#FFF00";
                const keyElement = document.createElement("li");
                keyElement.innerText = "Key"
                inventoryList.appendChild(keyElement);
                keyElement.id = "inv-key";
            }
            break;
        case "door2":
            if (gameState.door2locked == true) {
                if (document.getElementById("inv-key") !== null) {

                    gameState.door2locked = false;
                    document.getElementById("inv-key").remove();
                } else {
                    alert("door is locked")
                }
            } else {
                console.log("enter the building");
            }

            break;
        case "statue1":
            showMessage(mainCharacterSpeech, mcAudio, "wow cool statue..");
            setTimeout(function () { counterAvatar.style.opacity = 1; }, 4 * sec);
            setTimeout(showMessage, 4 * sec, counterSpeech, cAudio, "im so sexy");
            setTimeout(showMessage, 8 * sec, mainCharacterSpeech, mcAudio, "you motherfucker");
            setTimeout(function () { counterAvatar.style.opacity = 0; }, 12 * sec);
            break;




        default:
            //explode

            break;
    }
}
/**
 * shows message in a speech bubble
 * @param {getElementById} targetBalloon
 * @param {getElementById} targetSound
 * @param {string} message 
 */
function showMessage(targetBalloon, targetSound, message) {
    targetSound.currentTime = 0;
    targetSound.play();
    targetBalloon.style.opacity = "1";
    targetBalloon.innerText = message;
    setTimeout(hideMessage, 4 * sec, targetBalloon);
}

//setTimeout(showMessage, 0 * sec, mainCharacterSpeech, "yo whats up buddy?");
//setTimeout(showMessage, 4 * sec, counterSpeech, "nothing!!!");
//setTimeout(showMessage, 8 * sec, mainCharacterSpeech, "what do you mean by nothing?");
//setTimeout(showMessage, 12 * sec, counterSpeech, "...")

/**
 * set opacity to 0
 * @param {getElementById} targetBalloon 
 * @param {getElementById} targetSound
 */
function hideMessage(targetBalloon, targetSound) {
    targetBalloon.style.opacity = "0";
    targetSound.Pause();
}