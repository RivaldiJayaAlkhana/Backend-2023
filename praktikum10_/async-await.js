const persiapan = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Menyiapkan Bahan ...");
        }, 3000);
    });
};

const rebusAir = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Merebus Air ...");
        }, 7000);
    });
};

const masak = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Masak Mie ...");
        }, 5000);
    });
};

const second = async () => {
    const hasilPersiapan = await persiapan();
    console.log(hasilPersiapan);

    const hasilRebusair = await rebusAir();
    console.log(hasilRebusair);

    const hasilMasak = await masak();
    console.log(hasilMasak);
    
};

second();