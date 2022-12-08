/* 

music player might be in site, might not

function playaudio() {
    var audio = document.getElementById("audio");
    audio.play();
}
*/

/**
 * Personal Projects
 */
function master() {
  changeimage();
  changeskill();
  changetitle();
  changetext();
}

function changeskill() {
  var skill = document.getElementById("welearnskill");
  if (skill.src.match("/AssetsJosh/Assets_Skills/FIGMA.svg")) {
    skill.src = "/AssetsJosh/Assets_Skills/PS.svg";
  } else {
    skill.src = "/AssetsJosh/Assets_Skills/FIGMA.svg";
  }
}

function changeimage() {
  var image = document.getElementById("welearn");
  if (image.src.match("/AssetsJosh/weLearn.jpeg")) {
    image.src = "/AssetsJosh/PS-Midterm.png";
  } else {
    image.src = "/AssetsJosh/weLearn.jpeg";
  }
}

function changetitle() {
  var title = document.getElementById("welearntitle");
  if (title.textContent.match("weLearn")) {
    title.textContent = "PS5 Game Cover";
  } else {
    title.textContent = "weLearn";
  }
}

function changetext() {
  var text = document.getElementById("welearntext");
  if (
    text.textContent.match(
      "A UX Figma design project, weLearn is a mobile studying app created by myself & Carter V."
    )
  ) {
    text.textContent =
      "A mockup Playstation 5 video game cover of a basketball game.";
  } else {
    text.textContent =
      "A UX Figma design project, weLearn is a mobile studying app created by myself & Carter V.";
  }
}

/**
 * Skills Listener
 * There is 100% a more effiecent way to write this; its just how i knew lol
 */

const x1 = document.getElementById("zoomx");
const xx1 = document.getElementById("zoomx1");
const xxx1 = document.getElementById("zoomxx1");
const x = document.getElementById("zoom");

const a = document.getElementById("zoom1");
const aa = document.getElementById("zooma");
const aaa = document.getElementById("zooma1");
const aaaa = document.getElementById("zoomaa1");

const s = document.getElementById("zoom2");
const ss = document.getElementById("zooms");
const sss = document.getElementById("zooms1");
const ssss = document.getElementById("zoomss1");

const d = document.getElementById("zoom3");
const dd = document.getElementById("zoomd");
const ddd = document.getElementById("zoomd1");
const dddd = document.getElementById("zoomdd");

const f = document.getElementById("zoom4");
const ff = document.getElementById("zoomf");
const fff = document.getElementById("zoomf1");
const ffff = document.getElementById("zoomff");

const g = document.getElementById("zoom5");
const gg = document.getElementById("zoomg");
const ggg = document.getElementById("zoomg1");
const gggg = document.getElementById("zoomgg");

const h = document.getElementById("zoom6");
const hh = document.getElementById("zoomh");
const hhh = document.getElementById("zoomh1");
const hhhh = document.getElementById("zoomhh");

const j = document.getElementById("zoom7");
const jj = document.getElementById("zoomj");
const jjj = document.getElementById("zoomj1");
const jjjj = document.getElementById("zoomjj");

function changeup() {
  x.style.transform = "scale(1.75)";
  x.style.transition = "transform .2s";
  x1.style.transform = "scale(1.10)";
  x1.style.transition = "transform .2s";
  xx1.style.transform = "scale(1.25)";
  xx1.style.transition = "transform .2s";
  xxx1.style.transform = "scale(1.05)";
  xxx1.style.transition = "transform .2s";
}

function changedown() {
  x.style.transform = "scale(1)";
  x.style.transition = "transform .2s";
  x1.style.transform = "scale(1)";
  x1.style.transition = "transform .2s";
  xx1.style.transform = "scale(1)";
  xx1.style.transition = "transform .2s";
  xxx1.style.transform = "scale(1)";
  xxx1.style.transition = "transform .2s";
}

function changeup1() {
  a.style.transform = "scale(1.75)";
  a.style.transition = "transform .2s";
  aa.style.transform = "scale(1.10)";
  aa.style.transition = "transform .2s";
  aaa.style.transform = "scale(1.25)";
  aaa.style.transition = "transform .2s";
  aaaa.style.transform = "scale(1.05)";
  aaaa.style.transition = "transform .2s";
}

function changedown1() {
  a.style.transform = "scale(1)";
  a.style.transition = "transform .2s";
  aa.style.transform = "scale(1)";
  aa.style.transition = "transform .2s";
  aaa.style.transform = "scale(1)";
  aaa.style.transition = "transform .2s";
  aaaa.style.transform = "scale(1)";
  aaaa.style.transition = "transform .2s";
}

