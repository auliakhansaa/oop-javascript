const nama = "Sabrina";
const pekerjaan = "Fasilitator Binar";

console.log(`Halo, namaku ${nama}, aku kerja sebagai ${pekerjaan}`);
// Output: Halo namaku Sabrina, aku kerja sebagai Fasilitator Binar

let nilaiUjianKehidupan = 50;
nilaiUjianKehidupan = 95.5;
console.log(nilaiUjianKehidupan);

const apakahSedangTerjadiPandemi = true;
const apakahAkuHarusKeluarRumah = false;

console.log(apakahSedangTerjadiPandemi);
console.log(apakahAkuHarusKeluarRumah);

// Object literal
const ktp = {
    nama: "Sabrina",
    alamat: {
        jalan: "Jl. Kabupaten",
        "rt/rw": "05/010"
    },
    pekerjaan: [
        "Dosen UI",
        "Mentor Binar"
    ]
};

console.log(ktp.nama)
console.log(ktp["alamat"]["rt/rw"])
console.log(ktp.alamat["rt/rw"])

// Array di dalam Object
ktp.pekerjaan.forEach(function(item) {
    console.log(`${item} adalah pekerjaan ${ktp.nama}`)
}) 
   
// Array literal
const namaKeluarga = ["Sabana", "Sabrina", "Sabarna"];
// Array with multiple lines
const namaKartuKeluarga = [
    "Pak Sabana",
    "Mak Sabrina",
    "Nak Sabrina"
];

// Array with new keyword
const namaKK = new Array("Sabana", "Sabrina", "Sabarna");
console.log(namaKeluarga) 
console.log(namaKartuKeluarga.length) // Output: 3

// Nested Array
const arrays = [namaKeluarga, namaKartuKeluarga]
console.log(arrays)

// Array push
const fruits = ["Apple", "Orange", "Durian"]
fruits.push("Lemon")
console.log(fruits) 

// Array pop
fruits.pop()
console.log(fruits)