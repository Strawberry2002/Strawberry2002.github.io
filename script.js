const messages = [
  "Strawberry met Kitten one beautiful day 🐱",
  "And life became sweeter 🍓",
  "Every smile of Kitten melts Strawberry’s heart ❤️",
  "So today, Strawberry asks..."
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
}

function yesClicked() {
  document.getElementById("proposal").classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");
}

document.getElementById("musicBtn").onclick = () => {
  const music = document.getElementById("bgMusic");
  music.play();
};
