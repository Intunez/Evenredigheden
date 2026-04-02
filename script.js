let current = "";
let correct = [];
let score = 0;

const opdrachten = [
  { vraag: "Wie zijn de uitersten?", antwoord: ["a","d"] },
  { vraag: "Wie zijn de middelsten?", antwoord: ["b","c"] }
];

const vakken = document.querySelectorAll(".vak");

vakken.forEach(vak => {
  vak.addEventListener("click", () => {
    vak.classList.toggle("selected");
  });
});

function startGame() {
  const rnd = opdrachten[Math.floor(Math.random()*opdrachten.length)];
  current = rnd.vraag;
  correct = rnd.antwoord;
  document.getElementById("opdracht").innerText = current;
  document.getElementById("feedback").innerText = "";
  
  vakken.forEach(v => v.classList.remove("selected"));
}

function check() {
  let gekozen = [];
  vakken.forEach(v => {
    if (v.classList.contains("selected")) {
      gekozen.push(v.dataset.id);
    }
  });

  gekozen.sort();
  correct.sort();

  if (JSON.stringify(gekozen) === JSON.stringify(correct)) {
    document.getElementById("feedback").innerText = "✅ Juist!";
    score++;
  } else {
    document.getElementById("feedback").innerText = "❌ Probeer opnieuw!";
  }

  document.getElementById("score").innerText = score;
}
