let btn = document.querySelector(".scroling");
window.onscroll = function() {
  if (window.scrollY >= 600) {
    btn.style.cssText = "display:block"
  } else {
    btn.style.cssText = "display:none";
  }
};
btn.onclick = function() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior:"smooth"
  })
}
let second = document.querySelector(".events .container .info .time .unit:last-child span:first-child");
let minuts = document.querySelector(".events .container .info .time .unit:nth-child(3) span:first-child");
let hours = document.querySelector(".events .container .info .time .unit:nth-child(2) span:first-child");
let days = document.querySelector(".events .container .info .time .unit:first-child span:first-child");
function countup(){
  second.innerHTML--;
  if (second.innerHTML === "0") {
    second.innerHTML = "59"
    minuts.innerHTML--
  }
  if (minuts.innerHTML === "0") {
    minuts.innerHTML = "59";
    hours.innerHTML--;
  }
  if (hours.innerHTML === "0") {
    hours.innerHTML = "23";
    days.innerHTML--;
  }
  if (days.innerHTML === "0" && hours.innerHTML === "0" && minuts.innerHTML === "0" && second.innerHTML === "0") {
    clearInterval(count)
  }
}
let count = setInterval(countup,1000)
