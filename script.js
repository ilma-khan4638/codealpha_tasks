const display = document.getElementById('display');
const themeSwitch = document.getElementById('themeSwitch');

// Append characters to display
function appendCharacter(char) {
  display.value += char;
}

// Clear display
function clearDisplay() {
  display.value = '';
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculateResult() {
  try {
    display.value = eval(display.value) || '';
  } catch {
    display.value = 'Error';
    setTimeout(() => clearDisplay(), 1000);
  }
}

// Keyboard support
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
    appendCharacter(key);
  } else if (key === 'Enter' || key === '=') {
    event.preventDefault();
    calculateResult();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});

// Theme toggle
themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('light');
});
