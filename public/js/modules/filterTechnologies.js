export function filterTechnologies() {
  const buttons = document.querySelectorAll(".technologies-option");
  const cards = document.querySelectorAll(".technologies-item");

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
