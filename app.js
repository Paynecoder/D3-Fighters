/**
 * Image Slider Mobile
 */

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
  } else if (imageback.src.match("/assets/joey.png")) {
    imageback.src = "/assets/jordan.png";
  } else if (imageback.src.match("/assets/jordan.png")) {
    imageback.src = "/assets/joshua.png"
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
  } else if (imageright.src.match("/assets/jordan.png")) {
    imageright.src = "/assets/joey.png";
  } else if (imageright.src.match("/assets/joey.png")) {
    imageright.src = "/assets/carter.png";
  } else {
    imageright.src = "/assets/carter.png";
  }
}

/**
 * Image Slider Desktop
 */

function joey() {
  var joey = document.getElementById("playerone");
  if (
    joey.src.match("/assets/carter.png") ||
    joey.src.match("/assets/joshua.png") ||
    joey.src.match("/assets/jordan.png")
  ) {
    joey.src = "/assets/joey.png";
  }
}

function jordan() {
  var jordan = document.getElementById("playerone");
  if (
    jordan.src.match("/assets/joey.png") ||
    jordan.src.match("/assets/carter.png") ||
    jordan.src.match("/assets/joshua.png")
  ) {
    jordan.src = "/assets/jordan.png";
  }
}

function joshua() {
  var joshua = document.getElementById("playerone");
  if (
    joshua.src.match("/assets/joey.png") ||
    joshua.src.match("/assets/jordan.png") ||
    joshua.src.match("/assets/carter.png")
  ) {
    joshua.src = "/assets/joshua.png";
  }
}

function carter() {
  var carter = document.getElementById("playerone");
  if (
    carter.src.match("/assets/jordan.png") ||
    carter.src.match("/assets/joey.png") ||
    carter.src.match("/assets/joshua.png")
  ) {
    carter.src = "/assets/carter.png";
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

/**
 * PLAYER NAME
 * 
 */