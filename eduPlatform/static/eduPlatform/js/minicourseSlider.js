const minicourseList = document.getElementById("minicourseclasscardlist");
const minicoursenextBtn = document.getElementById("minicourseclassnextCard");
const minicourseprevBtn = document.getElementById("minicourseclassprevCard");
const minicourseallcardListItems = document.querySelectorAll(
  ".minicourseclasslist"
);
let minicourseflag = 0;

minicoursenextBtn.addEventListener("click", () => {
  minicourseflag = 0;
  const width = minicourseallcardListItems[0].offsetWidth;
  minicourseList.style.transform = `translateX(${-width}px)`;
  minicourseList.style.transition = "transform 0.8s ease";
});

minicourseList.addEventListener("transitionend", () => {
  if (minicourseflag == 0) {
    const listitemfirst = document.querySelector(".minicourseclasslist");
    minicourseList.appendChild(listitemfirst);
    minicourseList.style.transition = "none";
    minicourseList.style.transform = `translateX(0)`;
    setTimeout(() => {
      minicourseList.style.transition = "transform 0.8s ease";
    });
  }
  if (minicourseflag == 1) {
    const listitemfirst = document.querySelector(".minicourseclasslist");
    const listitemnew = document.querySelectorAll(".minicourseclasslist")[6];
    minicourseList.insertBefore(listitemnew, listitemfirst);
    minicourseList.style.transition = "transform 0.8s ease";
    minicourseList.style.transform = `translateX(0)`;
    setTimeout(() => {
      minicourseList.style.transition = "transform 0.8s ease";
    });
    minicourseflag = 2;
  }
});

minicourseprevBtn.addEventListener("click", () => {
  minicourseflag = 1;
  minicourseList.style.transition = "all 0.01s";
  const width = minicourseallcardListItems[0].offsetWidth;
  minicourseList.style.transform = `translateX(${-width}px)`;
});
