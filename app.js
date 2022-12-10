/**
 * Audio
 */

function select() {
  var audio = document.getElementById("click");
  audio.play();
}

function goaudio() {
  var audio = document.getElementById("go");
  audio.play();
}




/**
 * Image Slider Mobile
 */

var playertagback  =document.getElementById("ptag")
var playertagfoward = document.getElementById("ptag")
var imageback = document.getElementById("playerone");
var imageright = document.getElementById("playerone");
const radios = document.getElementsByClassName("radio");
var checked_id = 1;

function masterleft() {
  left();
  leftimg();
}

function left() {
  if (checked_id > 1) {
    checked_id -= 1;
    document.getElementById("radio-" + checked_id).checked = true;
  }
}

function leftimg() {
  if (imageback.src.match("/assets/carter.png")) {
    imageback.src = "/assets/joey.png";
    playertagback.textContent = "P1: Joey"
  } else if (imageback.src.match("/assets/joey.png")) {
    imageback.src = "/assets/jordan.png";
    playertagback.textContent = "P1: Jordan"
  } else if (imageback.src.match("/assets/jordan.png")) {
    imageback.src = "/assets/joshua.png"
    playertagback.textContent = "P1: Josh"
  }
}

function masterright() {
  right();
  rightimg();
}

function right() {
  if (checked_id < radios.length) {
    checked_id += 1;
    document.getElementById("radio-" + checked_id).checked = true;
  }
}

function rightimg() {
  if (imageright.src.match("/assets/joshua.png")) {
    imageright.src = "/assets/jordan.png";
    playertagfoward.textContent = "P1: Jordan"
  } else if (imageright.src.match("/assets/jordan.png")) {
    imageright.src = "/assets/joey.png";
    playertagfoward.textContent = "P1: Joey"
  } else if (imageright.src.match("/assets/joey.png")) {
    imageright.src = "/assets/carter.png";
    playertagfoward.textContent = "P1: Carter"
  } else {
    imageright.src = "/assets/carter.png";
    playertagfoward.textContent = "P1: Carter"
  }
}

/**
 * Image Slider Desktop
 */

function joey() {
  var joey = document.getElementById("playerone");
  var joeytxt = document.getElementById("ptag");
  var joeystattop = document.getElementById("stattop");
  var joeystatbtm = document.getElementById("statbtm");
  var joeyabil = document.getElementById("abilityimgjs");
  if (
    joey.src.match("/assets/carter.png") ||
    joey.src.match("/assets/joshua.png") ||
    joey.src.match("/assets/jordan.png")
  ) {
    joey.src = "/assets/joey.png";
    joeytxt.textContent = "P1: Joey";
    checked_id = 3;
    document.getElementById("radio-3").checked = true;
    joeystattop.innerHTML = "LVL: 15\r\nHP: 60\r\nMP: 50\r\n";
    joeystattop.setAttribute('style', 'white-space: pre;');
    joeystatbtm.innerHTML = "STR: 33\r\nAGI: 67\r\nVIT: 39\r\nINT: 77\r\nATK: 61\r\nDEF: 64";
    joeystatbtm.setAttribute('style', 'white-space: pre;');
    joeyabil.src = "/assets/diamond.svg";
  }
}

function jordan() {
  var jordan = document.getElementById("playerone");
  var jordantxt = document.getElementById("ptag");
  var jordanstattop = document.getElementById("stattop");
  var jordanstatbtm = document.getElementById("statbtm");
  var jordanabil = document.getElementById("abilityimgjs");
  if (
    jordan.src.match("/assets/joey.png") ||
    jordan.src.match("/assets/carter.png") ||
    jordan.src.match("/assets/joshua.png")
  ) {
    jordan.src = "/assets/jordan.png";
    jordantxt.textContent = "P1: Jordan"
    checked_id = 2;
    document.getElementById("radio-2").checked = true;
    jordanstattop.innerHTML = "LVL: 11\r\nHP: 44\r\nMP: 71\r\n";
    jordanstattop.setAttribute('style', 'white-space: pre;');
    jordanstatbtm.innerHTML = "STR: 70\r\nAGI: 33\r\nVIT: 44\r\nINT: 67\r\nATK: 51\r\nDEF: 50";
    jordanstatbtm.setAttribute('style', 'white-space: pre;');
    jordanabil.src = "/assets/Meat.svg";
  }
}

function joshua() {
  var joshua = document.getElementById("playerone");
  var joshtxt = document.getElementById("ptag");
  var joshstattop = document.getElementById("stattop");
  var joshstatbtm = document.getElementById("statbtm");
  var joshabil = document.getElementById("abilityimgjs");
  if (
    joshua.src.match("/assets/joey.png") ||
    joshua.src.match("/assets/jordan.png") ||
    joshua.src.match("/assets/carter.png")
  ) {
    joshua.src = "/assets/joshua.png";
    joshtxt.textContent = "P1: Josh"
    checked_id = 1;
    document.getElementById("radio-1").checked = true;
    joshstattop.innerHTML = "LVL: 10\r\nHP: 65\r\nMP: 20\r\n";
    joshstattop.setAttribute('style', 'white-space: pre;');
    joshstatbtm.innerHTML = "STR: 25\r\nAGI: 37\r\nVIT: 37\r\nINT: 70\r\nATK: 55\r\nDEF: 70";
    joshstatbtm.setAttribute('style', 'white-space: pre;');
    joshabil.src = "/assets/Asset 1.svg"
  }
}

function carter() {
  var carter = document.getElementById("playerone");
  var cartertxt = document.getElementById("ptag");
  var carterstattop = document.getElementById("stattop");
  var carterstatbtm = document.getElementById("statbtm");
  var carterabil = document.getElementById("abilityimgjs")
  if (
    carter.src.match("/assets/jordan.png") ||
    carter.src.match("/assets/joey.png") ||
    carter.src.match("/assets/joshua.png")
  ) {
    carter.src = "/assets/carter.png";
    cartertxt.textContent = "P1: Carter"
    checked_id = 4;
    document.getElementById("radio-4").checked = true;
    carterstattop.innerHTML = "LVL: 9\r\nHP: 100\r\nMP: 0\r\n";
    carterstattop.setAttribute('style', 'white-space: pre;');
    carterstatbtm.innerHTML = "STR: 32\r\nAGI: 34\r\nVIT: 23\r\nINT: 60\r\nATK: 40\r\nDEF: 10";
    carterstatbtm.setAttribute('style', 'white-space: pre;');
    carterabil.src = "/assets/bomb.svg"
  }
}


/**
 * Fight Btn (send to personal)
 */

var sending = document.getElementById("playerone")

function sendto() {
  if (sending.src.match("/assets/joshua.png")) {
    setTimeout(function() { location.href = "/PagesJosh/index.html" }, 1000 );
  } else if (sending.src.match("/assets/jordan.png")) {
    setTimeout(function() { location.href = "/PageJordan1/jordan.html" }, 1000 );
  } else if (sending.src.match("/assets/joey.png")) {
    setTimeout(function() { location.href = "/joey/joey.html" }, 1000 );
  } else if (sending.src.match("/assets/carter.png")) {
    setTimeout(function() { location.href = "/carterpages/index.html" }, 1000 );
  }
}

