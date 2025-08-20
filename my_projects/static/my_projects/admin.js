document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".filter-horizontal select[multiple]")
    .forEach((select) => {
      // Create container for tags
      const container = document.createElement("div");
      container.className = "tag-container";

      // Create tags
      Array.from(select.options).forEach((option) => {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = option.text;
        if (option.selected) tag.classList.add("selected");
        tag.addEventListener("click", () => {
          option.selected = !option.selected;
          tag.classList.toggle("selected");
        });
        container.appendChild(tag);
      });

      select.parentNode.insertBefore(container, select.nextSibling);
    });
});
