// ------------------------- C - Task ---------------------------------------

class Shop {
  constructor(apple, kiwi, orange) {
    this.apple = apple;
    this.kiwi = kiwi;
    this.orange = orange;
  }

  // hozirgi vaqtni olish uchun yordamchi method
  _time() {
    const now = new Date();
    return now.toTimeString().slice(0, 5);
  }

  qoldiq() {
    return `Hozir ${this._time()}da ${this.apple}ta olma, ${
      this.kiwi
    }ta kiwi va ${this.orange}ta apelsin mavjud!`;
  }

  sell(product, number) {
    if (this[product] === undefined) {
      console.log(`Bunday mahsulot yo‘q!`);
      return;
    }

    if (this[product] < number) {
      console.log(`Yetarli ${product} yo‘q!`);
      return;
    }

    this[product] -= number;
    console.log(`Hozir ${this._time()}da ${number}ta ${product} sotild!`);
  }

  kelishi(product, number) {
    if (this[product] === undefined) {
      console.log(`Bunday mahsulot yo‘q `);
      return;
    }

    this[product] += number;
    console.log(`Hozir ${this._time()}da ${number}ta ${product} qabul qilindi`);
  }
}

const shop = new Shop(20, 30, 25);
console.log(shop.qoldiq());
shop.sell("kiwi", 5);
shop.kelishi("apple", 5);

console.log(shop.qoldiq());

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
