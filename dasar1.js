//cara membuat variabel
var a = "a";
let b = "b";
const c = "c";

//variabel bisa menampung tipe data string (text), integer/number, boolena, array, object,

let nama = "Gio";//string
let umur = "17";//number
let apakahBenar = true;//boolean
let uang = 5000.5//number juga tapi koma

//operator aritmatika

let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2, 'pertambahan');
console.log(angka1 - angka2, 'pengurangan');
console.log(angka1 / angka2, 'pembagian');
console.log(angka1 * angka2, 'perkalian');
console.log(angka1 % angka2, 'modulus');


//disini kita belajar mengisi variabel
let penampungHasilOperatorAritmatika = angka1 + angka2
console.log(penampungHasilOperatorAritmatika); // 30

penampungHasilOperatorAritmatika = angka1 - angka2
console.log(penampungHasilOperatorAritmatika); // -10

penampungHasilOperatorAritmatika = angka1 * angka2
console.log(penampungHasilOperatorAritmatika);//200

penampungHasilOperatorAritmatika = angka1 / angka2
console.log(penampungHasilOperatorAritmatika);//0,5

penampungHasilOperatorAritmatika = angka1 % angka2
console.log(penampungHasilOperatorAritmatika);//10

//string juga bisa ditambah namun string gabisa dikurang dengan operator aritmatika
let firstname = 'agus';
let lastname = 'setiawan';
let fullname = firstname + ' ' + lastname;
console.log(fullname);
console.log(firstname - lastname);

//alur pembacaan code
// untuk membaca code kalian harus membacanya dari kiri ke kanan, dan atas kebawah
// contoh
let number = 20;
console.log(number + 10);//30
number = 10
console.log(number + 10)//20
number = false
console.log(number + 10)//10

//pertanyaan? kenapa false + 10 hasilnya 10??? karena false = 0 dan true = 1

//membaca error
//error itu jangan kalian takut, justru kalian harus takut kalau tidak ada yang namanya error dalam pemograman
// karena dalam pekerjaan kalau suatu fitur berjalan namun ada byg tapi tidak error, itu bikin si programmer rada
//muak buat mencari errornya atau letak kesalahgannya

//contoh eror
// const hewan = 'jerapah'
// console.log(hewan)
// hewan = 'buaya'

// auto komentar bisa dengan pencet ctrl + /

//tipsnya adalah selalu teliti, dan kalau ada error dibaca aja, dan belajar ngoding itu perlu kebiasaan
//karna ngoding itu adalah habit