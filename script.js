let rastgeleSayi = Math.floor(Math.random() * 100) + 1;

function kontrolEt() {
    let tahmin = document.getElementById("tahmin").value;
    let sonuc = document.getElementById("sonuc");

    if (tahmin == rastgeleSayi) {
        sonuc.innerText = "🎉 Doğru tahmin!";
    } else if (tahmin < rastgeleSayi) {
        sonuc.innerText = "Daha büyük bir sayı dene!";
    } else {
        sonuc.innerText = "Daha küçük bir sayı dene!";
    }
}
