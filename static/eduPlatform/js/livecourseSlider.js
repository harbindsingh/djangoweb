const liveprevBtn = document.querySelector("#livecoursePrevBtn");
const livenextBtn = document.querySelector("#livecourseNextBtn");
const livecourseCardContainer = document.querySelector(".livecourse-container");
let livenumCards = 0;

livenextBtn.addEventListener("click", () => {
  livenumCards = livenumCards + 1;
  if (livenumCards > 0) {
    liveprevBtn.style.display = "block";
  }
  if (screen.width > 1024) {
    livecourseCardContainer.style.transform = `translateX(${
      -18 * livenumCards
    }em)`;
    if (livenumCards == 3) {
      livenextBtn.style.display = "none";
    }
  } else if (screen.width <= 1024 && screen.width > 768) {
    livecourseCardContainer.style.transform = `translateX(${
      -18 * livenumCards
    }em)`;
    if (livenumCards == 4) {
      livenextBtn.style.display = "none";
    }
  } else if (screen.width == 768) {
    livecourseCardContainer.style.transform = `translateX(${
      -16 * livenumCards
    }em)`;
    if (livenumCards == 4) {
      livenextBtn.style.display = "none";
    }
  } else {
    livecourseCardContainer.style.transform = `translateX(${
      -16 * livenumCards
    }em)`;
    if (livenumCards == 6) {
      livenextBtn.style.display = "none";
    }
  }
  livecourseCardContainer.style.transition = "all 1s ease";
});

liveprevBtn.addEventListener("click", () => {
  livenumCards = livenumCards - 1;
  if (livenumCards == 0) {
    liveprevBtn.style.display = "none";
  }
  if (screen.width > 1024) {
    livecourseCardContainer.style.transform = `translateX(${
      -18 * livenumCards
    }em)`;
    if (livenumCards < 3) {
      livenextBtn.style.display = "block";
    }
  } else if (screen.width <= 1024 && screen.width > 768) {
    livecourseCardContainer.style.transform = `translateX(${
      -18 * livenumCards
    }em)`;
    if (livenumCards < 4) {
      livenextBtn.style.display = "block";
    }
  } else if (screen.width == 768) {
    livecourseCardContainer.style.transform = `translateX(${
      -16 * livenumCards
    }em)`;
    if (livenumCards < 4) {
      livenextBtn.style.display = "block";
    }
  } else {
    livecourseCardContainer.style.transform = `translateX(${
      -16 * livenumCards
    }em)`;
    if (livenumCards < 6) {
      livenextBtn.style.display = "block";
    }
  }

  livecourseCardContainer.style.transition = "all 1s ease";
});
