const messages = [
  "Strawberry 🍓 met Kitten 🐱 one beautiful day (or night 😉)",
  "And life became sugar sweet 🍰",
  "So today, on 8th February, Strawberry asks 🤭..."
];

let index = 0;
let musicStarted = false;
let shyShown = false;

const textEl = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");
const proposalEl = document.getElementById("proposal");
const bgMusic = document.getElementById("bgMusic");
const shyMsg = document.getElementById("shyMsg");

nextBtn.onclick = () => {
  // 🎵 Start music immediately on first click
  if (!musicStarted) {
    bgMusic.play();
    musicStarted = true;
  }

  if (index < messages.length) {
    textEl.innerText = messages[index];
    index++;
  } else {
    nextBtn.style.display = "none";
    proposalEl.classList.remove("hidden");
  }
};

function moveNo() {
  const no = document.querySelector(".no");

  // 🐱 Show shy message only once
  if (!shyShown) {
    shyMsg.classList.remove("hidden");
    shyShown = true;
  }

  const container = document.querySelector(".container");
  const maxX = container.offsetWidth - no.offsetWidth - 20;
  const maxY = container.offsetHeight - no.offsetHeight - 20;

  no.style.left = Math.random() * maxX + "px";
  no.style.top = Math.random() * maxY + "px";
}

function yesClicked() {
  proposalEl.classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");
  textEl.style.display = "none";
  shyMsg.style.display = "none";

  // 💥 Heart explosion
  const duration = 3000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 8,
      spread: 80,
      origin: { y: 0.6 },
      shapes: ['heart'],
      colors: ['#ff4d6d', '#ff85a1', '#ffccd5']
    });

    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}
