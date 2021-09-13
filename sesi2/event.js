const { CONNREFUSED } = require('dns')
const EventEmitter = require('events')
class MyEmitter extends EventEmitter {}
let myEmitter = new MyEmitter()


function dengerlagu() {
    console.log("Nisa sabyan")
}
// untuk nge Listen -> jalanin fc kaget 
myEmitter.on('102.2 FM', dengerlagu)

//  Prambons
// myEmitter.emit('102/2 FM')

myEmitter.on('error', function(){
console.log('terjadi kesalahan')
console.log(error)
})
 
// myEmitter.emit('error', new Error("Radioo rusak "))

myEmitter.on('102.2 FM', function () {

})

// myEmitter.emit('102/2 FM')

// deprecated itu fiturnya masih bisa tapi siap" gak bisa dipake lagi di update berikutnya
let listenerCount = EventEmitter.listenerCount(myEmitter, '102.2 FM')

console.log('Ada', +listenerCount +'listener skarang')

// Eror ada 3 bagian 1 pesan nya 2 lokasinya 

console.log(new Error('Hey'))