const ele1 = document.getElementById("div1");
const ele2 = document.getElementById("div2");
const ele3 = document.getElementById("div3");
const ele4 = document.getElementById("div4");
const eleKey = document.getElementById("key");

ele1.style.backgroundColor = "blue";
ele2.style.backgroundColor = "red";
ele3.style.backgroundColor = "green";
ele4.style.backgroundColor = "yellow";

const colorBlack = function(event){
    event.target.style.backgroundColor = "black";
    event.target.style.color = "white";
}

ele1.addEventListener("click", colorBlack);
ele2.addEventListener("click", colorBlack);
ele3.addEventListener("click", colorBlack);
ele4.addEventListener("click", colorBlack);

document.addEventListener('keydown', (event) => {
    if (event.key === "a" || event.key === "A") {
    eleKey.style.backgroundColor = "pink"
    }else if (event.key === 's' || event.key === "S") {
        eleKey.style.backgroundColor = "orange"
    }else if (event.key === 'd' || event.key === "D"){
        eleKey.style.backgroundColor = "cyan"
    }else if (event.key === 'q' || event.key === "Q"){
        createNewDiv("purple")
    }else if (event.key === 'w' || event.key === "W"){
        createNewDiv("gray")
    }else if (event.key === 'e' || event.key === "E"){
        createNewDiv("brown")
    }
})

function createNewDiv(color) {
    const newDiv = document.createElement("div");
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);
}



