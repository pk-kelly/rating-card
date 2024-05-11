const rating1 = document.querySelector(".rating1");
const rating2 = document.querySelector(".rating2");
const rating3 = document.querySelector(".rating3");
const rating4 = document.querySelector(".rating4");
const rating5 = document.querySelector(".rating5");
const AppreciationText = document.querySelector(".appreciation-text");
const main = document.querySelector(".main");
const MainthankYou = document.querySelector(".main-thank-you");
rating1.addEventListener("click", function () {
  main.classList.add("hide");
  MainthankYou.classList.remove("hide");
  AppreciationText.innerHTML = `You selected  ${rating1.innerHTML} out of 5`;
  // rating1.innerHTML = `${rating2.innerHTML}`;
});

rating2.addEventListener("click", function () {
  main.classList.add("hide");
  MainthankYou.classList.remove("hide");
  AppreciationText.innerHTML = `You selected  ${rating2.innerHTML} out of 5`;
  // rating1.innerHTML = `${rating2.innerHTML}`;
});
rating3.addEventListener("click", function () {
  main.classList.add("hide");
  MainthankYou.classList.remove("hide");
  AppreciationText.innerHTML = `You selected  ${rating3.innerHTML} out of 5`;
  // rating1.innerHTML = `${rating2.innerHTML}`;
});
rating4.addEventListener("click", function () {
  main.classList.add("hide");
  MainthankYou.classList.remove("hide");
  AppreciationText.innerHTML = `You selected  ${rating4.innerHTML} out of 5`;
  // rating1.innerHTML = `${rating2.innerHTML}`;
});
rating5.addEventListener("click", function () {
  main.classList.add("hide");
  MainthankYou.classList.remove("hide");
  AppreciationText.innerHTML = `You selected  ${rating5.innerHTML} out of 5`;
  // rating1.innerHTML = `${rating2.innerHTML}`;
});
