// function
// potongan/ block code yang bisa kita pakai berkalkali

let r = 10
const pi = 3.14
// // pi r2
// luasLingkaran(r)

// // 5,6,7
// r = 5
// console.log(pi * r * r)

// r = 6
// console.log(pi * r *r)

function luasLingkaran(jari){
    // jari number / bukan
    if (typeof jari === 'number'){
    console.log(pi * jari * jari)
    }
    console.log(jari +"Bukan angka")
    
}

// operator komparasi: ==, ===, !==, <=, <
// console.log(1 === 1)

// functionyang menentukan panggilan tuan atau nyonya
// function (nama,gender)
// lestari,female,panggilan

// panggilan("Lestari","female")

// function panggilan(nama,gender){
//     if (gender === "female") {
//         console.log("nyonya"+nama)
//     } else {
//         console.log("tuan"+nama)
//     }
// }

// cara declare function
// 1 reguler
function panggil(name,gender){}
const luasPersegi = function (p,l){
    return p * l
console.log(luasPersegi(4,5))
}

// 3. arrow function declaration
const nilaiKHS = (nilai)=>{
    // >=80 -> A
    if (nilai >= 80) {
        return 'A'
    } else if (nilai >= 70 && nilai <=79) {
        return 'B'
    } else if (nilai >=60) {
        return 'C'
    } else {
        return 'E'
    }
}

exports.hitungLuasPersegi = luasPersegi