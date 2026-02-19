const icons = document.querySelectorAll(".icon");

icons.forEach(icon => {
  icon.addEventListener("click", () => {
    const article = icon.closest("article");

    article.classList.toggle("liked");

    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
  });
});
