const moredesc = document.querySelectorAll(".moreSpan");
moredesc.forEach((more) => {
  more.addEventListener("click", (event) => {
    more.classList.add("d-none");
    moreId = event.target.getAttribute("id");
    descSpan = document.getElementById(`moreDesc_${moreId}`);
    lessbtn = document.getElementById(`less_${moreId}`);
    lessbtn.classList.remove("d-none");
    descSpan.classList.remove("d-none");
  });
});

const lessdesc = document.querySelectorAll(".lessbtn");
lessdesc.forEach((less) => {
  less.addEventListener("click", (event) => {
    less.classList.add("d-none");
    lessId = event.target.getAttribute("id");
    lessId = lessId.slice(5);
    descSpan = document.getElementById(`moreDesc_${lessId}`);
    morebtn = document.getElementById(`${lessId}`);
    morebtn.classList.remove("d-none");
    descSpan.classList.add("d-none");
  });
});
