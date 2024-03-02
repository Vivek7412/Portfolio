let nav = document.querySelector(".nav");
let features = document.querySelector(".features");
let hide = document.querySelector(".hide");

let pro = document.querySelector("#pro");
let edu = document.querySelector("#edu");

let project = document.querySelector("#project");
let education = document.querySelector("#education");
let repo = document.querySelector("#repo");

let cer = document.querySelector("#cer");
let ce = document.querySelector("#ce");

let sk = document.querySelector("#sk");
let re = document.querySelector("#re");
let skills = document.querySelector(".skills");

let all = document.querySelector(".all");
let co = document.querySelector("#co");

let mybutton = document.querySelector("#mybtn");
let last = document.querySelector("footer");
let profile = document.querySelector(".profile");

nav.addEventListener("click", () => {
  features.style.display = "block";
});

ce.addEventListener("click", () => {
  cer.scrollIntoView();
  features.style.display = "none";
});

hide.addEventListener("click", () => {
  features.style.display = "none";
});

pro.addEventListener("click", () => {
  project.scrollIntoView();
  features.style.display = "none";
});

edu.addEventListener("click", () => {
  education.scrollIntoView();
  features.style.display = "none";
});

sk.addEventListener("click", () => {
  skills.scrollIntoView();
  features.style.display = "none";
});

let pp = document.querySelector(".pp");
let show = document.querySelector(".show");

show.addEventListener("click", () => {
  pp.style.display = "block";
  show.style.display = "none";
});

let qq = document.querySelector(".qq");
let show2 = document.querySelector(".show2");

let rr = document.querySelector(".rr");
let show3 = document.querySelector(".show3");

show3.addEventListener("click", () => {
  rr.style.display = "block";
  show3.style.display = "none";
});

window.onscroll = function () {
  scroll();
};

let scroll = () => {
  if (document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

mybutton.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

let imj = document.querySelector(".imj");
let cut = document.querySelector(".cut");
let eye = document.querySelector(".eye");

eye.addEventListener("click", () => {
  console.log("kam kar rha h");
  imj.style.display = "block";
  cut.style.display = "block";
  eye.style.display = "none";
});

cut.addEventListener("click", () => {
  console.log("kam  2kar rha h");
  imj.style.display = "none";
  cut.style.display = "none";
  eye.style.display = "block";
});
