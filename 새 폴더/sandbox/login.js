function login() {
  const loginButton = document.querySelector(".b3");

  loginButton.addEventListener("click", checkAccountList);
}

function checkAccountList() {
  const pwInputValue = document.getElementById("pwInput").value;
  const idInputValue = document.getElementById("idInput").value;

  // localStorage에서 저장된 계정 리스트를 불러옵니다.
  const storedAccounts = localStorage.getItem("accountList");
  const accountList = storedAccounts ? JSON.parse(storedAccounts) : [];

  // Check if the entered ID and password match any entry in the accountList
  const found = accountList.some(
    (account) => account.id === idInputValue && account.pw === pwInputValue,
  );

  if (found) {
    // 로그인 성공 시 사용자 정보를 로컬 스토리지에 저장
    localStorage.setItem("loggedInUser", JSON.stringify({ id: idInputValue }));

    // 숨기기 및 표시 설정
    document.querySelector(".loginForm").style.display = "none";
    document.getElementById("welcomeMessage").style.display = "block";
    document.querySelector(".todo").style.display = "block";

    // ID 값 표시
    document.getElementById("idValue").innerText = idInputValue;
  } else {
    console.log("failure");
  }
}

// 페이지 로드 시 자동 로그인 체크
function autoLogin() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    const { id } = JSON.parse(loggedInUser);

    // 숨기기 및 표시 설정
    document.querySelector(".loginForm").style.display = "none";
    document.getElementById("welcomeMessage").style.display = "block";
    document.querySelector(".todo").style.display = "block";

    // ID 값 표시
    document.getElementById("idValue").innerText = id;
  }
}

// 페이지 로드 시 자동 로그인 체크 수행
autoLogin();
login();
