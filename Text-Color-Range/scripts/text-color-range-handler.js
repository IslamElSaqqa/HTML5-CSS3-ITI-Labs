const sliders = document.querySelectorAll('input[type="range"]');
const text = document.getElementById("text");

function changeColor() {
    const r = sliders[0].value;
    const g = sliders[1].value;
    const b = sliders[2].value;

    text.style.color = `rgb(${r}, ${g}, ${b})`;
}
