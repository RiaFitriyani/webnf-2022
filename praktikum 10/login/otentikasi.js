function login() {
event.preventDefault();
    
let uname = document.getElementById("username").value;
let pwd = document.getElementById("password").value;

if (uname == "yayacantik" && pwd == "luvv") {
    location.replace("sukses.html");
    alert("Login berhasil");
    } else {
    alert("Login gagal");
    }
}