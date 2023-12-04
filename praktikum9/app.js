// import method dalam controller
const { index, store, update, destroy } = require('./FruitController') 

const main = () => {
    console.log(`Menambahkan data buah-buahan:`);
    index()
    
    console.log('\n');
    store('Alpukat')

    console.log('\n')
    update(0, 'Kelapa')

    console.log('\n')
    destroy(0)
}

main()


