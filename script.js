const content = document.querySelector(".content");


const defaultAmount = 16;

for (let i = 0; i < defaultAmount; i++) {
    const squareX = document.createElement("div");
    squareX.classList.add("squareX");
    content.appendChild(squareX);
    for (let i = 0; i < defaultAmount; i++) {
        const squareY = document.createElement("div");
        squareY.classList.add("squareY");
        squareY.style.cssText = `height: calc(800px / ${defaultAmount}); width: calc(800px / ${defaultAmount});`;
        squareY.setAttribute.onmouseenter = "color()";
        squareX.appendChild(squareY);
    }
}
addColor();



function addColor() {
    const squareColor = document.querySelectorAll(".squareY");
    console.log(squareColor);
    squareColor.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "black";
        });
    }); 
}



function addSquare(inputAmount) {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }

    for (let i = 0; i < inputAmount; i++) {
        const squareX = document.createElement("div");
        squareX.classList.add("squareX");
        content.appendChild(squareX);
        for (let i = 0; i < inputAmount; i++) {
            const squareY = document.createElement("div");
            squareY.classList.add("squareY");
            squareY.style.cssText = `height: calc(800px / ${inputAmount}); width: calc(800px / ${inputAmount});`;
            squareX.appendChild(squareY);
            
        }
    }
    addColor()
    
}


const amountBtn = document.querySelector(".amountBtn");
amountBtn.addEventListener("click", () => {
    let inputAmount = prompt("Please input the amount of squares: ")
    inputAmount = parseInt(inputAmount);
    if (inputAmount < 0 || inputAmount > 65 || typeof inputAmount !== "number") {
        alert("You provided a wrong number (Max 64)");
    } else {
        addSquare(inputAmount);
    }
});

