function movelink() {
  const playButton = document.querySelector(".b1");
  playButton.addEventListener("click", handlePlayButtonClick);
}

function handlePlayButtonClick() {
  const pageURL = "makeidpw.html";

  window.location.href = pageURL;
  console.log("move");
}

movelink();
