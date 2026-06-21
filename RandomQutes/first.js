const quotes = [
  "Believe in yourself and keep moving forward.",
  "Success comes from consistent effort.",
  "Small steps every day lead to big results.",
  "Dream big and work hard.",
  "Discipline beats motivation.",
  "Never stop learning.",
  "Your only limit is your mindset.",
  "Mistakes are proof that you are trying.",
  "Focus on progress, not perfection.",
  "Hard work always pays off.",
  "Stay patient and trust the process.",
  "Every expert was once a beginner.",
  "Success starts with self-belief.",
  "Take action instead of waiting.",
  "Be stronger than your excuses.",
  "Difficult roads often lead to beautiful destinations.",
  "Consistency creates excellence.",
  "Growth begins outside your comfort zone.",
  "Keep going even when it's hard.",
  "Turn obstacles into opportunities.",
  "Learn something new every day.",
  "Your future is created by what you do today.",
  "Don't fear failure; fear not trying.",
  "Confidence comes from preparation.",
  "Stay curious and keep exploring.",
  "Believe you can, and you're halfway there.",
  "Every day is a fresh start.",
  "Your attitude determines your direction.",
  "Stay humble and keep improving.",
  "Action is the key to success.",
  "The best investment is in yourself.",
  "Push yourself because no one else will.",
  "Success is built one habit at a time.",
  "Don't quit before the miracle happens.",
  "Be fearless in the pursuit of your goals.",
  "The journey is as important as the destination.",
  "Make today count.",
  "Stay focused on your goals.",
  "Every challenge is a chance to grow.",
  "Knowledge becomes power when applied.",
  "Great things take time.",
  "Keep your eyes on the prize.",
  "Believe in the power of persistence.",
  "Success favors the prepared mind.",
  "The only bad time to start is never.",
  "Be the reason someone smiles today.",
  "Stay positive through every setback.",
  "Create opportunities instead of waiting for them.",
  "Your effort defines your outcome.",
  "Never underestimate the power of consistency."
];




const btn = document.getElementById("btn");
const quote = document.querySelector("h1");

btn.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[randomIndex];
});
