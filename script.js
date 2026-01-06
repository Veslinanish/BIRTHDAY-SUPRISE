function unlock() {
  const input = document.getElementById("password").value.toLowerCase();
  if (input.includes("avelin")) {
    document.getElementById("lock").classList.remove("active");
    document.getElementById("gift").classList.add("active");
  } else {
    alert("Hint: It's your name ❤️");
  }
}

function openGift() {
  const gift = document.querySelector(".gift-container");

  // Prevent reopening
  if (gift.classList.contains("open")) return;

  gift.classList.add("open");
}

const story = [
  "You are the reason my world feels beautiful 💖",
  "Every moment with you is my favorite memory 🌸",
  "Your smile is my greatest blessing 💕",
  "I am so grateful to have you in my life ❤️"
];

let index = 0;

function nextPage(e) {
  e.stopPropagation();
  document.getElementById("gift").classList.remove("active");
  document.getElementById("story").classList.add("active");
  document.getElementById("storyText").innerText = story[index];
}

function nextStory() {
  index++;
  if (index < story.length) {
    document.getElementById("storyText").innerText = story[index];
  } else {
    document.getElementById("story").classList.remove("active");
    document.getElementById("final").classList.add("active");
  }
}
