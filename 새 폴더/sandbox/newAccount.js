// 리스트를 저장할 배열을 생성합니다.
var accountList = [];

// 페이지 로드 시 저장된 데이터 불러오기
window.addEventListener("load", function () {
  loadAccountList();
  Accountdone();
});

function loadAccountList() {
  const storedAccounts = localStorage.getItem("accountList");
  accountList = storedAccounts ? JSON.parse(storedAccounts) : [];
}

function saveAccountList() {
  localStorage.setItem("accountList", JSON.stringify(accountList));
}

function Accountdone() {
  const playButton = document.querySelector(".b2");

  playButton.addEventListener("click", Accountmaking);
}

function Accountmaking() {
  // 각 입력 필드에서 값을 가져옵니다.
  var newIDValue = document.getElementById("newidInput").value;
  var newPWValue = document.getElementById("newpwInput").value;
  var checkPWValue = document.getElementById("checkpwInput").value;

  // 비밀번호가 일치하는지 확인합니다.
  if (newPWValue === checkPWValue && newPWValue !== "" && newIDValue !== "") {
    // localStorage에 ID와 비밀번호를 저장합니다.
    const account = { id: newIDValue, pw: newPWValue };
    accountList.push(account);
    saveAccountList(); // 업데이트된 리스트를 저장

    // 저장된 계정 리스트를 콘솔에 출력합니다.
    console.log("저장된 계정 리스트: ", accountList);

    // 입력 필드를 지웁니다.
    document.getElementById("newidInput").value = "";
    document.getElementById("newpwInput").value = "";
    document.getElementById("checkpwInput").value = "";
    const pageURL = "index.html";

    window.location.href = pageURL;
    console.log("move");
  } else if (newPWValue === "") {
    alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
  } else {
    alert("아이디를 입력하세요");
  }
}
Accountdone();
