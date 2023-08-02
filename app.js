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
  linkBtns = [...document.querySelectorAll(".link-btn")],
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

// set sidebar
sidebar.innerHTML = sublinks
  .map((item) => {
    const { links, page } = item;
    return `<article>
<h4>${page}</h4>
<div class="sidebar-sublinks">
${links
  .map((item) => {
    return `<a href="${item.url}"><i class="${item.icon}"></i>${item.label}</a>`;
  })
  .join("")}
</div>
</article>`;
  })
  .join("");

// set navbar
linkBtns.forEach((btn) => {
  btn.addEventListener("mouseover", (e) => {
    const text = e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    submenu.classList.add("show");
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  });
});
