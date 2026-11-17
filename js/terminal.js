// Hero qismidagi interaktiv CI/CD deploy simulyatori
document.addEventListener("DOMContentLoaded", () => {
  const runBtn = document.getElementById("runDeployBtn");
  const output = document.getElementById("terminalOutput");

  if (!runBtn || !output) return;

  const steps = [
    { text: '<span class="prompt">$</span> git push origin main', cls: "" },
    { text: "[1/4] Docker obraz yig‘ilmoqda...", cls: "muted" },
    { text: "[2/4] Xavfsizlik va unit testlar o‘tdi ✓", cls: "muted" },
    { text: "[3/4] Terraform infratuzilma o‘zgarishlari qo‘llanildi", cls: "muted" },
    { text: "✓ Yangi versiya production muhitiga muvaffaqiyatli chiqarildi!", cls: "success" }
  ];

  let isRunning = false;

  runBtn.addEventListener("click", () => {
    if (isRunning) return;
    isRunning = true;
    runBtn.textContent = "Jarayonda...";
    output.innerHTML = "";

    steps.forEach((step, index) => {
      setTimeout(() => {
        const line = document.createElement("div");
        line.className = `log-line ${step.cls}`.trim();
        line.innerHTML = step.text;
        output.appendChild(line);

        if (index === steps.length - 1) {
          isRunning = false;
          runBtn.textContent = "▶ Qayta sinash";
        }
      }, index * 550);
    });
  });
});
