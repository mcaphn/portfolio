const toggleBtn = document.querySelector(".toggle");
const sidebar = document.querySelector(".sidebar");
const windowWidth = window.matchMedia("(min-width: 750px)");

toggleBtn.addEventListener('click', function() {
  sidebar.classList.toggle("show-sidebar");
  toggleBtn.classList.toggle("toggle-spin");
});

function away(windowWidth) {
  if (windowWidth.matches && sidebar.classList.contains("show-sidebar")) {
      sidebar.classList.toggle("show-sidebar");
      toggleBtn.classList.toggle("toggle-spin");
  }
}


away(windowWidth);
windowWidth.addListener(away);
