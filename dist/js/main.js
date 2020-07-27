// Hero Animations
const heroTitle = document.querySelector("section[name=hero] h1");
const heroSubTitle = document.querySelector("section[name=hero] h2");
const heroSocial = document.querySelectorAll("section[name=hero] .social a");

var heroTl = new TimelineMax({ delay: 1 });
heroTl.to(heroSubTitle, 1.5, { opacity: 1, width: "auto", filter: "blur(0px)", ease: "back" });
heroTl.to(heroTitle, 2.5, { y: 0, opacity: 1, filter: "blur(0px)", ease: "power1" });
heroTl.to(heroSubTitle, 2, { color: "#3E7CB1" }, "-=1");
heroTl.to(heroSocial, 1, { y: 0, opacity: 1, stagger: 0.15 }, "-=1");

document.querySelectorAll(".social a").forEach(elm => {
  elm.addEventListener("mouseover", (e) => {
    gsap.to(e.target, .25, { scale: 1.5 });
  })
  elm.addEventListener("mouseout", (e) => {
    gsap.to(e.target, .25, { scale: 1 });
  })
})

/* TWITCH ANIMATIONS */
const schedule = document.querySelector(".schedule")
const twitchBranding = document.querySelector("section[name=twitch] .branding")

var twitchTl = new TimelineMax({
  scrollTrigger: {
    trigger: "section[name=twitch]",
    start: 300,
    once: true
  }
});
twitchTl.fromTo(twitchBranding, 0.5, { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
twitchTl.fromTo(schedule, 0.5, { opacity: 0, x: 50 }, { opacity: 1, x: 0 }, "=-0.5")

function showDetails(day) {
  const toShow = document.querySelector(`.schedule__details--${day}`)

  const showTl = new TimelineMax()
  showTl.fromTo(twitchBranding, 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -50 })
  showTl.fromTo(schedule, 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: 50 }, "=-0.5")
  showTl.fromTo(toShow, 1, { opacity: 0, y: 50 }, { opacity: 1, y: 0, pointerEvents: "all" }, "=-0.25")
}

function hideDetails() {
  const toHide = document.querySelectorAll(`.schedule__details`)

  const hideTl = new TimelineMax()
  hideTl.to(toHide, 0.5, { opacity: 0, y: 50, pointerEvents: "none" })
  hideTl.fromTo(twitchBranding, 0.5, { opacity: 0, x: -50 }, { opacity: 1, x: 0 }, "=-0.25")
  hideTl.fromTo(schedule, 0.5, { opacity: 0, x: 50 }, { opacity: 1, x: 0 }, "=-0.5")
}

/* AVATAR ANIMATIONS */
let mode = "outline"

const states = {
  "outline": ['avatar outline blink'],
  "colored": [
    'avatar color blink',
    'avatar color idle',
    'avatar color run',
    'avatar color sit'
  ]
}

const avatar = document.querySelector(".avatar")
let currentState = 0;
avatar.addEventListener("click", (e) => {
  changeState()
})

function changeState() {
  if ((currentState + 1) < states[mode].length) {
    currentState++
  } else {
    currentState = 0
  }
  avatar.classList = states[mode][currentState]
}

let timer = 0
let pressed = null
avatar.addEventListener("mousedown", (e) => {
  pressed = setInterval(() => {
    timer++
    avatar.style.transform = `scale(1.${timer})`
    if (timer === 4) {
      toggleMode()
      clearInterval(pressed)
      timer = 0
      avatar.style.transform = `scale(1)`
      changeState()
    }
  }, 1000)
})

avatar.addEventListener("mouseup", (e) => {
  timer = 0
  clearInterval(pressed)
})

function toggleMode() {
  if (mode === "outline") {
    mode = "colored"
  } else {
    mode = "outline"
  }
}

