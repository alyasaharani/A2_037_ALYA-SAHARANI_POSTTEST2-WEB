const tombol = document.getElementById('daftar');
tombol.onclick = regis;

function regis(e) {
  e.preventDefault();

  const Username = document.getElementById('daf_username').value;
  const Email = document.getElementById('daf_email').value;
  const Password = document.getElementById('daf_pass').value;

  if (Username === "" || Email === "" || Password === "") {
    alert("Semua field harus diisi");
    return false;
}


    // mengambil data yang sudah ada di local storage
    var data = JSON.parse(localStorage.getItem("users")) || [];
    // menambahkan data baru ke dalam array
    data.push({username: Username, email: Email, password: Password});

    // menyimpan data ke dalam local storage
    localStorage.setItem("users", JSON.stringify(data));

    alert("Berhasil Daftar");
    window.location.href = "login.html";
};