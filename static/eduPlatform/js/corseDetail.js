const menubtns = document.querySelectorAll(".menubtns");
menubtns.forEach((menubtn) => {
  menubtn.addEventListener("click", () => {
    const targetDiv = menubtn.getAttribute("targetDiv");
    const divTargeted = document.getElementById(targetDiv);
    const allDivs = document.querySelectorAll(".content-div");
    menubtns.forEach((btn, i) => {
      allDivs[i].classList.add("d-none");
      btn.classList.remove("activeMenu");
    });
    menubtn.classList.add("activeMenu");
    divTargeted.classList.remove("d-none");
  });
});
