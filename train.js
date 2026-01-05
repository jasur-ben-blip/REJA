// ------------------ MIT task - D -----------------------------------

/* D task SHARTI : 
  Shunday function tuzing, u 2 ta string parametrga ega bolsin, 
  hamda ikkala string bir xil harflardan iborat bolsa true, aks 
  xolda false qaytarsin 

  MASALAN 
  checkContent("mitgroup", "gmtiprou") 
  return qiladi true.

*/

// YECHIM:

const a = "jasurbek";
const b = "kebrusaj";

function checkContent(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  let sortedA = a.split("").sort().join("");
  let sortedB = b.split("").sort().join("");
  return sortedA === sortedB;
}
console.log(checkContent(a, b));

// ------------------------- C - Task ---------------------------------------
/*  Savol: Shunday class tuzing tuzing nomi Shop,
  va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning
  3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul.
  Har bir method ishga tushgan vaqt ham log qilinsin.
  MASALAN: const shop = new Shop(4, 5, 2); shop-qoldiq( )
  return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!
  shop.sotish( 'non', 3) & shop.qabul( 'cola', 4) & shop.qoldiq()
  return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
*/

// ------ Masalaning yechimi ---------
// class Shop {
//   constructor(apple, kiwi, orange) {
//     this.apple = apple;
//     this.kiwi = kiwi;
//     this.orange = orange;
//   }

//   _time() {
//     const now = new Date();
//     return now.toTimeString().slice(0, 5);
//   }

//   qoldiq() {
//     //metod qoldiq
//     return `Hozir ${this._time()}da ${this.apple}ta olma, ${
//       this.kiwi
//     }ta kiwi va ${this.orange}ta apelsin mavjud!`;
//   }

//   sell(product, number) {
//     //metod sotish
//     if (this[product] === undefined) {
//       console.log(`Bunday mahsulot yo‘q!`);
//       return;
//     }

//     if (this[product] < number) {
//       console.log(`Yetarli ${product} yo‘q!`);
//       return;
//     }

//     this[product] -= number;
//     console.log(`Hozir ${this._time()}da ${number}ta ${product} sotild!`);
//   }

//   kelishi(product, number) {
//     //metod qabul qilish
//     if (this[product] === undefined) {
//       console.log(`Bunday mahsulot yo‘q `);
//       return;
//     }

//     this[product] += number;
//     console.log(`Hozir ${this._time()}da ${number}ta ${product} qabul qilindi`);
//   }
// }

// const shop = new Shop(20, 30, 25);
// console.log(shop.qoldiq());
// shop.sell("kiwi", 5);
// shop.kelishi("apple", 5);

// console.log(shop.qoldiq());

// ---------------------- B - Task ------------------------------
// function countNumbers(string) {
//   let numbers = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] >= "0" && string[i] <= "9") {
//       numbers++;
//     }
//   }
//   return numbers;
// }
// const string = "asda6s5fa76d5ga89sf5ad54gas7d";
// const result = countNumbers(string);
// console.log("result:", result);

// --------------------- A - Task ------------------------

// const letter = "k";
// const word = "tez-tez ketish kerak";

// function countLetters(letter, word) {
//   let number = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       number++;
//     }
//   }
//   return number;
// }
// const result = countLetters(letter, word);
// console.log("RESULT:", result);

// ----------------------------  -----------------------------------

// console.log("Jack Ma maslaxatlari");
// const list = [
//   // variable list yaratib olyabmiz ozgarmas
//   "Yaxshi talaba boling", // yoshingiz 0-20
//   "Tog'ri boshliq tanlang va koproq xato qiling", // yosh 20-30
//   "Ozingiz ustingizda ishlashni boshlang", //yosh 30 - 40
//   "Siz kuchli bolgan narsalarni qiling", // yosh 40 - 50
//   "Endi dam olavering baribir foydasi yoq", // 60 <
// ];

// function maslahatBering(a, callback) {
//   // callback function define qismi boshlanyabdi 2 ta parametr kiritdik // a - ga yosh ni nazarda tutgan xolatda
//   let result;
//   if (typeof a !== "number") callback("Please insert a number", null);
//   //if - shart qoyyabman == shart tog'ri bolsa ==callback== ishlashi uchun  // bu yerda typeof a - a ning turini bilish(string yoki number) // !== ---> bu qat'iy teng emaslik belgisi
//   else if (a <= 20) callback(null, list[0]);
//   // bu yerda a <= 20 shu shartni qoyyabman va shart tog'ri bolsa listdagi 0-indexni menga olib kelib ber deyabman
//   else if (a > 20 && a <= 30) result = (null, list[1]);
//   // && = (va) ----> ikki shart ham true bolishi kerak
//   else if (a > 30 && a <= 40) result = (null, list[2]);
//   else if (a > 40 && a <= 50) result = (null, list[3]);
//   else if (a > 50 && a <= 60) result = (null, list[4]);
//   else {
//     // bu yerda aks holda yani tepadagilar mos kelmagan raqam kelgan xolatda listdagi 5-indexni olib kelib ber deyabmiz
//     callback(null, list[5]);
//   }
//   setTimeout(function () {
//     // bu yerda men ummumiy callback function u/n setTimeout qoyib oldim.
//     callback(null, result);
//   }, 5000);
// }

// console.log("passed here 0");

// maslahatBering(44, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("Result:", data);
//   }
// });

// console.log("passed here 1");
