import sublinks from "./data.js";

const get = (element) => {
  const selection = document.querySelector(element);

  if (selection) return selection;

  throw new Error("No element selected");
};

const toggleBtn = get(".toggle-btn"),
  closeBtn = get(".close-btn"),
  sidebarWrapper = get(".sidebar-wrapper"),
  sidebar = get(".sidebar-links"),
  linkBtn = [...document.querySelectorAll(".link-btn")],
  submenu = get(".submenu"),
  hero = get(".hero"),
  nav = get(".nav");

// hide.show sidebar
toggleBtn.addEventListener("click", () => {
  sidebarWrapper.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sidebarWrapper.classList.remove("show");
});
