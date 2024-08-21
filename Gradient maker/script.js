const select = document.querySelector('select'),
    refresh = document.querySelector('.refresh'),
    copy = document.querySelector('.copy'),
    color1 = document.querySelector('.color1'),
    color2 = document.querySelector('.color2'),
    textarea = document.querySelector("textarea");
const Colorinp = document.querySelectorAll('.input-color input');
const gradientBox = document.querySelector('.gradient-box');

// Function to update the gradient background
const updateGradient = () => {
    const color1Inp = color1.value;
    const color2Inp = color2.value;
    const selectVal = select.value;
    const gradient = `linear-gradient(${selectVal} , ${color1Inp} , ${color2Inp})`;
    gradientBox.style.background = gradient;
    textarea.textContent = `background: ${gradient};`;
};

// Add event listeners to the color inputs
Colorinp.forEach(input => {
    input.addEventListener("input", updateGradient);
});

// Add event listener to the select box
select.addEventListener("change", updateGradient);
