topicBtn = document.querySelectorAll(".topicBtn");
videoElement = document.querySelector(".tutorialVideos");
tutorialVideo = document.querySelector(".tutorialVideos source");
topicBtn[0].classList.add("activeTopic", "shadow");
topicBtn[0].classList.remove("notactiveTopic");

topicBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    videosrc = e.target.getAttribute("targetVideo");
    tutorialVideo.src = videosrc;
    videoElement.load();
    topicBtn.forEach((button) => {
      button.classList.remove("activeTopic", "shadow");
      button.classList.add("notactiveTopic");
    });
    btn.classList.add("activeTopic", "shadow");
    btn.classList.remove("notactiveTopic");
  });
});
