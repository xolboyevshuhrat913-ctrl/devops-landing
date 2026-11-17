// Arxitektura auditiga yozilish modali
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("auditModal");
  const openBtns = document.querySelectorAll(".open-modal-btn");
  const closeBtn = document.getElementById("closeModalBtn");
  const form = document.getElementById("auditForm");
  const successBox = document.getElementById("modalSuccess");

  if (!modal) return;

  const openModal = () => {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  };

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  };

  openBtns.forEach((btn) => btn.addEventListener("click", openModal));
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.hidden = true;
      if (successBox) successBox.hidden = false;

      setTimeout(() => {
        closeModal();
        form.reset();
        form.hidden = false;
        if (successBox) successBox.hidden = true;
      }, 2500);
    });
  }
});
