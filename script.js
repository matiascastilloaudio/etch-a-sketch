const container = document.querySelector(".container");
const resizeBtn = document.querySelector(".resize");
const blackInkBtn = document.querySelector(".blackInk");
const colorInkBtn = document.querySelector(".colorInk");
const darkeningInkBtn = document.querySelector(".darkeningInk");
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

        blackInkBtn.addEventListener("click", () => {
            pixels.addEventListener("mouseenter", () => {
                pixels.style.backgroundColor = "black";
            });
        });

        colorInkBtn.addEventListener("click", () => {
            pixels.addEventListener("mouseenter", () => {
                pixels.style.backgroundColor = randomBgColor();
            });
        });

        darkeningInkBtn.addEventListener("click", () => {
            pixels.addEventListener("mouseenter", () => {
                pixels.style.backgroundColor = "grey";
            });
        });
    }

}

grid();

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

function randomBgColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
  }