function changeup2() {
  s.style.transform = "scale(1.75)";
  s.style.transition = "transform .2s";
  ss.style.transform = "scale(1.10)";
  ss.style.transition = "transform .2s";
  sss.style.transform = "scale(1.25)";
  sss.style.transition = "transform .2s";
  ssss.style.transform = "scale(1.05)";
  ssss.style.transition = "transform .2s";
}

function changedown2() {
  s.style.transform = "scale(1)";
  s.style.transition = "transform .2s";
  ss.style.transform = "scale(1)";
  ss.style.transition = "transform .2s";
  sss.style.transform = "scale(1)";
  sss.style.transition = "transform .2s";
  ssss.style.transform = "scale(1)";
  ssss.style.transition = "transform .2s";
}

function changeup3() {
  d.style.transform = "scale(1.75)";
  d.style.transition = "transform .2s";
  dd.style.transform = "scale(1.10)";
  dd.style.transition = "transform .2s";
  ddd.style.transform = "scale(1.25)";
  ddd.style.transition = "transform .2s";
  dddd.style.transform = "scale(1.05)";
  dddd.style.transition = "transform .2s";
}

function changedown3() {
  d.style.transform = "scale(1)";
  d.style.transition = "transform .2s";
  dd.style.transform = "scale(1)";
  dd.style.transition = "transform .2s";
  ddd.style.transform = "scale(1)";
  ddd.style.transition = "transform .2s";
  dddd.style.transform = "scale(1)";
  dddd.style.transition = "transform .2s";
}

function changeup4() {
  f.style.transform = "scale(1.75)";
  f.style.transition = "transform .2s";
  ff.style.transform = "scale(1.10)";
  ff.style.transition = "transform .2s";
  fff.style.transform = "scale(1.25)";
  fff.style.transition = "transform .2s";
  ffff.style.transform = "scale(1.05)";
  ffff.style.transition = "transform .2s";
}

function changedown4() {
  f.style.transform = "scale(1)";
  f.style.transition = "transform .2s";
  ff.style.transform = "scale(1)";
  ff.style.transition = "transform .2s";
  fff.style.transform = "scale(1)";
  fff.style.transition = "transform .2s";
  ffff.style.transform = "scale(1)";
  ffff.style.transition = "transform .2s";
}

function changeup5() {
  g.style.transform = "scale(1.75)";
  g.style.transition = "transform .2s";
  gg.style.transform = "scale(1.10)";
  gg.style.transition = "transform .2s";
  ggg.style.transform = "scale(1.25)";
  ggg.style.transition = "transform .2s";
  gggg.style.transform = "scale(1.05)";
  gggg.style.transition = "transform .2s";
}

function changedown5() {
  g.style.transform = "scale(1)";
  g.style.transition = "transform .2s";
  gg.style.transform = "scale(1)";
  gg.style.transition = "transform .2s";
  ggg.style.transform = "scale(1)";
  ggg.style.transition = "transform .2s";
  gggg.style.transform = "scale(1)";
  gggg.style.transition = "transform .2s";
}

function changeup6() {
  h.style.transform = "scale(1.75)";
  h.style.transition = "transform .2s";
  hh.style.transform = "scale(1.10)";
  hh.style.transition = "transform .2s";
  hhh.style.transform = "scale(1.25)";
  hhh.style.transition = "transform .2s";
  hhhh.style.transform = "scale(1.05)";
  hhhh.style.transition = "transform .2s";
}

function changedown6() {
  h.style.transform = "scale(1)";
  h.style.transition = "transform .2s";
  hh.style.transform = "scale(1)";
  hh.style.transition = "transform .2s";
  hhh.style.transform = "scale(1)";
  hhh.style.transition = "transform .2s";
  hhhh.style.transform = "scale(1)";
  hhhh.style.transition = "transform .2s";
}

function changeup7() {
  j.style.transform = "scale(1.75)";
  j.style.transition = "transform .2s";
  jj.style.transform = "scale(1.10)";
  jj.style.transition = "transform .2s";
  jjj.style.transform = "scale(1.25)";
  jjj.style.transition = "transform .2s";
  jjjj.style.transform = "scale(1.05)";
  jjjj.style.transition = "transform .2s";
}

function changedown7() {
  j.style.transform = "scale(1)";
  j.style.transition = "transform .2s";
  jj.style.transform = "scale(1)";
  jj.style.transition = "transform .2s";
  jjj.style.transform = "scale(1)";
  jjj.style.transition = "transform .2s";
  jjjj.style.transform = "scale(1)";
  jjjj.style.transition = "transform .2s";
}
