function start() {
// HTML'de oluşturduğumuz kutuların başlıklarını değiştirme
var leftBoxTitle = document.querySelector(".leftboxes .box-title");
leftBoxTitle.textContent = "Taş";

var middleBoxTitle = document.querySelector(".middleboxes .box-title");
middleBoxTitle.textContent = "Kağıt";

var rightBoxTitle = document.querySelector(".rightboxes .box-title");
rightBoxTitle.textContent = "Makas";

// Başlıkların font boyutunu değiştirme
var boxTitles = document.querySelectorAll(".box-title");
boxTitles.forEach(function(boxTitle) {
  boxTitle.style.fontSize = "40px";
});
var ustyazi = document.querySelector(".container h1");
var altyazi = document.querySelector(".container h2");
const leftBox = document.querySelector('.leftboxes');
const middleBox = document.querySelector('.middleboxes');
const rightBox = document.querySelector('.rightboxes');
var secilen=0;
var image = document.getElementById("image"); // resim elementi
var imageArray = ["images/DAŞ.png", "images/makas.png", "images/kagit.png"]; // resim dizisi
var rakip=0;
var ekran2 = document.querySelector('.popup');
var winner=0;

function random() {
    function changeImage() {
      var randomIndex = Math.floor(Math.random() * imageArray.length); // rastgele bir indeks
      var imageSource = imageArray[randomIndex]; // rastgele bir resim kaynağı
      image.src = imageSource; // resim kaynağını değiştir
      switch (imageSource) {
        case "images/DAŞ.png":
          rakip = 1;
          console.log(rakip);
          break;
        case "images/kagit.png":
          rakip = 2;
          console.log(rakip);
          break;
        case "images/makas.png":
          rakip = 3;
          console.log(rakip);
          break;
      }
    }
  
    var timer = setInterval(changeImage, 150); // her saniye changeImage fonksiyonunu çalıştır
  
    setTimeout(function() {
      clearInterval(timer); // 3 saniye sonra zamanlayıcıyı durdur
      sonuc();
      if(winner==3){
       ustyazi.textContent="•KAZANDIN•";
       ustyazi.style.color='#00ff00';
      }
      else if(winner==2){
        ustyazi.textContent="•KAYBETTİN•";
        ustyazi.style.color='#ff0000';
       }
       else if(winner==1){
        ustyazi.textContent="•BERABERE•"
        ustyazi.style.color='#ffffff';
       }

    }, 3000);
   
  }

function sonuc(){
   
    //OYUNCU TAŞI SEÇTİ
    if(secilen==1 && rakip==1){//taş-taş durumu
        winner=1;//berabere
        console.log('berabere');
    }
    else if(secilen==1 && rakip==2){//taş-kağıt
        winner=2;//kaybettin
        console.log('kaybettin');
    }
    else if(secilen==1 && rakip==3){//taş-makas
        winner=3//kazandın
        console.log('kazandın');
    }

    //OYUNCU KAĞIDI SEÇTİ
    if(secilen==2 && rakip==1){//kağıt-taş durumu
        winner=3//kazandın
        console.log('kazandın');
    }
    else if(secilen==2 && rakip==2){//kağıt-kağıt
        winner=1;//berabere
        console.log('berabere');
    }
    else if(secilen==2 && rakip==3){//kağıt-makas
        winner=2;//kaybettin
        console.log('kaybettin');
    }

    //OYUNCU MAKASI SEÇTİ
    if(secilen==3 && rakip==1){//makas-taş durumu
        winner=2;//kaybettin
        console.log('kaybettin');
    }
    else if(secilen==3 && rakip==2){//makas-kağıt
        winner=3//kazandın
        console.log('kazandın');
    }
    else if(secilen==3 && rakip==3){//makas-makas
        winner=1;//berabere
        console.log('berabere');
    }
}

leftBox.addEventListener('click', () => {
    secilen=1;
    var image = document.getElementById("myImage"); // görsel elementini seç
    image.src = "images/DAŞ.png"; // görsel kaynağını değiştir
    console.log(leftBox.querySelector('.box-title').textContent+' seçildi.'+'('+secilen+')');
    leftBox.classList.add('clicked');
    setTimeout(() => {
    leftBox.classList.remove('clicked');
    }, 100);
   
    setTimeout(() =>{
    ekran2.style.zIndex ='2';
    }, 150);
    random();
    
});

middleBox.addEventListener('click', () => {
    secilen=2;
    var image = document.getElementById("myImage"); // görsel elementini seç
    image.src = "images/kagit.png"; // görsel kaynağını değiştir
    console.log(middleBox.querySelector('.box-title').textContent+' seçildi.'+'('+secilen+')');
    middleBox.classList.add('clicked');
    setTimeout(() => {
    middleBox.classList.remove('clicked');
    }, 100);
    setTimeout(() =>{
    ekran2.style.zIndex ='2';
    }, 150);
    random();
});

rightBox.addEventListener('click', () => {
    secilen=3;
    var image = document.getElementById("myImage"); // görsel elementini seç
    image.src = "images/makas.png"; // görsel kaynağını değiştir
    console.log(rightBox.querySelector('.box-title').textContent+' seçildi.'+'('+secilen+')');
    rightBox.classList.add('clicked');
    setTimeout(() => {
    rightBox.classList.remove('clicked');
    }, 100);
    setTimeout(() =>{
    ekran2.style.zIndex ='2';
    }, 150);
    random();
  
});
}
start();
