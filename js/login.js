// LOGIN
const login = document.getElementById("tombol_login");
login.onclick = (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Semua field harus diisi");
    return false;
  }

  // ngambil nilai array dari localstorage
  const akun = JSON.parse(localStorage.getItem("users"));

  //Periksa apakah array akun ada dan tidak kosong
  if (akun && akun.length) {
    // Melakukan perulangan pada array
    for (let i = 0; i < akun.length; i++) {
      if (username == akun[i].username && password == akun[i].password) {
        window.location.href = "index.html";
        alert("Selamat Anda Berhasil Login");
        localStorage.setItem("username", username);
        return;
      }
    }
  }
  // jika salah penginputan
  alert("Masukkan username dan Password dengan benar");
  document.getElementById("username").focus();
};