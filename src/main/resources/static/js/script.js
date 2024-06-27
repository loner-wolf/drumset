// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36", '#FFFFFF' ,'F2F2F2'];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()*1.5}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12,
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` },
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out",
    }
  );
});

//Accessing each Button using their Id
var Qbutton = document.getElementById("BTNq");
var Wbutton = document.getElementById("BTNw");
var Ebutton = document.getElementById("BTNe");
var Rbutton = document.getElementById("BTNr");
var Tbutton = document.getElementById("BTNt");
var Ybutton = document.getElementById("BTNy");
var Ubutton = document.getElementById("BTNu");
var Ibutton = document.getElementById("BTNi");
var Obutton = document.getElementById("BTNo");
var Pbutton = document.getElementById("BTNp");
var Abutton = document.getElementById("BTNa");
var Sbutton = document.getElementById("BTNs");
var Dbutton = document.getElementById("BTNd");
var Fbutton = document.getElementById("BTNf");
var Gbutton = document.getElementById("BTNg");
var Hbutton = document.getElementById("BTNh");
var Jbutton = document.getElementById("BTNj");
var Kbutton = document.getElementById("BTNk");
var Lbutton = document.getElementById("BTNl");
var Zbutton = document.getElementById("BTNz");
var Xbutton = document.getElementById("BTNx");
var Cbutton = document.getElementById("BTNc");
var Vbutton = document.getElementById("BTNv");
var Bbutton = document.getElementById("BTNb");
var Nbutton = document.getElementById("BTNn");
var Mbutton = document.getElementById("BTNm");

// var allButton=document.getElementById('BTNo');
// var allButton=document.getElementsByClassName('keyBTN1');
//Accessing the first button using their Class name and since getElementsByClassName is returning collection of object therefore using index [0] for first element.
var allButton = document.getElementsByClassName("keyBTN")[0];

//Accessing each audio files using their id.
var Qmusic = document.getElementById("Q");
var Wmusic = document.getElementById("W");
var Emusic = document.getElementById("E");
var Rmusic = document.getElementById("R");
var Tmusic = document.getElementById("T");
var Ymusic = document.getElementById("Y");
var Umusic = document.getElementById("U");
var Imusic = document.getElementById("I");
var Omusic = document.getElementById("O");
var Pmusic = document.getElementById("P");
var Amusic = document.getElementById("A");
var Smusic = document.getElementById("S");
var Dmusic = document.getElementById("D");
var Fmusic = document.getElementById("F");
var Gmusic = document.getElementById("G");
var Hmusic = document.getElementById("H");
var Jmusic = document.getElementById("J");
var Kmusic = document.getElementById("K");
var Lmusic = document.getElementById("L");
var Zmusic = document.getElementById("Z");
var Xmusic = document.getElementById("X");
var Cmusic = document.getElementById("C");
var Vmusic = document.getElementById("V");
var Bmusic = document.getElementById("B");
var Nmusic = document.getElementById("N");
var Mmusic = document.getElementById("M");

function onClickFunct(Button, Music) {
  Music.play();

  Button.style.border = "5px dashed blue";
  Button.style.width = Button.style.width.substring(0,2)+'px';
  Button.style.height = Button.style.height.substring(0, 2) + "px";
  Button.style.fontSize = Button.style.fontSize.substring(0, 2) + "px";
}
function ofClickFunction(Button) {
  Button.style.border = "3px dashed red";
  Button.style.width = Button.style.width.substring(0, 2) - "px";
  Button.style.height = Button.style.height.substring(0, 2) - "px";
  Button.style.fontSize = Button.style.fontSize.substring(0, 2) - "px";
}

// Qbutton.accessKey="W";
// const Qmusic =new Audio('/Sounds/boom.mp3');
// function playSound() {
//     Qmusic.src='//Sounds/boom.mp3'
//     Qmusic.play();
// }

//adding event listener for only those keys which are shown on browser(since there was only 9 audio files so I added only 9 buttons) with functionality of audio and change background color to differentiate which button is being pressed.
document.body.addEventListener("keydown", function (e) {
  // var keyCharacter=event.key;//This gives sensitive case character
  var keyCharacter = String.fromCharCode(e.keyCode);
  // Qbutton.style.border='5px dashed blue';
  switch (keyCharacter) {
    case "Q":
      Qmusic.play();
      Qbutton.style.border = "5px dashed blue";
      Qbutton.style.width = "80px";
      Qbutton.style.height = "80px";
      Qbutton.style.fontSize = "45px";
      // Qmusic.autoplay='true';
      // Qmusic.autoplay;
      //console.log(Qmusic);
      break;
    case "W":
      Wmusic.play();
      Wbutton.style.border = "5px dashed blue";
      Wbutton.style.width = "80px";
      W;
      Wbutton.style.height = "80px";
      Wbutton.style.fontSize = "45px";
      break;
    case "E":
      Emusic.play();
      Ebutton.style.border = "5px dashed blue";
      Ebutton.style.width = "80px";
      Ebutton.style.height = "80px";
      Ebutton.style.fontSize = "45px";
      break;
    case "R":
      Rmusic.play();
      Rbutton.style.border = "5px dashed blue";
      Rbutton.style.width = "80px";
      Rbutton.style.height = "80px";
      Rbutton.style.fontSize = "45px";
      break;
    case "T":
      Tmusic.play();
      Tbutton.style.border = "5px dashed blue";
      Tbutton.style.width = "80px";
      Tbutton.style.height = "80px";
      Tbutton.style.fontSize = "45px";
      break;
    case "Y":
      Ymusic.play();
      Ybutton.style.border = "5px dashed blue";
      Ybutton.style.width = "80px";
      Ybutton.style.height = "80px";
      Ybutton.style.fontSize = "45px";
      break;
    case "U":
      Umusic.play();
      Ubutton.style.border = "5px dashed blue";
      Ubutton.style.width = "80px";
      Ubutton.style.height = "80px";
      Ubutton.style.fontSize = "45px";
      break;
    case "I":
      Imusic.play();
      Ibutton.style.border = "5px dashed blue";
      Ibutton.style.width = "80px";
      Ibutton.style.height = "80px";
      Ibutton.style.fontSize = "45px";
      break;
    case "O":
      Omusic.play();
      Obutton.style.border = "5px dashed blue";
      Obutton.style.width = "80px";
      Obutton.style.height = "80px";
      Obutton.style.fontSize = "45px";
      break;
    case "P":
      Pmusic.play();
      Pbutton.style.border = "5px dashed blue";
      Pbutton.style.width = "80px";
      Pbutton.style.height = "80px";
      Pbutton.style.fontSize = "45px";
      break;
    case "A":
      Amusic.play();
      Abutton.style.border = "5px dashed blue";
      Abutton.style.width = "80px";
      Abutton.style.height = "80px";
      Abutton.style.fontSize = "45px";
      break;
    case "S":
      Smusic.play();
      Sbutton.style.border = "5px dashed blue";
      Sbutton.style.width = "80px";
      Sbutton.style.height = "80px";
      Sbutton.style.fontSize = "45px";
      break;
    case "D":
      Dmusic.play();
      Dbutton.style.border = "5px dashed blue";
      Dbutton.style.width = "80px";
      Dbutton.style.height = "80px";
      Dbutton.style.fontSize = "45px";
      break;
    case "F":
      Fmusic.play();
      Fbutton.style.border = "5px dashed blue";
      Fbutton.style.width = "80px";
      Fbutton.style.height = "80px";
      Fbutton.style.fontSize = "45px";
      break;
    case "G":
      Gmusic.play();
      Gbutton.style.border = "5px dashed blue";
      Gbutton.style.width = "80px";
      Gbutton.style.height = "80px";
      Gbutton.style.fontSize = "45px";
      break;
    case "H":
      Hmusic.play();
      Hbutton.style.border = "5px dashed blue";
      Hbutton.style.width = "80px";
      Hbutton.style.height = "80px";
      Hbutton.style.fontSize = "45px";
      break;
    case "J":
      Jmusic.play();
      Jbutton.style.border = "5px dashed blue";
      Jbutton.style.width = "80px";
      Jbutton.style.height = "80px";
      Jbutton.style.fontSize = "45px";
      break;
    case "K":
      Kmusic.play();
      Kbutton.style.border = "5px dashed blue";
      Kbutton.style.width = "80px";
      Kbutton.style.height = "80px";
      Kbutton.style.fontSize = "45px";
      break;
    case "L":
      Lmusic.play();
      Lbutton.style.border = "5px dashed blue";
      Lbutton.style.width = "80px";
      Lbutton.style.height = "80px";
      Lbutton.style.fontSize = "45px";
      break;
    case "Z":
      Zmusic.play();
      Zbutton.style.border = "5px dashed blue";
      Zbutton.style.width = "80px";
      Zbutton.style.height = "80px";
      Zbutton.style.fontSize = "45px";
      break;
    case "X":
      Xmusic.play();
      Xbutton.style.border = "5px dashed blue";
      Xbutton.style.width = "80px";
      Xbutton.style.height = "80px";
      Xbutton.style.fontSize = "45px";
      break;
    case "C":
      Cmusic.play();
      Cbutton.style.border = "5px dashed blue";
      Cbutton.style.width = "80px";
      Cbutton.style.height = "80px";
      Cbutton.style.fontSize = "45px";
      break;
    case "V":
      Vmusic.play();
      Vbutton.style.border = "5px dashed blue";
      Vbutton.style.width = "80px";
      Vbutton.style.height = "80px";
      Vbutton.style.fontSize = "45px";
      break;
    case "B":
      Bmusic.play();
      Bbutton.style.border = "5px dashed blue";
      Bbutton.style.width = "80px";
      Bbutton.style.height = "80px";
      Bbutton.style.fontSize = "45px";
      break;
    case "N":
      Nmusic.play();
      Nbutton.style.border = "5px dashed blue";
      Nbutton.style.width = "80px";
      Nbutton.style.height = "80px";
      Nbutton.style.fontSize = "45px";
      break;
    case "M":
      Mmusic.play();
      Mbutton.style.border = "5px dashed blue";
      Mbutton.style.width = "80px";
      Mbutton.style.height = "80px";
      Mbutton.style.fontSize = "45px";
      break;
    default:
      alert("Kindly press amongst shown Keyboard buttons on screens.");
      console.log(e.key);
  }
});

document.body.addEventListener("keypress", function (e) {
  // var keyCharacter=event.key;//This gives sensitive case character
  var keyCharacter = String.fromCharCode(e.keyCode);
  // Qbutton.style.border='5px dashed blue';
  switch (keyCharacter) {
    case "Q":
      Qmusic.play();

      break;
    case "W":
      Wmusic.play();

      break;
    case "E":
      Emusic.play();
      break;
    case "R":
      Rmusic.play();
      break;
    case "T":
      Tmusic.play();
      break;
    case "Y":
      Ymusic.play();
      break;
    case "U":
      Umusic.play();
      break;
    case "I":
      Imusic.play();
      break;
    case "O":
      Omusic.play();
      break;
    case "P":
      Pmusic.play();
      break;
    case "A":
      Amusic.play();
      break;
    case "S":
      Smusic.play();
      break;
    case "D":
      Dmusic.play();
      break;
    case "F":
      Fmusic.play();
      break;
    case "G":
      Gmusic.play();
      break;
    case "H":
      Hmusic.play();
      break;
    case "J":
      Jmusic.play();
      break;
    case "K":
      Kmusic.play();
      break;
    case "L":
      Lmusic.play();
      break;
    case "Z":
      Zmusic.play();
      break;
    case "X":
      Xmusic.play();
      break;
    case "C":
      Cmusic.play();
      break;
    case "V":
      Vmusic.play();
      break;
    case "B":
      Bmusic.play();
      break;
    case "N":
      Nmusic.play();
      break;
    case "M":
      Mmusic.play();
      break;
  }
});

//adding the event listener KeyUp so that the background colour gets reset.
document.body.addEventListener("keyup", function (e) {
  var keyCharacter = String.fromCharCode(e.keyCode);
  switch (keyCharacter) {
    case "Q":
      Qbutton.style.border = "3px dashed red";
      Qbutton.style.width = "75px";
      Qbutton.style.height = "75px";
      Qbutton.style.fontSize = "40px";
      break;
    case "W":
      Wbutton.style.border = "3px dashed red";
      Wbutton.style.width = "75px";
      Wbutton.style.height = "75px";
      Wbutton.style.fontSize = "40px";
      break;
    case "E":
      Ebutton.style.border = "3px dashed red";
      Ebutton.style.width = "75px";
      Ebutton.style.height = "75px";
      Ebutton.style.fontSize = "40px";
      break;
    case "R":
      Rbutton.style.border = "3px dashed red";
      Rbutton.style.width = "75px";
      Rbutton.style.height = "75px";
      Rbutton.style.fontSize = "40px";
      break;
    case "T":
      Tbutton.style.border = "3px dashed red";
      Tbutton.style.width = "75px";
      Tbutton.style.height = "75px";
      Tbutton.style.fontSize = "40px";
      break;
    case "Y":
      Ybutton.style.border = "3px dashed red";
      Ybutton.style.width = "75px";
      Ybutton.style.height = "75px";
      Ybutton.style.fontSize = "40px";
      break;
    case "U":
      Ubutton.style.border = "3px dashed red";
      Ubutton.style.width = "75px";
      Ubutton.style.height = "75px";
      Ubutton.style.fontSize = "40px";
      break;
    case "I":
      Ibutton.style.border = "3px dashed red";
      Ibutton.style.width = "75px";
      Ibutton.style.height = "75px";
      Ibutton.style.fontSize = "40px";
      break;
    case "O":
      Obutton.style.border = "3px dashed red";
      Obutton.style.width = "75px";
      Obutton.style.height = "75px";
      Obutton.style.fontSize = "40px";
      break;
    case "P":
      Pbutton.style.border = "3px dashed red";
      Pbutton.style.width = "75px";
      Pbutton.style.height = "75px";
      Pbutton.style.fontSize = "40px";
      break;
    case "A":
      Abutton.style.border = "3px dashed red";
      Abutton.style.width = "75px";
      Abutton.style.height = "75px";
      Abutton.style.fontSize = "40px";
      break;
    case "S":
      Sbutton.style.border = "3px dashed red";
      Sbutton.style.width = "75px";
      Sbutton.style.height = "75px";
      Sbutton.style.fontSize = "40px";
      break;
    case "D":
      Dbutton.style.border = "3px dashed red";
      Dbutton.style.width = "75px";
      Dbutton.style.height = "75px";
      Dbutton.style.fontSize = "40px";
      break;
    case "F":
      Fbutton.style.border = "3px dashed red";
      Fbutton.style.width = "75px";
      Fbutton.style.height = "75px";
      Fbutton.style.fontSize = "40px";
      break;
    case "G":
      Gbutton.style.border = "3px dashed red";
      Gbutton.style.width = "75px";
      Gbutton.style.height = "75px";
      Gbutton.style.fontSize = "40px";
      break;
    case "H":
      Hbutton.style.border = "3px dashed red";
      Hbutton.style.width = "75px";
      Hbutton.style.height = "75px";
      Hbutton.style.fontSize = "40px";
      break;
    case "J":
      Jbutton.style.border = "3px dashed red";
      Jbutton.style.width = "75px";
      Jbutton.style.height = "75px";
      Jbutton.style.fontSize = "40px";
      break;
    case "K":
      Kbutton.style.border = "3px dashed red";
      Kbutton.style.width = "75px";
      Kbutton.style.height = "75px";
      Kbutton.style.fontSize = "40px";
      break;
    case "L":
      Lbutton.style.border = "3px dashed red";
      Lbutton.style.width = "75px";
      Lbutton.style.height = "75px";
      Lbutton.style.fontSize = "40px";
      break;
    case "Z":
      Zbutton.style.border = "3px dashed red";
      Zbutton.style.width = "75px";
      Zbutton.style.height = "75px";
      Zbutton.style.fontSize = "40px";
      break;
    case "X":
      Xbutton.style.border = "3px dashed red";
      Xbutton.style.width = "75px";
      Xbutton.style.height = "75px";
      Xbutton.style.fontSize = "40px";
      break;
    case "C":
      Cbutton.style.border = "3px dashed red";
      Cbutton.style.width = "75px";
      Cbutton.style.height = "75px";
      Cbutton.style.fontSize = "40px";
      break;
    case "V":
      Vbutton.style.border = "3px dashed red";
      Vbutton.style.width = "75px";
      Vbutton.style.height = "75px";
      Vbutton.style.fontSize = "40px";
      break;
    case "B":
      Bbutton.style.border = "3px dashed red";
      Bbutton.style.width = "75px";
      Bbutton.style.height = "75px";
      Bbutton.style.fontSize = "40px";
      break;
    case "N":
      Nbutton.style.border = "3px dashed red";
      Nbutton.style.width = "75px";
      Nbutton.style.height = "75px";
      Nbutton.style.fontSize = "40px";
      break;
    case "M":
      Mbutton.style.border = "3px dashed red";
      Mbutton.style.width = "75px";
      Mbutton.style.height = "75px";
      Mbutton.style.fontSize = "40px";
      break;
    default:
  }
});

Qbutton.addEventListener("mousedown", function () {
  onClickFunct(Qbutton, Qmusic);
});
Qbutton.addEventListener("mouseup", function () {
  ofClickFunction(Qbutton, Qmusic);
});

Wbutton.addEventListener("mousedown", function () {
  onClickFunct(Wbutton, Wmusic);
});
Wbutton.addEventListener("mouseup", function () {
  ofClickFunction(Wbutton, Wmusic);
});

Ebutton.addEventListener("mousedown", function () {
  onClickFunct(Ebutton, Emusic);
});
Ebutton.addEventListener("mouseup", function () {
  ofClickFunction(Ebutton, Emusic);
});

Rbutton.addEventListener("mousedown", function () {
  onClickFunct(Rbutton, Rmusic);
});
Rbutton.addEventListener("mouseup", function () {
  ofClickFunction(Rbutton, Rmusic);
});

Tbutton.addEventListener("mousedown", function () {
  onClickFunct(Tbutton, Tmusic);
});
Tbutton.addEventListener("mouseup", function () {
  ofClickFunction(Tbutton, Tmusic);
});

Ybutton.addEventListener("mousedown", function () {
  onClickFunct(Ybutton, Ymusic);
});
Ybutton.addEventListener("mouseup", function () {
  ofClickFunction(Ybutton, Ymusic);
});

Ubutton.addEventListener("mousedown", function () {
  onClickFunct(Ubutton, Umusic);
});
Ubutton.addEventListener("mouseup", function () {
  ofClickFunction(Ubutton, Umusic);
});

Ibutton.addEventListener("mousedown", function () {
  onClickFunct(Ibutton, Imusic);
});
Ibutton.addEventListener("mouseup", function () {
  ofClickFunction(Ibutton, Imusic);
});

Obutton.addEventListener("mousedown", function () {
  onClickFunct(Obutton, Omusic);
});
Obutton.addEventListener("mouseup", function () {
  ofClickFunction(Obutton, Omusic);
});

Pbutton.addEventListener("mousedown", function () {
  onClickFunct(Pbutton, Pmusic);
});
Pbutton.addEventListener("mouseup", function () {
  ofClickFunction(Pbutton, Pmusic);
});

Abutton.addEventListener("mousedown", function () {
  onClickFunct(Abutton, Amusic);
});
Abutton.addEventListener("mouseup", function () {
  ofClickFunction(Abutton, Amusic);
});

Sbutton.addEventListener("mousedown", function () {
  onClickFunct(Sbutton, Smusic);
});
Sbutton.addEventListener("mouseup", function () {
  ofClickFunction(Sbutton, Smusic);
});

Dbutton.addEventListener("mousedown", function () {
  onClickFunct(Dbutton, Dmusic);
});
Dbutton.addEventListener("mouseup", function () {
  ofClickFunction(Dbutton, Dmusic);
});

Fbutton.addEventListener("mousedown", function () {
  onClickFunct(Fbutton, Fmusic);
});
Fbutton.addEventListener("mouseup", function () {
  ofClickFunction(Fbutton, Fmusic);
});
Gbutton.addEventListener("mousedown", function () {
  onClickFunct(Gbutton, Gmusic);
});
Gbutton.addEventListener("mouseup", function () {
  ofClickFunction(Gbutton, Gmusic);
});

Hbutton.addEventListener("mousedown", function () {
  onClickFunct(Hbutton, Hmusic);
});
Hbutton.addEventListener("mouseup", function () {
  ofClickFunction(Hbutton, Hmusic);
});

Jbutton.addEventListener("mousedown", function () {
  onClickFunct(Jbutton, Jmusic);
});
Jbutton.addEventListener("mouseup", function () {
  ofClickFunction(Jbutton, Jmusic);
});

Kbutton.addEventListener("mousedown", function () {
  onClickFunct(Kbutton, Kmusic);
});
Kbutton.addEventListener("mouseup", function () {
  ofClickFunction(Kbutton, Kmusic);
});

Lbutton.addEventListener("mousedown", function () {
  onClickFunct(Lbutton, Lmusic);
});
Lbutton.addEventListener("mouseup", function () {
  ofClickFunction(Lbutton, Lmusic);
});

Zbutton.addEventListener("mousedown", function () {
  onClickFunct(Zbutton, Zmusic);
});
Zbutton.addEventListener("mouseup", function () {
  ofClickFunction(Zbutton, Zmusic);
});

Xbutton.addEventListener("mousedown", function () {
  onClickFunct(Xbutton, Xmusic);
});
Xbutton.addEventListener("mouseup", function () {
  ofClickFunction(Xbutton, Xmusic);
});

Cbutton.addEventListener("mousedown", function () {
  onClickFunct(Cbutton, Cmusic);
});
Cbutton.addEventListener("mouseup", function () {
  ofClickFunction(Cbutton, Cmusic);
});

Vbutton.addEventListener("mousedown", function () {
  onClickFunct(Vbutton, Vmusic);
});
Vbutton.addEventListener("mouseup", function () {
  ofClickFunction(Vbutton, Vmusic);
});

Bbutton.addEventListener("mousedown", function () {
  onClickFunct(Bbutton, Bmusic);
});
Bbutton.addEventListener("mouseup", function () {
  ofClickFunction(Bbutton, Bmusic);
});

Nbutton.addEventListener("mousedown", function () {
  onClickFunct(Nbutton, Nmusic);
});
Nbutton.addEventListener("mouseup", function () {
  ofClickFunction(Nbutton, Nmusic);
});

Mbutton.addEventListener("mousedown", function () {
  onClickFunct(Mbutton, Mmusic);
});
Mbutton.addEventListener("mouseup", function () {
  ofClickFunction(Mbutton, Mmusic);
});
