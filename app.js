/**
 * MUSIC
 */

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
  var joeytxt = document.getElementById("ptag")
  if (
    joey.src.match("/assets/carter.png") ||
    joey.src.match("/assets/joshua.png") ||
    joey.src.match("/assets/jordan.png")
  ) {
    joey.src = "/assets/joey.png";
    joeytxt.textContent = "P1: Joey"
    checked_id = 3;
    document.getElementById("radio-3").checked = true;

  }
}

function jordan() {
  var jordan = document.getElementById("playerone");
  var jordantxt = document.getElementById("ptag")
  if (
    jordan.src.match("/assets/joey.png") ||
    jordan.src.match("/assets/carter.png") ||
    jordan.src.match("/assets/joshua.png")
  ) {
    jordan.src = "/assets/jordan.png";
    jordantxt.textContent = "P1: Jordan"
    checked_id = 2;
    document.getElementById("radio-2").checked = true;
  }
}

function joshua() {
  var joshua = document.getElementById("playerone");
  var joshtxt = document.getElementById("ptag")
  if (
    joshua.src.match("/assets/joey.png") ||
    joshua.src.match("/assets/jordan.png") ||
    joshua.src.match("/assets/carter.png")
  ) {
    joshua.src = "/assets/joshua.png";
    joshtxt.textContent = "P1: Josh"
    checked_id = 1;
    document.getElementById("radio-1").checked = true;
  }
}

function carter() {
  var carter = document.getElementById("playerone");
  var cartertxt = document.getElementById("ptag")
  if (
    carter.src.match("/assets/jordan.png") ||
    carter.src.match("/assets/joey.png") ||
    carter.src.match("/assets/joshua.png")
  ) {
    carter.src = "/assets/carter.png";
    cartertxt.textContent = "P1: Carter"
    checked_id = 4;
    document.getElementById("radio-4").checked = true;
  }
}


/**
 * Fight Btn (send to personal)
 */

var sending = document.getElementById("playerone")

function sendto() {
  if (sending.src.match("/assets/joshua.png")) {
    location.href = "/PagesJosh/index.html"
  } else if (sending.src.match("/assets/jordan.png")) {
    location.href = "/PageJordan1/index.html"
  } else if (sending.src.match("/assets/joey.png")) {
    location.href = "https://store.steampowered.com/"
  } else if (sending.src.match("/assets/carter.png")) {
    location.href = "/carterpages/index.html"
  }
}



/*
*Border on hover
 */

var joeyBox = document.getElementById("joeybox")

function borderbox() {
  joeyBox.style.border = "border: 5px, white"
}
