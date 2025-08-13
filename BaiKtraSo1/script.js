const registerPopup = document.getElementById("register-popup");
const closePopupBtn = document.getElementById("close-popup");
const registerForm = document.getElementById("register-form");

// Đóng mở đăng kí
document.querySelector("#dangKi").addEventListener("click", function (e) {
  e.preventDefault();
  registerPopup.style.display = "block";
});

closePopupBtn.addEventListener("click", function () {
  registerPopup.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === registerPopup) {
    registerPopup.style.display = "none";
  }
});

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Bạn chưa nhập email hoặc mật khẩu!");
  }
  if (!email.includes("@") || email.length <= 6) {
    alert("Email phải chứa @ và có nhiều hơn 6 ký tự!");
    return;
  }

  alert("Đăng ký thành công!");
  registerPopup.style.display = "none";
  registerForm.reset();
});

// Đếm lượt xem
const viewButtons = document.querySelectorAll(".viewbtn");
viewButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const productContainer = btn.closest(".product-container");
    const viewCountElem = productContainer.querySelector("#view-count");

    let currentViews = parseInt(viewCountElem.textContent) || 0;
    viewCountElem.textContent = currentViews + 1;
  });
});

//Dark mode
const toggleBtn = document.getElementById("toggle-darkmode");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Timer
const updateClock = () => {
  const now = new Date();

  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");

  document.querySelector(
    ".time"
  ).textContent = `${hours}:${minutes}:${seconds}`;
};

updateClock();
setInterval(updateClock, 1000);
