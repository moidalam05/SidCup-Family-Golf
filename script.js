var crsr = document.querySelector(".cursor");
var blureffect = document.querySelector(".cursor-blur");
document.addEventListener("mousemove", function (dets) {
  // console.log(dets.y)
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blureffect.style.left = dets.x - 200 + "px";
  blureffect.style.top = dets.y - 200 + "px";
});

var h4all = document.querySelectorAll(".nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 5;
    crsr.style.border = ".1px solid white";
    crsr.style.backgroundColor = "transparent";
  });

  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = ".0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.to(".nav", {
  backgroundColor: "black",
  height: "100px",
  duration: "1",
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to(".main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from(".about-us img, .about ", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from(".colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: ".colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from(".colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: ".colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from(".page6 h1", {
  y: 50,
  scrollTrigger: {
    trigger: ".page6 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
