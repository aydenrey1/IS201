
  // Ensure the script runs after the page is loaded
window.onload = function() {
    showRiddle();
};

// Array of riddles with multiple valid answers
const riddles = [
    { question: "What has keys but can't open locks?", answer: ["piano", "a piano"] },
    { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: ["the letter m", "m", "letter m"] },
    { question: "What has a head, a tail, but no body?", answer: ["a coin", "coin"] }
];

let currentRiddle = 0;

// Show the current riddle
function showRiddle() {
    let riddleElement = document.getElementById("riddle");
    if (!riddleElement) {
        console.error("Error: Riddle element not found!");
        return;
    }

    riddleElement.innerText = riddles[currentRiddle].question;
    document.getElementById("result").innerText = ""; // Clear previous result
    document.getElementById("userAnswer").value = ""; // Clear input field
}

// Check if the answer is correct
function checkAnswer() {
    const userAnswer = document.getElementById("userAnswer").value.toLowerCase().trim();
    const correctAnswers = riddles[currentRiddle].answer.map(a => a.toLowerCase());

    if (correctAnswers.includes(userAnswer)) {
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Oops! That's not correct.";
    }
}

// Show the next riddle
function nextRiddle() {
    currentRiddle = (currentRiddle + 1) % riddles.length;
    showRiddle();
}

