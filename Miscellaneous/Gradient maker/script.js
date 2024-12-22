const select = document.querySelector('select');
const refresh = document.querySelector('.btns .refresh');
const copy = document.querySelector('.copy');
const colorCountSelect = document.querySelector('.color-count');
const colorInputsContainer = document.querySelector('.color-inputs');
const textarea = document.querySelector('textarea');
const gradientBox = document.querySelector('.gradient-box');

// Function to generate a random color
const RandomColor = () => {
    const random = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${random.padStart(6, '0')}`;
};

// Function to update the gradient background
const updateGradient = () => {
    const colors = Array.from(colorInputsContainer.querySelectorAll('.color')).map(input => input.value);
    const direction = select.value;
    const gradient = `linear-gradient(${direction}, ${colors.join(', ')})`;
    gradientBox.style.background = gradient;
    textarea.textContent = `background: ${gradient};`;
};

// Function to update the number of color inputs
const updateColorInputs = () => {
    const colorCount = parseInt(colorCountSelect.value, 10);
    const currentInputs = colorInputsContainer.querySelectorAll('.color');
    const currentCount = currentInputs.length;

    if (colorCount > currentCount) {
        for (let i = currentCount; i < colorCount; i++) {
            const newColorInput = document.createElement('input');
            newColorInput.type = 'color';
            newColorInput.className = 'color';
            newColorInput.value = RandomColor();
            newColorInput.addEventListener('input', updateGradient);
            colorInputsContainer.appendChild(newColorInput);
        }
    } else if (colorCount < currentCount) {
        for (let i = currentCount - 1; i >= colorCount; i--) {
            colorInputsContainer.removeChild(currentInputs[i]);
        }
    }

    updateGradient();
};

// Add event listener to dynamically update the gradient on color input
colorInputsContainer.addEventListener('input', updateGradient);

// Add event listener to the select box
select.addEventListener('change', updateGradient);

// Add event listener to the color count selector
colorCountSelect.addEventListener('change', updateColorInputs);

// Refresh button to randomize all colors
refresh.addEventListener('click', () => {
    const colorInputs = colorInputsContainer.querySelectorAll('.color');
    colorInputs.forEach(input => {
        input.value = RandomColor();
    });
    updateGradient();
});

// Copy button to copy the gradient CSS to clipboard
copy.addEventListener('click', () => {
    navigator.clipboard.writeText(textarea.textContent).then(() => {
        alert("CSS code copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy text: " + err);
    });
});

// Initialize the gradient on page load
updateGradient();
