// Jamoa a'zolari: o'z ismingizni shu ro'yxatga qo'shing
const team = [
  { name: "Shuhrat", role: "DevOps muhandis" },
  { name: "Sardorbek", role: "CI/CD" },
  { name: "Zarnigor", role: "Monitoring" }
];

const teamEl = document.getElementById("team");
team.forEach(m => {
  const d = document.createElement("div");
  d.className = "member";
  d.innerHTML = `<div class="av">${m.name[0]}</div><h3>${m.name}</h3><p>${m.role}</p>`;
  teamEl.appendChild(d);
});

// Pipeline animatsiyasi
const btn = document.getElementById("runBtn");
const status = document.getElementById("pipeStatus");
const stages = [...document.querySelectorAll("#stages li")];
let running = false;

btn.addEventListener("click", async () => {
  if (running) return;
  running = true;
  btn.disabled = true;
  stages.forEach(s => s.className = "");
  status.textContent = "Pipeline ishlayapti...";
  for (const s of stages) {
    s.classList.add("run");
    await new Promise(r => setTimeout(r, 800));
    s.classList.replace("run", "done");
  }
  status.textContent = "Deploy muvaffaqiyatli yakunlandi.";
  btn.textContent = "Qayta ishga tushirish";
  btn.disabled = false;
  running = false;
});

// Aloqa formasi (hozircha faqat frontend)
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("formMsg").textContent = "Rahmat! Tez orada bog'lanamiz.";
  e.target.reset();
});
