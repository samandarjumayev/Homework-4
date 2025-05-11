'use strict';

// 📝 Uyga vazifa 1-qism 📝

// 1-masala ✅
// let son = "12345";
// let raqamlari = son.split("");
// let sum = 0;
// for(let i = 0; i < raqamlari.length; i++){
//     sum += eval(raqamlari[i]);
// }
// console.log(sum);


// 2-masala ✅
// let belgi = "B";
// let oldingi = belgi.codePointAt() - 1;
// let keyingi = belgi.codePointAt() + 1;
// console.log("Oldingi: " + String.fromCharCode(oldingi));
// console.log("Keyingi: " + String.fromCharCode(keyingi));


// 3-masala ✅
// function getUpperCase(ism){
//     let javob1 = ism.toUpperCase();
//     return javob1;
// };
// function getLowerCase(ism){
//     let javob2 = ism.toLowerCase();
//     return javob2;
// }

// let myName = "samandar";
// let mySurname = "JUMAYEV";

// let toUpper = getUpperCase(myName);
// let toLower = getLowerCase(mySurname);

// console.log(toUpper);
// console.log(toLower);


// 4-masala ✅
// let str = "abcdef";
// let strArr = str.split("");
// let newStr = "";
// for(let i = 0; i < strArr.length; i++){
//     newStr = newStr.concat(strArr[i], " ");
// }
// console.log(newStr);


// 5-masala ✅
// let S1 = "Hello world";
// let S2 = "*";
// let C = "l";
// console.log(S1.replaceAll(C, C.concat(S2)));


// 6-masala ❓
// let S1 = "O'zbekiston buyuk davlat ! Uning yoshlari ham buyukdir !";
// let S2 = "buyuk";
// console.log(S1.replace(S2, ""));



// 7-masala ✅
// function getNumberOfWords(str){
//     let newArr = str.split(" ");
//     let soni = newArr.length;
//     return soni;
// }

// let matn = "O'zbekiston buyuk davlat! Uning yoshlari ham buyukdir"
// let javob = getNumberOfWords(matn);
// console.log(javob);



// 8-masala ✅
// let str = "MATN SO'ZLOVCHINING NIYATINI, ASOSIY G'OYASINI IFODALAB BERADI";
// let newArr = str.split(" ");
// let soni = 0; // A harfi bor so'zlar nechta ekanligini topish uchun
// for(let i = 0; i < newArr.length; i++){
//     if(newArr[i].includes("A")){
//         console.log(newArr[i]);
//         soni += 1;
//     }
// }
// console.log("A harfi bor so'zlar " + soni + " ta");



// 9-masala ✅
// function getMinOfString(str){
//     let newArr = str.split(" ");
//     let smallWord = newArr[0];
//     for(let i = 0; i < newArr.length; i++){
//         if(smallWord.length > newArr[i].length){
//             smallWord = newArr[i];
//         }
//     }
//     return smallWord;
// };

// let matn = "MATN SO'ZLOVCHINING NIYATINI, ASOSIY G'OYASINI IFODALAB BERADI";
// let result = getMinOfString(matn);
// console.log(result);



// 10-masala ✅
// let fileName = "D:/Abdulaziz/Books/Programmer.exe";
// let newArr = fileName.split("/");
// console.log(newArr[1]);












// 📝 Uyga vazifa 2-qism 📝

// 1-masala ✅
// let n = 13;
// let alifbo = [];
// for(let i = 65; i < 65 + n; i++){
//     alifbo.push(String.fromCodePoint(i));
// }
// console.log(alifbo);



// 2-masala ✅
// let belgi = "123";
// if(isNaN(belgi)){
//     console.log("Lotin: " + belgi);
// }else {
//     console.log("Digit:", Number(belgi));
// }



// 3-masala ✅
// let str = "Mening ismim Samandar familiyam Jumayev";
// console.log(str[0] + ": " + str[0].codePointAt());
// console.log(str[str.length - 1] + ": " + str[str.length - 1].codePointAt());



// 4-masala ✅
// let belgi = "A";
// let nechta = 5;
// console.log(belgi.repeat(nechta));



// 5-masala ✅
// let ism = "Samandar";
// let newArr = ism.split("");
// let yangiIsm = "";
// for(let i = newArr.length - 1; i >= 0; i--){
//     yangiIsm += newArr[i];
// }
// console.log(yangiIsm);



// 6-masala ✅
// function getStringStars(N){
//     if(N == 0){
//         belgi = "";     // Agar yulduzlar soni 0 ta bo'lsa yuluz qo'yilmasligi uchun
//     }else {
//         belgi = belgi.padStart(N, "*"); 
//     }
//     let newArr = ism.split("");   
//     let newStr = "";
//     for(let i = 0; i < newArr.length; i++){
//         newStr += newArr[i] + belgi;
//     }
//     console.log(newStr);
// }
// let belgi = "*";
// let ism = "Samandar";

// getStringStars(3); // nechta yulduzcha qo'shish kerakligini funkisya ichidagi raqamga kiritiladi



// 7-masala ✅
// let str = "Satrda 1 raqam 77 nechtaligini 3 topish";
// let newArr = str.split(" ");
// let raqamlarSoni = 0;
// for(let i = 0; i < newArr.length; i++){
//     if(!isNaN(newArr[i])){
//         console.log(Number(newArr[i]));
//         raqamlarSoni += 1;
//     }
// }
// console.log("Raqamlar soni: " + raqamlarSoni + " ta");



// 8-masala ✅
// let satr = "KriL ВШвщфу loTin";
// let soni = 0; // kichik lotin va krill harflar sonini hisoblash uchun
// let satrArr = satr.split("");
// let unikodi;

// for(let i = 0; i < satrArr.length; i++){
//     unikodi = satrArr[i].codePointAt();
//     if((unikodi >= 97 && unikodi <= 122) || (unikodi >= 1072 && unikodi <= 1103)){
//         console.log(satrArr[i]);
//         soni += 1;
//     }
// }
// console.log(soni + " ta kichik lotin va krill harflar bor");



// 9-masala ✅
// let satr = "Samandar Jumayev";
// console.log(satr.toLowerCase());



// 10-masala ✅
// let satr = "Samandar Jumayev Safar O'g'li";
// let satrArr = satr.split("");
// let newSatr = "";
// let unikodi;
// for(let i = 0; i < satrArr.length; i++){
//     unikodi = satrArr[i].charCodeAt();
//     if(unikodi >= 65 && unikodi <= 90){
//         newSatr += satrArr[i].toLowerCase();
//     }else if(unikodi >= 97 && unikodi <= 122){
//         newSatr += satrArr[i].toUpperCase();
//     }else{
//         newSatr += satrArr[i];
//     }
// }
// console.log(newSatr);



// 11-masala ✅
// let satr = "12.3a";
// if(isNaN(satr)){
//     console.log(0);
// }else if(Number(satr) % 1 == 0){
//     console.log(1);
// }else if(Number(satr) % 1 != 0){
//     console.log(2);
// }else {
//     console.log("Error..!");
// }



// 12-masala ✅
// function getInverseNumber(n){
//     let sonArr = String(n).split(""); // qiymatni numberdan stringa o'tkazib yangi array hosil qiladi
//     let newSon = ''; // string sonni olish uchun
//     for(let i = sonArr.length - 1; i >= 0; i--){
//         newSon = newSon + sonArr[i];
//     }
//     return Number(newSon); // qiymatni string emas number qilib qaytarishi uchun
// }
// let son = 12345;
// let javob = getInverseNumber(son);
// console.log(javob);



// 13-masala














