const content = document.querySelector(".content");


const square = document.createElement("div");
square.classList.add("square");
content.appendChild(square);



const amountBtn = document.querySelector(".amountBtn");
amountBtn.addEventListener("click", () => {
    let inputAmount = prompt("Please input the amount of squares: ")
    if (inputAmount < 0 || typeof inputAmount !== "number") {
        alert("You provided a wrong number (Max 64)");
    } else {
        return inputAmount;
    }
});