const texts = [
  "A physics student at Shandong University.",
  "Interested in brain-computer interfaces.",
  "Loves reading, movies, and science.",
  "Building connections between mind and machine."
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = texts[i];
  const display = document.getElementById("typewriter");

  if (!isDeleting && j < currentText.length) {
    display.textContent = currentText.substring(0, j + 1);
    j++;
    setTimeout(type, 80);
  } else if (isDeleting && j > 0) {
    display.textContent = currentText.substring(0, j - 1);
    j--;
    setTimeout(type, 40);
  } else {
    if (!isDeleting) {
      setTimeout(() => (isDeleting = true, type()), 1200);
    } else {
      isDeleting = false;
      i = (i + 1) % texts.length;
      setTimeout(type, 400);
    }
  }
}

type();
