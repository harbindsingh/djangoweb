const fullcourseList = document.getElementById("fullcourseclasscardlist");
const fullcoursenextBtn = document.getElementById("fullcourseclassnextCard");
const fullcourseprevBtn = document.getElementById("fullcourseclassprevCard");
const fullcourseallcardListItems = document.querySelectorAll(
  ".fullcourseclasslist"
);
let fullcourseflag = 0;

fullcoursenextBtn.addEventListener("click", () => {
  fullcourseflag = 0;
  const width = fullcourseallcardListItems[0].offsetWidth;
  fullcourseList.style.transform = `translateX(${-width}px)`;
  fullcourseList.style.transition = "transform 0.8s ease";
});

fullcourseList.addEventListener("transitionend", () => {
  if (fullcourseflag == 0) {
    const listitemfirst = document.querySelector(".fullcourseclasslist");
    fullcourseList.appendChild(listitemfirst);
    fullcourseList.style.transition = "none";
    fullcourseList.style.transform = `translateX(0)`;
    setTimeout(() => {
      fullcourseList.style.transition = "transform 0.8s ease";
    });
  }
  if (fullcourseflag == 1) {
    const listitemfirst = document.querySelector(".fullcourseclasslist");
    const listitemnew = document.querySelectorAll(".fullcourseclasslist")[4];
    fullcourseList.insertBefore(listitemnew, listitemfirst);
    fullcourseList.style.transition = "transform 0.8s ease";
    fullcourseList.style.transform = `translateX(0)`;
    setTimeout(() => {
      fullcourseList.style.transition = "transform 0.8s ease";
    });
    fullcourseflag = 2;
  }
});

fullcourseprevBtn.addEventListener("click", () => {
  fullcourseflag = 1;
  fullcourseList.style.transition = "all 0.01s";
  const width = fullcourseallcardListItems[0].offsetWidth;
  fullcourseList.style.transform = `translateX(${-width}px)`;
});
