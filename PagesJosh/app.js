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
 */
 const x = document.getElementById("zoom")
 const a = document.getElementById("zoom1")
 const s = document.getElementById("zoom2")
 const d = document.getElementById("zoom3")
 const f = document.getElementById("zoom4")
 const g = document.getElementById("zoom5")
 const h = document.getElementById("zoom6")
 const j = document.getElementById("zoom7")

function changeup() {
 x.style.transform = 'scale(1.75)'
 x.style.transition = 'transform .2s'
}


function changedown() {
  x.style.transform = 'scale(1)'
  x.style.transition = 'transform .2s'
}

function changeup1() {
  a.style.transform = 'scale(1.75)'
  a.style.transition = 'transform .2s'
 }
 
 
 function changedown1() {
   a.style.transform = 'scale(1)'
   a.style.transition = 'transform .2s'
 }

 function changeup2() {
  s.style.transform = 'scale(1.75)'
  s.style.transition = 'transform .2s'
 }
 
 
 function changedown2() {
   s.style.transform = 'scale(1)'
   s.style.transition = 'transform .2s'
 }

 function changeup3() {
  d.style.transform = 'scale(1.75)'
  d.style.transition = 'transform .2s'
 }
 
 
 function changedown3() {
   d.style.transform = 'scale(1)'
   d.style.transition = 'transform .2s'
 }

 function changeup4() {
  f.style.transform = 'scale(1.75)'
  f.style.transition = 'transform .2s'
 }
 
 
 function changedown4() {
   f.style.transform = 'scale(1)'
   f.style.transition = 'transform .2s'
 }

 function changeup5() {
  g.style.transform = 'scale(1.75)'
  g.style.transition = 'transform .2s'
 }
 
 
 function changedown5() {
   g.style.transform = 'scale(1)'
   g.style.transition = 'transform .2s'
 }

 function changeup6() {
  h.style.transform = 'scale(1.75)'
  h.style.transition = 'transform .2s'
 }
 
 
 function changedown6() {
   h.style.transform = 'scale(1)'
   h.style.transition = 'transform .2s'
 }

 function changeup7() {
  j.style.transform = 'scale(1.75)'
  j.style.transition = 'transform .2s'
 }
 
 
 function changedown7() {
   j.style.transform = 'scale(1)'
   j.style.transition = 'transform .2s'
 }


