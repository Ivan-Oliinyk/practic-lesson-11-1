// import BSN from "bootstrap.native";

// console.log("***this is lesson 11-1***");
// const sayHello = () => console.log("Hellow");

// const timeId = setTimeout(sayHello, 3000);

// const timer = (n) => {
//   for (let i = 1; i <= n; i++) {
//     setTimeout(() => {
//       console.log("Joker");
//     }, 1000);
//   }
// };

// const intervalId = setInterval(timer(3), 1000);

// setTimeout(() => {
//   console.log("Joker");
// }, 1000);

// console.log("Strat");

// setTimeout(() => {
//   console.log("2000");
// }, 2000);

// setTimeout(() => {
//   console.log("1000");
// }, 1000);

// setTimeout(() => {
//   console.log("500");
// }, 500);

// console.log("End");

// // for (let index = 0; index < 10000; index++) {
// //   console.log(index);
// // }

// for (let i = 1; i <= 5; i += 1) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// let i = 0;

// function addNum() {
//   i += 1;
//   console.log(i);
// }

// const intervalId = setInterval(addNum, 100, 100);

// // if (i === 20) {
// //   clearInterval(intervalId);
// // }

// function stopInterval(id) {
//   clearInterval(id);
// }

// setTimeout(() => {
//   stopInterval(intervalId);
// }, 1000);

// console.log(intervalId);

// console.log("1");

// setTimeout(() => {
//   console.log("22222");
// }, 0);

// function runNum(n) {
//   for (let i = 0; i <= n; i++) {
//     console.log(i);
//   }
// }

// runNum(10);
// runNum(10000);

////////////////////////////////////////////////////////////////////////
// let timerId = null;
// const btn = document.querySelectorAll(".btn");
// btn.forEach((item) => item.addEventListener("click", hideBtn));

// function hideBtn(e) {
//   e.target.classList.add("hide");
//   clearInterval(timerId);
// }

// let ind = 0;

// timerId = setInterval(() => {
//   ind += 1;
//   console.log(ind);
//   // console.log("run timer Id");
//   btn.forEach((item) => item.classList.toggle("hide"));
// }, 1000);

// const toogleBtn = () =>
//   setInterval(() => {
//     btn.forEach((item) => item.classList.toggle("hide"));
//   }, 1000);

// setInterval(toogleBtn, 1000);

// setTimeout(hideBtn, 3000);

// setInterval(hideBtn, 2000);

////////////////////////////////////////////////////////////////////
// Надоедалка

// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_DELAY = 3;

// let timerId = null;
// let count = 0;
// let hasSubscription = false;

// timerId = setInterval(() => {
//   if (count === MAX_PROMPT_DELAY || hasSubscription) {
//     clearInterval(timerId);
//     return;
//   }

//   console.log(count + 1, "Description on  me !!!!!!!");

//   count++;
// }, PROMPT_DELAY);

//////////////////////////////////////BOTSTRAP ///////
// const modal = new BSN.Modal("#exampleModal");
// const ref = {
//   modal: document.querySelector("#exampleModal"),
//   subscription: document.querySelector("[data-subsciption]"),
// };
// const maxPrompAtempt = 3;

// let hasSubscription = false;
// let count = 0;

// openModal();

// ref.modal.addEventListener("hide.bs.modal", () => {
//   console.log("You can not close me )))");
//   openModal();
// });

// ref.subscription.addEventListener("click", () => {
//   hasSubscription = true;
//   modal.hide();
// });

// function openModal() {
//   if (maxPrompAtempt === count || hasSubscription) {
//     console.log("Max quantities");
//     return;
//   }

//   setTimeout(() => {
//     modal.show();
//     count += 1;
//   }, 1000);
// }
