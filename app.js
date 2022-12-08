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
  if (imageback.src.match("/assets/blastoise.jpg")) {
    imageback.src = "/assets/venusaur.jpg";
  } else if (imageback.src.match("/assets/venusaur.jpg")) {
    imageback.src = "/assets/charizard.webp";
  } else if (imageback.src.match("/assets/charizard.webp")) {
    imageback.src = "/assets/raichu.jpg"
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
  if (imageright.src.match("/assets/raichu.jpg")) {
    imageright.src = "/assets/charizard.webp";
  } else if (imageright.src.match("/assets/charizard.webp")) {
    imageright.src = "/assets/venusaur.jpg";
  } else if (imageright.src.match("/assets/venusaur.jpg")) {
    imageright.src = "/assets/blastoise.jpg";
  } else {
    imageright.src = "/assets/blastoise.jpg";
  }
}

/**
 * Image Slider Desktop
 */

function joey() {
  var joey = document.getElementById("playerone");
  if (
    joey.src.match("/assets/blastoise.jpg") ||
    joey.src.match("/assets/raichu.jpg") ||
    joey.src.match("/assets/charizard.webp")
  ) {
    joey.src = "/assets/venusaur.jpg";
  }
}

function jordan() {
  var jordan = document.getElementById("playerone");
  if (
    jordan.src.match("/assets/venusaur.jpg") ||
    jordan.src.match("/assets/blastoise.jpg") ||
    jordan.src.match("/assets/raichu.jpg")
  ) {
    jordan.src = "/assets/charizard.webp";
  }
}

function joshua() {
  var joshua = document.getElementById("playerone");
  if (
    joshua.src.match("/assets/venusaur.jpg") ||
    joshua.src.match("/assets/charizard.webp") ||
    joshua.src.match("/assets/blastoise.jpg")
  ) {
    joshua.src = "/assets/raichu.jpg";
  }
}

function carter() {
  var carter = document.getElementById("playerone");
  if (
    carter.src.match("/assets/charizard.webp") ||
    carter.src.match("/assets/venusaur.jpg") ||
    carter.src.match("/assets/raichu.jpg")
  ) {
    carter.src = "/assets/blastoise.jpg";
  }
}


/**
 * Fight Btn (send to personal)
 */

var sending = document.getElementById("playerone")

function sendto() {
  if (sending.src.match("/assets/raichu.jpg")) {
    location.href = "/PagesJosh/index.html"
  } else if (sending.src.match("/assets/charizard.webp")) {
    location.href = "/PageJordan1/index.html"
  } else if (sending.src.match("/assets/venusaur.jpg")) {
    location.href = "https://store.steampowered.com/"
  } else if (sending.src.match("/assets/blastoise.jpg")) {
    location.href = "https://youtu.be/UzSlwEE7NME"
  }
}