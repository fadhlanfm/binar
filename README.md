# binar
function rendam() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Mulai rendam. Setelah ini kucek")
            resolve();
        }, 3000);
    })
}

function kucek() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Sedang kucek. Setelah ini bilas")
            resolve();
        }, 2000);
    })
}

function bilas() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Sedang bilas. Setelah ini jemur")
            resolve()
        }, 1000);
    })
}

function jemur() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Sedang jemur. Setelah ini setrika")
            resolve()
        }, 5000);
    })
}

function setrika() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Sedang setrika. Setelah ini selesai")
            resolve()
        }, 4000);
    })
}

// rendam();
// kucek();
// bilas();
// jemur();
// setrika();

let myPromise = (callback) => {
    return new Promise((resolve, reject) => {
        callback();
        resolve();
    })

}

// .then(bilasPromise)
// .then(jemurPromise)
// .then(setrikaPromise)

// Output:
// Sedang bilas. Setelah ini jemur
// Sedang kucek. Setelah ini bilas
// Mulai rendam. Setelah ini kucek
// Sedang setrika. Setelah ini selesai
// Sedang jemur. Setelah ini setrika

// Ekspektasi:
// Mulai rendam. Setelah ini kucek
// Sedang kucek. Setelah ini bilas
// Sedang bilas. Setelah ini jemur
// Sedang jemur. Setelah ini setrika
// Sedang setrika. Setelah ini selesai

// const posts = [
//     { title: "Post One", body: "This is post one" },
//     { title: "Post Two", body: "This is post two" },
//   ]


// rendam()
//     .then(kucek)
//     .then(bilas)
//     .then(jemur)
//     .then(setrika)

async function nyuci() {
    await rendam()
    await kucek();
    await bilas();
    await jemur();
    await setrika();
}   

nyuci()
