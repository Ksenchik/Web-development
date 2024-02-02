export function filterPortfolio() {
  const buttons = document.querySelectorAll(".portfolio-option");
  const cards = document.querySelectorAll(".portfolio__item");

  function filter(category, items) {
    items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category);
      const isShowAll = category === "all";
      if (isItemFiltered && !isShowAll) {
        item.classList.add("hide");
      } else {
        item.classList.remove("hide");
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("section-option--active");
      });
      button.classList.add("section-option--active");

      const currentCategory = button.dataset.filter;
      filter(currentCategory, cards);
    });
  });
}
