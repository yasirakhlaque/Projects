const select = document.querySelector('select'),
    refresh = document.querySelector('.btns .refresh'),
    copy = document.querySelector('.copy'),
    color1 = document.querySelector('.color1'),
    color2 = document.querySelector('.color2'),
    textarea = document.querySelector("textarea");
const Colorinp = document.querySelectorAll('.input-color input');
const gradientBox = document.querySelector('.gradient-box');

// Function to generate a random color
const RandomColor = () => {
    const random = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${random.padStart(6, '0')}`;
};

// Function to update the gradient background
const updateGradient = () => {
    const color1Inp = color1.value;
    const color2Inp = color2.value;
    const selectVal = select.value;
    let gradient = `linear-gradient(${selectVal}, ${color1Inp}, ${color2Inp})`;
    gradientBox.style.background = gradient;
    textarea.textContent = `background: ${gradient};`;
};

// Event listener for the refresh button
refresh.addEventListener("click", () => {
    color1.value = RandomColor();
    color2.value = RandomColor();
    updateGradient();  // Update the gradient after random colors are generated
});

// Add event listeners to the color inputs
Colorinp.forEach(input => {
    input.addEventListener("input", updateGradient);
});

// Add event listener to the select box
select.addEventListener("change", updateGradient);

// copy button working 
copy.addEventListener("click", () => {
    // Copy the text from the textarea to the clipboard
    const codeToCopy = textarea.textContent;
    navigator.clipboard.writeText(codeToCopy).then(() => {
        alert("CSS code copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy text: " + err);
    });
});