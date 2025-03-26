// Array of riddles
const riddles = [
    { question: "What has keys but can't open locks?", answer: "piano" },
    { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "the letter m" },
    { question: "What has a head, a tail, but no body?", answer: "a coin" }
  ];
  
  let currentRiddle = 0;
  
  // Show the current riddle
  function showRiddle() {
    document.getElementById("riddle").innerText = riddles[currentRiddle].question;
    document.getElementById("result").innerText = ""; // Clear any previous result
    document.getElementById("userAnswer").value = ""; // Clear input field
  }
  
  // Check if the answer is correct
  function checkAnswer() {
    const userAnswer = document.getElementById("userAnswer").value.toLowerCase();
    const correctAnswer = riddles[currentRiddle].answer.toLowerCase();
  
    if (userAnswer === correctAnswer) {
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
  
  // Initialize the first riddle
  showRiddle();
  