const prevBtn = document.querySelector("#coursePrevBtn");
const nextBtn = document.querySelector("#courseNextBtn");
const courseCardContainer = document.querySelector(".course-container");
let numCards = 0;

nextBtn.addEventListener("click", () => {
  numCards = numCards + 1;
  if (numCards > 0) {
    prevBtn.style.display = "block";
  }
  if (screen.width > 1024) {
    courseCardContainer.style.transform = `translateX(${-18 * numCards}em)`;
    if (numCards == 3) {
      nextBtn.style.display = "none";
    }
  } else if (screen.width <= 1024 && screen.width > 768) {
    courseCardContainer.style.transform = `translateX(${-18 * numCards}em)`;
    if (numCards == 4) {
      nextBtn.style.display = "none";
    }
  } else if (screen.width == 768) {
    courseCardContainer.style.transform = `translateX(${-16 * numCards}em)`;
    if (numCards == 4) {
      nextBtn.style.display = "none";
    }
  } else {
    courseCardContainer.style.transform = `translateX(${-16 * numCards}em)`;
    if (numCards == 6) {
      nextBtn.style.display = "none";
    }
  }
  courseCardContainer.style.transition = "all 1s ease";
});

prevBtn.addEventListener("click", () => {
  numCards = numCards - 1;
  if (numCards == 0) {
    prevBtn.style.display = "none";
  }
  if (screen.width > 1024) {
    courseCardContainer.style.transform = `translateX(${-18 * numCards}em)`;
    if (numCards < 3) {
      nextBtn.style.display = "block";
    }
  } else if (screen.width <= 1024 && screen.width > 768) {
    courseCardContainer.style.transform = `translateX(${-18 * numCards}em)`;
    if (numCards < 4) {
      nextBtn.style.display = "block";
    }
  } else if (screen.width == 768) {
    courseCardContainer.style.transform = `translateX(${-16 * numCards}em)`;
    if (numCards < 4) {
      nextBtn.style.display = "block";
    }
  } else {
    courseCardContainer.style.transform = `translateX(${-16 * numCards}em)`;
    if (numCards < 6) {
      nextBtn.style.display = "block";
    }
  }

  courseCardContainer.style.transition = "all 1s ease";
});
