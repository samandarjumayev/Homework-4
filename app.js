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



// 13-masala ❓



// 14-masala ✅
// let N1 = 4;
// let N2 = 3;
// let S1 = "Samandar";
// let S2 = "Jumayev ";
// let newStr1 = S1.slice(0, N1); // Sama
// let newStr2 = S2.slice(-N2 - 1, -1); // yev

// console.log(newStr1.concat(newStr2)); // natija Samayev



// 15-masala ✅
// let C = "-";
// let satr = "Lorem - ipsum - dolor";
// console.log(satr.replaceAll("-", "--"));



// 16-masala ✅
// let C = "&";
// let S1 = "Lorem & ipsum & dolor & lorem";
// let S2 = "Developer";
// console.log(S1.replaceAll(C, S2 + C));



// 17-masala ✅
// let S1 = "Lorem ipsum dolor sit ipsum amet, ipsum adipiscing elit. ipsum ullamcorper commodo nibh ipsum sollicitudin.";
// let S2 = "ipsum"; // s1 da s2 nechta ekanligini topish
// let satrArr = S1.split(" ");
// let soni = 0;
// for(let i = 0; i < satrArr.length; i++){
//     if(satrArr[i].includes(S2)){
//         soni += 1;
//     }
// }
// console.log(soni + " ta " + S2);



// 18-masala ✅
// let S1 = "Lorem ipsum dolor sit ipsum amet, ipsum adipiscing elit. ipsum ullamcorper commodo nibh ipsum sollicitudin.";
// let S2 = "ipsum";
// console.log(S1.replace(S2, ""));



// 19-masala ✅
// let S1 = "Lorem ipsum dolor sit ipsum amet, ipsum adipiscing elit. ipsum ullamcorper commodo nibh ipsum sollicitudin.";
// let S2 = "ipsum";
// console.log(S1.replaceAll(S2, ""));



// 20-masala ✅
// let S1 = "Lorem ipsum dolor sit ipsum amet, ipsum adipiscing elit. ipsum ullamcorper commodo nibh ipsum sollicitudin.";
// let S2 = "ipsum";
// let S3 = "developer";
// console.log(S1.replace(S2, S3));



// 21-masala ✅
// let S1 = "Lorem ipsum dolor sit ipsum amet, adipiscing elit. ipsum ullamcorper commodo nibh ipsum sollicitudin.";
// let S2 = "ipsum";
// let S3 = "developer";
// let strArr = S1.split(" "); // arrayga o'tkazish
// let newStr = ""; // yangi satrni hosil qilish uchun
// for(let i = strArr.length - 1; i >= 0; i--){ // arrayni oxiridan boshlab aylanib chiqadi
//     if(strArr[i].includes(S2)){ // birinchi uchragan ipsumni developerga almashtiradi
//         strArr[i] = S3;
//         break; // va break bo'ladi, keyingi ipsumlarni almashtirmaydi
//     };
// }
// for(let j = 0; j < strArr.length; j++){
//     newStr += strArr[j] + " "; // hosil bo'lgan arrayni yangi strga biriktirib chiqish
// }
// // console.log(strArr);
// console.log(newStr);



// 22-masala ✅
// let matn = "LOREM IPSUM NON SIT IPSUM AMET QULOQ , QOSHIQ ELIT. IPSUM ULLAMCORPER SWEETS NIBH IPSUM SOLLICITUDIN.";
// // matnda NON, QOSHIQ va SWEETS so'zlari bor, bir xil harfdan boshlanib tugaydi
// let matnArr = matn.split(" ");
// let harf = [];
// let soni = 0;
// for(let i = 0; i < matnArr.length; i++){
//     harf = matnArr[i].split("");
//     if(harf[0] == harf[harf.length - 1] && matnArr[i].length != 1){ // 2-shart 1 ta belgini chiqarmasligi uchun
//         console.log(matnArr[i]);
//         soni += 1;
//     }
// }
// console.log(soni + " ta so'z bor");



