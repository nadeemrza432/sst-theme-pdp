//show and hide grandchildlinks on click of icon on header
if (
  document.querySelectorAll(".child_links .child_links_arrow svg").length > 0
) {
  document
    .querySelectorAll(".child_links .child_links_arrow svg")
    .forEach((link) => {
      link.addEventListener("click", (e) => {
        e.target.closest("li").querySelector("ul").classList.toggle("hide");
      });
    });
}