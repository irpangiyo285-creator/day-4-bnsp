// const daftarbarang =[
// "Laptop",
// "Mouse",
// "Keybord",

// ];

// console.log(daftarbarang[0]);
// console.log(daftarbarang[1]);
// console.log(daftarbarang[2]);
// console.log(daftarbarang.length);

// const barang = {
//     kode: "INV-001",
//     nama: "laptop",
//     stok: 10,
//     harga:7500000
// };

// console.log(`kode: ${barang.kode}`);
// console.log(`nama: ${barang.nama}`);
// console.log(`stok: ${barang.stok}`);
// console.log(`harga: ${barang.harga}`);
 
// const stok = 0;
// const status = "habis";

// if (stok === 0|| status === "habis") {
//     console.log("periksa ketersedian barang")
    
// }

// for (let i = 10; i >= 1; i--){
//     console.log("perulangan ke-",i);
// }

// for (let i = 10; i >= 1; i--) {
//     if (i % 2 === 0) {
//         console.log("perulangan ke-", i, "→ genap");
//     } else {
//         console.log("perulangan ke-", i, "→ ganjil");
//     }
// }

// const daftarBarang = [
// "laptop",
// "mouse",
// "keybord",
// "monitor",
// ];
// for (let i = 0; i <daftarBarang.length; i++){
// console.log(daftarBarang[i]);
// }

function tentukanStatusStok(stok) {
    if (stok ==0) {
        return "habis";
    } else if (stok <5) {
        return "menipis";
    } else {
        return "aman";
    }
}

console.log(tentukanStatusStok(0));
console.log(tentukanStatusStok(3));
console.log(tentukanStatusStok(15));