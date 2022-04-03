//makes more sense 
let isSimple = false;
let isHex = false;

function changeToSimple() {
    isHex = false;
    isSimple = true;
}

function changeToHex() {
    isSimple = false;
    isHex = true;
}



function changeColorHex() {
    let newBackgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    document.getElementById("background").style.backgroundColor = newBackgroundColor;
};

let colorOptions = ["red", "blue", "white", "yellow"]
function changeColorSimple() {
    let newBackgroundColorIndex = Math.floor(Math.random()* colorOptions.length);
    document.getElementById("background").style.backgroundColor = colorOptions[newBackgroundColorIndex];
}

function runProgram() {
    if (isSimple) {
        changeColorSimple()
        console.log(isHex,isSimple)
        
    } else if (isHex) {
        changeColorHex ()

    }
}
