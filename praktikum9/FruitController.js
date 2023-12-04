//Mengimport data fruitss menggunakan require
const fruits = require('./data.js');

// menampilkan seluruh data
const index = () => {
    for ( const fruit of fruits) {
        console.log(fruit);
    }   
}


const store = (name) => {
    fruits.push(name);
    console.log(`Menambahkan data ${name}
    Daftar Buah`)
    index()
}

const update = (position, name) => {
    fruits[position] = name
    console.log(`Mengedit data ${position} dengan ${name}`)
    index()
}

const destroy = (position) => {
    fruits.splice(position, 1)
    console.log(`Menghapus data ${position}`)
    index()
}

destroy(0)

//mengexport method index dan store
module.exports = { index, store, update, destroy }