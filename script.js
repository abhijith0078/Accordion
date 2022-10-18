const clickButton = document.querySelectorAll(".grid");
const clickIcon = document.querySelectorAll(".clicking-icon");

clickButton[0].classList.add("open");
clickIcon.forEach(function (element, index) {
  element.addEventListener("click", function () {
    clickButton[index].classList.toggle("open");
    console.log("clicked");
  });

  console.log(element, index);
});
