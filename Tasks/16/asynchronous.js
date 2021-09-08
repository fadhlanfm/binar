// Urutan mencuci baju yang benar
// 1. Rendam
// 2. Kucek
// 3. Bilas
// 4. Jemur
// 5. Setrika

function rendam() {
  setTimeout(function() { 
    console.log("Mulai rendam. Setelah ini kucek")
  }, 3000);
}

function kucek() {
  setTimeout(function() {
    console.log("Sedang kucek. Setelah ini bilas")
  }, 2000);
}

function bilas() {
  setTimeout(function() {
    console.log("Sedang bilas. Setelah ini jemur")
  }, 1000);
}

function jemur() {
  setTimeout(function() {
    console.log("Sedang jemur. Setelah ini setrika")
  }, 5000);
}

function setrika() {
  setTimeout(function() {
    console.log("Sedang setrika. Setelah ini selesai")
  }, 4000);
}

rendam();
kucek();
bilas();
jemur();
setrika();

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
