function getRandomGreeting() {
  var greetings = [
"life is but a mystery, but untold",
"pizza",
"attack on titan",
"dinosaurs are still alive",
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
