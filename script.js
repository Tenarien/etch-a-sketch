const content = document.querySelector(".content");



function addSquare(inputAmount) {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }

    for (let i = 0; i <= inputAmount; i++) {
        const squareX = document.createElement("div");
        squareX.classList.add("squareX");
        content.appendChild(squareX);
        for (let i = 0; i <= inputAmount; i++) {
            const squareY = document.createElement("div");
            squareY.classList.add("squareY");
            squareY.style.cssText = `height: calc(800px / ${inputAmount}); width: calc(800px / ${inputAmount});`;
            squareX.appendChild(squareY);
        }
    }
    
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