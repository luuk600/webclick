//document.getElementById("mainTitle").innerText = "hello world";

// gameWindow reference 
const gameWindow = document.getElementById("gameWindow");
// game state
gameState = {
    //door2locked  false
}
//inventory
const inventorybox = document.getElementById('inventoryBox');
const inventorylist = document.getElementById('inventoryList');
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
            if (document.getElementById("key1") !== null) {
                console.log('Key picked up');
                document.getElementById("key1").remove();
                mainCharacter.style.backgroundColor = "#FFF00";
                const keyElement = document.createElement("li");
                keyElement.innerText = "Key"
                inventorylist.appendChild(keyElement);
                keyElement.id = "inv-key";
            }
            break;
        case "door2":
            if (gameState.door2locked == true) {
                if (document.getElementById("inv-key") !== null) {

                    gameState.door2locked = false;
                } else {
                    alert("door is locked")
                }
            } else {
                console.log("enter the building");
            }

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