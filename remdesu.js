// apa itu java script?
//secara definisi JavaScript adalah bahasa pemograman untuk web yang digunakan untuk membuat halaman web menjadi interaktif
//Fungsi JavaScript
//Dinamis: Memungkinkan perubahan konten halaman tanpa memuat ulang
//Interaktif: digunakan untuk menangani event, animasi, dan validasi form.
//Versatil: digunakan di front-end dan back-ennd (Node.js).

//LANGKAH KERJA JAVASCRIPT
//Parsing: Browser membaca HTMl dan membentuk DOM(Document Object Model)
//Eksekusi: Mesin java script mengeksekusi kode javscript sesuai urutan, berinteraksi dengan DOM untuk manipulasi elemen.
//Event Loop: JavaScript menangani event secara ask=inkron melalui event loop, memungkinkan interaksi dinamis tanpa memblokir eksekusi kode lainnya.

//Apa itu variabel
/// Variabel adalah wadah yang digunakan untuk menyimpan data yg dpt berubah sepanjang program berjalan
//Analog: Varianel seperti kotak yang menyimpan nilai, dan kita bisa mennganti isi kotak yersebut kapan saja
//variabel di JavaScript ada 3 yaitu ; var, let, const
/*var, dia bisa diakses diluar scopes{}*/

if(true){
    var nama = "junix"
} //scope

console.log('var : ',nama)

//let, hanya bisa diakses didalam scopes{} tidak bisa diluar dan nilainya bisa diubah

if(true){
    let nama = "Junix"
} //scope

console.log('let : ',nama)

//const, hanya bisa diakses didalam scopes {} tidak bisa diluar, dan nilainya tidak bisa diubah

if(true){
    const nama = "Tegar"
    console.log('const : ',nama)
}


//Tipe data primitif

// string "" atau '' karakter yg digunakan untuk menyimpan dan memanipulasi teks
// Number digunakan untuk menyimpan nilai numerik, termasuk bilangan bulat (integer) dan desimal(float)
// Boolean itu isinya bernilai true dan false
// Undefined, Nilai yang secara otomatis muncul apabila ada suatu fungsi atau variabel yang belum dideklarasikan atau diinisiasi
// Null, nilai yang secara eksplisit diberikan untuk menunjukkan bahwa variabel tidak memiliki nilai
// Symbol(ES6+), symbol adalah tipe data primitif yang unik dan immutable, digunakan sebagai identifier unik untuk properti objek
// BigInt adalah tipe data yang digunakan untuk mempresentasikan angka yng sangat besar melebihi batas tipe data number

// Tipe Data Object
const nama = 'Tegar'
const negara = 'Indonesia'
const domisili = 'Bandung'

object
//Object adalah tipe data kompleks yg digunakan untuk menyimpan data dalam pasangan key-value
//Array adalah jenis object yang menyimpan koleksi data berurutan dan dapat diakses melalui indeks
//function adalah blok kode yang dapat digunakan kembali, yg juga dianggap object di java string