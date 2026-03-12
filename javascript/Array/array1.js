let buah = ['Pepaya', 'Mangga', 'Pisang', 'Jambu']; //deklarasi sebuah array
buah[2] = "Durian";
buah.length = 2;
let angka = new Array(10, 20, 30); //deklarasi menggunakan new array
console.log(angka);
let arrKosong = new Array(5);
let angka1 = [1, 2 ,3];
//panjang data, bukan data atau value
for(let i=0; i < arrKosong.length; i++){
    arrKosong[i] = i + 1;
}
Array.prototype.tampilkan = function(){
    console.log(this.join("-"));
}
let data = [10, 20, 30];
let bukanArray = "Hello";
buah.push("Semangka");
console.log(buah);
buah.pop();
console.log(buah);
buah.unshift("Semangka");
console.log(buah);
buah.shift();
console.log(buah);


let warna = ["Merah", "Biru", "Hijau"];
warna.tampilkan()
console.log(buah[0]);
console.log(buah[1]);
console.log(buah[2]);

console.log(arrKosong);
console.log(arrKosong[0]);
console.log(angka);
console.log(buah.length);
console.log(angka1.constructor);
console.log(Array.isArray(data));
console.log(Array.isArray(bukanArray));