for (let i = 0; 1 < 10; 1++) {
    if (i % 2 === 0) {
        console.log("Nilai i:", 1)
    } else {
        console.log("Nilai i:", 1)
    }
}

function satu() {
    dua()
}

function dua() {
    tiga()
}

function tiga() {
    throw new Error(" Ini pesan Error")
}


// 4 jenis error
// 1. lokasi error & line nmr
// 2. posisi detail di line tersebut
// 3. Error message
// 4. Stack