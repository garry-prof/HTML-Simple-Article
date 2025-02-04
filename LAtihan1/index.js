// script.js

// Contoh fungsi sederhana untuk menampilkan pesan ketika halaman dimuat
window.onload = function () {
  alert("Selamat datang di The Code Magazine!");
};

// Contoh fungsi lain untuk menambahkan interaksi dengan tombol
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("nav a");
  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      alert(`Anda mengklik: ${this.textContent}`);
    });
  });
});