// 23-masala ✅
// let matn = "LOREM IPSUM SIT AVATAR IPSUM AMET, ELIT. IPSUM ULLAMCORPER ALTERNATIVE SWEETS NIBH IPSUM SOLLICITUDIN.";
// let matnArr = matn.split(" ");
// // faqat 2 ta A harfi bor so'zlarni topsih kerak: AVATAR, ALTERNATIVE;
// let soni = 0;
// let jami = 0;
// for(let i = 0; i < matnArr.length; i++){
//     let harfArr = matnArr[i].split("");
//     let harfA = "A";
//     for(let j = 0; j < harfArr.length; j++){
//         if(harfArr[j] === harfA){
//             soni += 1;
//         }
//     }
//     if(soni >= 2){
//         jami += 1;
//         console.log(matnArr[i]);
//     }
//     soni = 0; // keyingi marta aylanishda to'g'ri hisoblash uchun yana 0 qiymat berishimiz kerak
// }
// console.log("Jami: " + jami);



// 24-masala ✅
// let matn = "LOREM IPSUM SIT AVATAR IPSUM AMET, ELIT. IPSUM ULLAMCORPER ALTERNATIVE SWEETS NIBH IPSUM SOLLICITUDIN.";
// // eng uzun so'zni topish
// let matnArr = matn.split(" ");
// let longWord = matnArr[0];
// for(let i = 0; i < matnArr.length; i++){
//     if(longWord.length < matnArr[i].length){
//         longWord = matnArr[i];
//     }
// }
// console.log("Eng uzun so'z: " + longWord);



// 25-masala ✅
// let matn = "LOREM IPSUM SIT AVATAR IPSUM AMET ELIT IPSUM ULLAMCORPER ALTERNATIVE SWEETS NIBH IPSUM SOLLICITUDIN";
// // probel o'rniga nuqta qo'yish
// console.log(matn.replaceAll(" ", "."));



// 26-masala ✅
// let matn = "lorem ipsum sit avatar ipsum amet elit ipsum ullamcorper alternative sweets nibh ipsum sollicitudin";
// let matnArr = matn.split(" ");
// let harf = [];
// let newMatn = '';
// let newWord = '';
// for(let i = 0; i < matnArr.length; i++){
//     harf = matnArr[i].split("");
//     newWord = harf[0].toUpperCase();
//     for(let j = 1; j < harf.length; j++){
//         newWord += harf[j];
//     }
    
//     newMatn += newWord + " ";
//     harf = [];
//     newWord = '';
// }
// console.log(newMatn);



// 27-masala ✅
// let matn = "lorem() ipsum sit avatar, ipsum amet elit: ipsum ullamcorper? alternative. sweets nibh ipsum! so%llicitudin";
// // tinish belgilari sonini chiqaruvchi dastur
// let harflar = matn.split("");
// let soni = 0;
// let belgilar = []; // barcha belgilarni bitta arrayga saqlab borish uchun
// for(let i = 0; i < harflar.length; i++){
//     if(harflar[i].codePointAt() >= 33 && harflar[i].codePointAt() <= 47){
//         soni += 1;
//         belgilar.push(harflar[i]);
//     }
// }
// console.log(belgilar);
// console.log("Tinish belgilar " + soni + " ta");



// 28-masala ✅
// let fileName = " D:/Qudrat_c++/books/math/My_book.exe";
// let qism = fileName.split("/");
// let notFormat = qism[qism.length - 1].split(".");
// console.log(notFormat[0]);



// 29-masala ✅
// let fileName = "D:/Qudrat_c++/books/My_book.exe";
// let qism = fileName.split("/");
// let kengaytmasi = qism[qism.length - 1].split(".");
// console.log(kengaytmasi[kengaytmasi.length - 1]);



// 30-masala ✅
// let fileName = "D:/Qudrat_c++/books/My_book.exe";
// let qism = fileName.split("/");
// let papka = qism[qism.length - 2];
// console.log(papka);