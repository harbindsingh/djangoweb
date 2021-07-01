const goldencardList = document.getElementById("goldencolorClasscardlist");
const goldennextBtn = document.getElementById("goldencolorClassnextCard");
const goldenprevBtn = document.getElementById("goldencolorClassprevCard");
const goldenallcardListItems = document.querySelectorAll(
  ".goldencolorClasslist"
);
let flag = 0;

goldennextBtn.addEventListener("click", () => {
  flag = 0;
  const width = goldenallcardListItems[0].offsetWidth;
  goldencardList.style.transform = `translateX(${-width}px)`;
  goldencardList.style.transition = "transform 0.8s ease";
});

goldencardList.addEventListener("transitionend", () => {
  if (flag == 0) {
    const listitemfirst = document.querySelector(".goldencolorClasslist");
    goldencardList.appendChild(listitemfirst);
    goldencardList.style.transition = "none";
    goldencardList.style.transform = `translateX(0)`;
    setTimeout(() => {
      goldencardList.style.transition = "transform 0.8s ease";
    });
  }
  if (flag == 1) {
    const listitemfirst = document.querySelector(".goldencolorClasslist");
    const listitemnew = document.querySelectorAll(".goldencolorClasslist")[6];
    goldencardList.insertBefore(listitemnew, listitemfirst);
    goldencardList.style.transition = "transform 0.8s ease";
    goldencardList.style.transform = `translateX(0)`;
    setTimeout(() => {
      goldencardList.style.transition = "transform 0.8s ease";
    });
    flag = 2;
  }
});

goldenprevBtn.addEventListener("click", () => {
  flag = 1;
  goldencardList.style.transition = "all 0.01s";
  const width = goldenallcardListItems[0].offsetWidth;
  goldencardList.style.transform = `translateX(${-width}px)`;
});
