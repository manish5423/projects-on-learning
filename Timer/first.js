// --- 1. SETTINGS & STATE ---
let timeLeftInSeconds = 0; // Total seconds remaining
let timerInterval = null;  // Variable to store our interval (so we can stop it later)

// --- 2. SELECTING ELEMENTS FROM THE PAGE ---
const hoursInput = document.getElementById('hh');
const minutesInput = document.getElementById('mm');
const secondsInput = document.getElementById('ss');

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

const quickAddButtons = document.querySelectorAll('.quick-add button');

// --- 3. HELPER FUNCTIONS ---

/**
 * Updates the numbers you see on the screen (the inputs)
 */
function updateUI() {
    const hours = Math.floor(timeLeftInSeconds / 3600);
    const minutes = Math.floor((timeLeftInSeconds % 3600) / 60);
    const seconds = timeLeftInSeconds % 60;

    // Pad with '0' if the number is less than 10 (e.g. "05" instead of "5")
    hoursInput.value = String(hours).padStart(2, '0');
    minutesInput.value = String(minutes).padStart(2, '0');
    secondsInput.value = String(seconds).padStart(2, '0');
}

/**
 * Reads the numbers you typed and calculates the total seconds
 */
function syncTimeFromInputs() {
    const h = parseInt(hoursInput.value) || 0;
    const m = parseInt(minutesInput.value) || 0;
    const s = parseInt(secondsInput.value) || 0;
    
    timeLeftInSeconds = (h * 3600) + (m * 60) + s;
}

// --- 4. MAIN TIMER CONTROLS ---

function startTimer() {
    // If the timer is already running, don't do anything
    if (timerInterval) return;

    // Make sure we have the latest time from the inputs before starting
    syncTimeFromInputs();

    // If there is no time set, don't start
    if (timeLeftInSeconds <= 0) {
        alert("Please set a time first!");
        return;
    }

    // Start a function that runs every 1000 milliseconds (1 second)
    timerInterval = setInterval(() => {
        timeLeftInSeconds--; // Decrease time by 1
        updateUI();          // Update what the user sees

        // If time hits zero, stop the timer
        if (timeLeftInSeconds <= 0) {
            stopTimer();
            alert("Time is up!");
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval); // This stops the interval from running
    timerInterval = null;         // Clear the variable
}

function resetTimer() {
    stopTimer();
    timeLeftInSeconds = 0;
    updateUI();
}

// --- 5. CONNECTING EVERYTHING (EVENT LISTENERS) ---

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

// Quick add buttons (+1 Min, etc.)
quickAddButtons.forEach(button => {
    button.addEventListener('click', () => {
        const secondsToAdd = parseInt(button.getAttribute('data-time'));
        timeLeftInSeconds += secondsToAdd;
        updateUI();
    });
});

// Update the time if the user manually types in the boxes
[hoursInput, minutesInput, secondsInput].forEach(input => {
    input.addEventListener('input', () => {
        syncTimeFromInputs();
    });
    
    // Auto-format (add zero padding) when the user finishes typing
    input.addEventListener('blur', updateUI);
});

// Initial load: make sure inputs are clean
updateUI();


 


