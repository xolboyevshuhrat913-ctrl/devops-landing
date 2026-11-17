// FAQ savol-javob akkordeoni
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    const icon = item.querySelector(".faq-icon");

    questionBtn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      // Boshqalarini yopish
      faqItems.forEach((el) => {
        el.classList.remove("open");
        const elIcon = el.querySelector(".faq-icon");
        if (elIcon) elIcon.textContent = "+";
      });

      // Tanlanganini ochish
      if (!isOpen) {
        item.classList.add("open");
        if (icon) icon.textContent = "−";
      }
    });
  });
});
