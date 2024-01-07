// 이미지 URL 리스트
const imageList = [
  "https://images.unsplash.com/photo-1567623680816-907448e0fe6b?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1520856707909-75c4048cc858?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1668063383022-8b8f82609305?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1673586410488-b694d350756e?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1703769605311-a8a837521cbb?q=80&w=3792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

document.addEventListener("DOMContentLoaded", function () {
  // 최초 로딩 시 랜덤 배경 설정
  changeBackground();
});

function changeBackground() {
  const body = document.body;

  // 랜덤하게 이미지 선택
  const randomIndex = Math.floor(Math.random() * imageList.length);
  const randomImage = imageList[randomIndex];

  // 배경화면 설정
  body.style.backgroundImage = `url('${randomImage}')`;
}
function checkBackground() {
  const currentBackground = getComputedStyle(document.body).backgroundImage;

  // Replace this URL with the specific background image URL you want to check
  const targetBackground =
    'url("https://images.unsplash.com/photo-1520856707909-75c4048cc858?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';

  const worldClock = document.querySelector(".worldclock");

  if (currentBackground === targetBackground) {
    worldClock.style.color = "black"; // Set font color to black
  } else {
    worldClock.style.color = "white"; // Set font color to default color
  }
}

// Run the function when the page loads and whenever the background image changes
window.addEventListener("load", checkBackground);
window.addEventListener("transitionend", checkBackground);
setInterval(changeBackground, 5000);
