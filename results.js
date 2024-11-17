// Function to calculate quiz results for Quiz 1
function calculateResults() {
  const question1 = document.querySelector('input[name="question1"]:checked');
  const question2 = document.querySelector('input[name="question2"]:checked');
  const question3 = document.querySelector('input[name="question3"]:checked');

  if (!question1 || !question2 || !question3) {
    alert("Please answer all questions.");
    return;
  }

  let score = 0;
  if (question1.value === "yes") score++;
  if (question2.value === "yes") score++;
  if (question3.value === "yes") score++;

  localStorage.setItem("score", score);

  alert("Quiz 1 submitted! Your score has been saved.");
}

// Calculate and store Quiz 2 results
function calculateResultsQuiz2() {
  const question1 = document.querySelector('input[name="question1"]:checked');
  const question2 = document.querySelector('input[name="question2"]:checked');
  const question3 = document.querySelector('input[name="question3"]:checked');

  if (!question1 || !question2 || !question3) {
    alert("Please answer all questions.");
    return;
  }

  let quiz2Score = 0;
  if (question1.value === "yes") quiz2Score++;
  if (question2.value === "yes") quiz2Score++;
  if (question3.value === "yes") quiz2Score++;

  localStorage.setItem("quiz2Score", quiz2Score);

  alert("Quiz 2 submitted! Your score has been saved.");
}

// Function to display results on results.html
function displayResults() {
  const quiz1Score = parseInt(localStorage.getItem("score") || "0");
  const quiz2Score = parseInt(localStorage.getItem("quiz2Score")) || "0";
  const totalScore = quiz1Score + quiz2Score;

  const resultMessage = document.getElementById("resultMessag");

  if (totalScore <= 1) {
    resultMessage.innerHTML =
      "<p>You have <span>minimal signs of phobias</span> based on the questions answered. Keep managing any small fears in a healthy way!</p>";
  } else if (totalScore <= 3) {
    resultMessage.innerHTML =
      "<p>You may have <span>mild discomfort</span> in certain situations. Consider techniques to manage these small fears.</p>";
  } else if (totalScore <= 5) {
    resultMessage.innerHTML =
      "<p>You may experience <span>moderate anxiety </span>in some situations. Exploring coping mechanisms could be beneficial.</p>";
  } else {
    resultMessage.innerHTML =
      "<p>You may experience <span>significant anxiety</span> in various situations. It may be helpful to consult a mental health professional.</p>";
  }
}

if (window.location.pathname.endsWith("results.html")) {
  window.onload = displayResults;
}
