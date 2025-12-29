console.log("Jack Ma maslaxatlari");
const list = [
  "Yaxshi talaba boling", // 0 - 20
  "Tog'ri boshliq tanlang va koproq xato qiling", //20 - 30
  "Uzingizga ishlashingizni boshlang", // 30 - 40
  "Siz kuchli bolgan narsalarni qiling", // 40 - 50
  "Yoshlarga investitsiya qiling", // 50 - 60
  "Endi dam oling, foydasi yoq endi", // 60
];

// ------------------setInterval-callbackda-------------------------

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("Insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a < 20 && a <= 30) callback(null, list[1]);
  else if (a < 30 && a <= 40) callback(null, list[2]);
  else if (a < 40 && a <= 50) callback(null, list[3]);
  else if (a < 50 && a <= 60) callback(null, list[4]);
  else {
    setInterval(function () {
      callback(null, list[5]);
    }, 1000);
  }
}

console.log("passed here 0");
maslahatBering(70, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log(data);
  }
});
console.log("passed here 1");

// ------------------async-definition  qismi-----------------------

// async function maslaxatBering(a, callback) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//                                                                     // return list[5];
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {                  //setInterval xolatida ham kordik unda faqat 1 marta javob keldi ===> callback da yozganimizda qayta qayta javob olgan bolardik
//         resolve(list[5]);
//       }, 5000);
//     });

//     //--------------------setTimeout--------------------

// setTimeout(function () {   // bu xolatda setTimeout ishlamaydi promise functionlarda ishlaydi
//   return list[5];
// }, 5000);

//   }
// }

// -----------------call->>then/catch<<---------------------orqali

// console.log("passed here 0");  // 1chi bu ishga tushdi
// maslaxatBering(25)
//   .then((data) => {
//     console.log("javob:", data); // 3chi ishga tushdi ====> sababi ----> sync operationlar ishga tushgandan song keyin ishga tushadi.
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1"); // 2chi bu ishga tushdi

// -------------------call-async/await------------------------orqali

// async function run() {
//   let javob = await maslaxatBering(25);
//   console.log(javob);
//   javob = await maslaxatBering(70);
//   console.log(javob);
//   javob = await maslaxatBering(41);
//   console.log(javob);
// }
// run();
