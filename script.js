const container = document.querySelector(".container");

let res = 16;

function grid() {
    const containerWidth = container.clientWidth;
    const pixelSize = containerWidth / res;
    container.innerHTML = "";

    for (let i = 0; i < res * res; i++) {
        const pixels = document.createElement("div");
        pixels.classList.add("pixels");
        pixels.style.width = `${pixelSize}px`;
        pixels.style.height = `${pixelSize}px`;
        container.appendChild(pixels);

        pixels.addEventListener("mouseenter", () => {
            pixels.style.backgroundColor = "black";
        });
    }

}

grid();

const resizeBtn = document.querySelector(".resize");

resizeBtn.addEventListener("click", () => {
    num = prompt("Input desired resolution:");
    num = parseInt(num);
    if (typeof num == "number" && Number.isInteger(num)) {
        res = num;
        grid();
    } else {
        alert("Enter a valid number");
    }
});