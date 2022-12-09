let nama = document.getElementById("Nama")
let email = document.getElementById("Email")
let jam = document.getElementById("Jam")
let tujuan = document.getElementById("Tujuan")
let jumlah = document.getElementById("Jumlah")
let span = document.getElementsByTagName("Span")

function proses() {


if (nama.value =="") {
    span[0].style.visibility = "visible"
}
if (email.value =="") {
    span[1].style.visibility = "visible"
}
if (jam.value =="") {
    span[2].style.visibility = "visible"
}
if (tujuan.value =="") {
    span[3].style.visibility = "visible"
}
if (jumlah.value =="") {
    span[4].style.visibility = "visible"
}


}