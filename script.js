const messages = [
  "Strawberry 🍓 met Kitten 🐱 one beautiful day (or night 😉)",
  "And life became sugar sweet 🍰",
  "So today, on 8th February, Strawberry asks 🤭..."
];

let index = 0;

document.getElementById("nextBtn").onclick = () => {
  if (index < messages.length) {
    document.getElementById("text").innerText = messages[index];
    index++;
  } else {
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("proposal").classList.remove("hidden");
  }
};

function moveNo() {
  const no = document.querySelector(".no");
  no.style.left = Math.random() * 200 + "px";
  no.style.top = Math.random() * 200 + "px";
  no.style.right = Math.random() * 200 + "px";
  no.style.bottom = Math.random() * 200 + "px";
  alert("No seems a bit shy 👉👈");
}

function yesClicked() {
  document.getElementById("proposal").classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");

  // 🔹 Hide the previous message text
  document.getElementById("text").style.display = "none";

  // 💥 Heart explosion (if you already added it)
  const duration = 3 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 7,
      spread: 70,
      origin: { y: 0.6 },
      shapes: ['heart'],
      colors: ['#ff4d6d', '#ff85a1', '#ffccd5']
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

