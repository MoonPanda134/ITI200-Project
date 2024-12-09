var display = document.getElementById("dialog");

let currentLine = 0

let txt = [
    "Hello Adventurer....",
    "hey",
    "hi",
    "placeholder....1",
    "placeholder....2"
]

// function next(txtline){
//     display.innerText = txt[txtline];
//     return txtline++;
// }
function next(){
    display.innerText = txt[currentLine]
    currentLine++;
}

// display.addEventListener("click", function(){
//     currentLine = next(currentLine);
// }, false);
display.addEventListener("click", next, false)