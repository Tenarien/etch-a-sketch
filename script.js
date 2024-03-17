const content = document.querySelector(".content");



function addSquare(inputAmount) {
    for (let i = 0; i <= inputAmount; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        content.appendChild(square);
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