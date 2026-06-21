const textarea = document.getElementById("pass");
const charCount = document.getElementById("char");
const wordCount = document.getElementById("word");

// Character and Word Count Logic
textarea.addEventListener("input", () => {
    const text = textarea.value;
    charCount.textContent = `Character Count: ${text.length}`;
    
    const words = text.trim().split(/\s+/);
    wordCount.textContent = `Words Count: ${text.trim() === "" ? 0 : words.length}`;
});

// Bubbling effect on click
window.addEventListener("click", (e) => {
    // Check if click is outside the root div
    const root = document.getElementById("root");
    if (!root.contains(e.target)) {
        createBubble(e.clientX, e.clientY);
    }
});

function createBubble(x, y) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    
    // Position the bubble
    bubble.style.left = `${x - 10}px`;
    bubble.style.top = `${y - 10}px`;
    
    // Random color for bubble
    const colors = ["#FFC1CC", "#A1E3E2", "#B49FCC", "#FFD8B1", "#C1E1C1"];
    bubble.style.background = colors[Math.floor(Math.random() * colors.length)];
    bubble.style.opacity = "0.7";

    document.body.appendChild(bubble);

    // Remove after 2 seconds
    setTimeout(() => {
        bubble.remove();
    }, 2000);
}
