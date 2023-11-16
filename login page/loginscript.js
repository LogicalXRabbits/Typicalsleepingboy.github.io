document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");
  const passwordInput = document.getElementById("password");
  const togglePasswordBtn = document.getElementById("togglePasswordVisibility");

  // Mengecek apakah notifikasi sudah ditampilkan sebelumnya
  const notificationShown =
    sessionStorage.getItem("notificationShown") === "true";

  // Tampilkan notifikasi untuk mengisi username dan password saat pengguna memasuki web
  if (!notificationShown) {
    showWelcomeNotification();
  }

  togglePasswordBtn.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = passwordInput.value;

    // Simulasi pengecekan username dan password
    if (username === "1101213056" && password === "1101213056") {
      // Login berhasil, redirect ke halaman utama
      window.location.href = "../web/index.html";
    } else {
      // Tampilkan notifikasi jika belum pernah ditampilkan
      if (!notificationShown) {
        showNotification();
        playNotificationSound(); // Pemutaran suara otomatis
        sessionStorage.setItem("notificationShown", "true"); // Simpan status notifikasi
      }
    }
  });
});

function showNotification() {
  const notificationContainer = document.querySelector(
    ".notification-container"
  );
  notificationContainer.style.display = "block";
}

function closeNotification() {
  document.querySelector(".notification-container").style.display = "none";
}

function playNotificationSound() {
  // Ganti 'your-audio-file.mp3' dengan nama file audio Anda
  const audio = new Audio("/audio/announcement.mp3");
  audio.play();
}

function showWelcomeNotification() {
  const welcomeNotificationContainer = document.querySelector(
    ".welcome-notification-container"
  );
  welcomeNotificationContainer.style.display = "block";

  // Atur agar notifikasi dapat ditutup setelah beberapa detik
  setTimeout(function () {
    welcomeNotificationContainer.style.display = "none";
  }, 5000); // Ganti angka 5000 dengan interval yang diinginkan (dalam milidetik)
}
function closeWelcomeNotification() {
  document.querySelector(".welcome-notification-container").style.display =
    "none";
}
