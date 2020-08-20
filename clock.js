function timeToDeg(time) {
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  let sd = 6 * s - 90;
  let md = 6 * m + s / 10 - 90;
  let hd = 30 * h + m / 2 + s / 120 - 90;
  return { hour: hd, minute: md, second: sd };
}
class Clock {
  constructor() {
    this.secondHand = document.querySelector(".second-hand");
    this.minuteHand = document.querySelector(".minute-hand");
    this.hourHand = document.querySelector(".hour-hand");
    this.showTime();
  }
  showTime() {
    let now = new Date();
    let timeDeg = timeToDeg(now);
    this.secondHand.style.transform = `rotate(${timeDeg.second}deg) translate(-30px,-50%)`;
    this.minuteHand.style.transform = `rotate(${timeDeg.minute}deg) translate(-30px,-50%)`;
    this.hourHand.style.transform = `rotate(${timeDeg.hour}deg) translate(-30px,-50%)`;
  }
  run() {
    setInterval(() => this.showTime(), 1000);
  }
}
window.onload = () => {
  let clock = document.querySelector(".clock");
  let deg = -60;
  const PI = Math.PI;
  for (let i=1;i<=12;i++) {
    let x = 225+ 140*Math.cos(deg * (PI / 180));
    let y = 225+ 140*Math.sin(deg * (PI / 180));
    let num = document.createElement("div");
    num.innerHTML = i;
    num.className = "number";
    num.style.left=x;
    num.style.top=y;
    deg+=30;
    clock.appendChild(num);
  }
  new Clock().run();
};
