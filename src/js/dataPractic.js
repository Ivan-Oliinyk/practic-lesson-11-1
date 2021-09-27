console.log("****** dataPractic ******");

// const date = new Date();

// console.log(date);
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getTime());
// console.dir(date);

// const date_1 = new Date();

// setTimeout(() => {
//   const date_2 = new Date();

//   // console.log(date_1);
//   // console.log(date_2);

//   console.log("new Date:", date_2 - date_1);
// }, 3000);

// const date_3 = Date.now();

// setTimeout(() => {
//   const date_4 = Date.now();

//   // console.log(date_3);
//   // console.log(date_4);

//   console.log("Date.now:", date_4 - date_3);
// }, 3000);

///////////////////////////////////////////////////////////
const ref = {
  start: document.querySelector("[data-start]"),
  end: document.querySelector("[data-stop]"),
  clockFace: document.querySelector("[data-clockFace]"),
};

class Timer {
  constructor({ onTick }) {
    this.inrtervalId = null;
    this.isActive = false;
    this.onTick = onTick;
    this.init();
  }

  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  start() {
    if (this.isActive) {
      return;
    }

    const startTime = Date.now();
    this.isActive = true;

    this.inrtervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponents(deltaTime);

      this.onTick(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.inrtervalId);
    this.isActive = false;
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  getTimeComponents(time) {
    const hourse = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hourse, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, 0);
  }
}

const timer = new Timer({ onTick: updateClockFace });

ref.start.addEventListener("click", timer.start.bind(timer));
ref.end.addEventListener("click", timer.stop.bind(timer));

function updateClockFace({ hourse, mins, secs }) {
  ref.clockFace.textContent = `${hourse}:${mins}:${secs}`;
}
