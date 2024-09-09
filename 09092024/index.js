const demo = document.getElementById("demo");

// // untuk perulangan/loop for, sama seeperti yang di python, tetapi yang bedanya ada perintah (let i=0;i<variable.sesuatu;i++). [for(expression1; expression2; expression3)]

// // cara 1
// const laguSia = ["Chandelier", "Elastic Heart", "Titanium", "Diamonds", "Big Girls Cry", "Music", "Nowhere to Be"];

// let text = "";
// for (let i=0; i<laguSia.length;i++){
//     text+=laguSia[i]+"<br>";
// }

// document.getElementById("demo").innerHTML=text;

// // cara 2
// // pada cara ini, dia akan menghitung dari batas i=0 sampai dengan i<5
// let text = "";
// for (let i=0; i<=5;i++){
//     text+="The Number is " +i+ "<br>";
// }
// document.getElementById("demo").innerHTML=text;








// // untuk for in loop

// cara1 dengan menggunakan object

// const artis ={name: "Sia", name:"Jimm",name:"Jack", age:26,age:18, age:78}; //yang tertampil adalah Jimm 19 karena dia terbacanya data yang paling terbaru didefenisikan/berdasarkan urutan
// // misa seperti kaya : const artis ={name: "Sia", name:"Jimm",name:"Jack", age:26,age:18};, maka yang keluar adalah Jack 78
// // jika bnetuknya sepeerti : const artis ={name: "Sia", name2:"Jimm",name3:"Jack", age:26,age2:18, age3:78};, maka akan menampilkan semuanya berdasarkan dengan urutannya

// let txt="";
// for (let i in artis){
//     txt += artis[i]+ " ";
// }
// document.getElementById("demo").innerHTML=txt;


// // cara2 dengan menggunakan array
// // pada cara2 akan menampilkan angka pada array secara berurutan dengan menggunakan <br> sebagai newline antar satu angka dengan angka yang laiinnnya
// const angka=[45, 25, 27, 22, 29, 856, 100];

// let text = "";
// for(let x in angka){
//     text += angka[x]+"<br>";
// }

// document.getElementById("demo").innerHTML=text;





// // MAP

// const laguSia = new Map([
//     ["Chandelier", 3],
//     ["Cheap Thrills", 4],
//     ["Titanium", 2],
//     ["Elastic Heart", 6]
// ]);

// // hanya ciba untuk menampilkan seluruh data :)
// let text ="";

// laguSia.forEach((value, key) => {
//     text += key + " : " + value + "<br>";
// });


// // document.getElementById("demo").innerHTML=text;
// // document.getElementById("demo").innerHTML=laguSia.get("Chandelier")
// // document.getElementById("demo").innerHTML=laguSia.get("Elastic Heart")











// ITERASI MAP

let recipeMap = new Map ([
    ["timun", 500],
    ["tomat", 700],
    ["cabe", 4000], 
    ["bawang", 500]
]);

// // bentuk ini akan menampilkan key yang paling terakhir, yaitu bawang
// for(let bumbu of recipeMap.keys()){
//     document.getElementById("demo").innerHTML = bumbu;
// }

// // bentuk ini akan menampilkan values dari key yang paling terakhir, yaitu 500
// for(let qty of recipeMap.values()){
//     document.getElementById("demo").innerHTML = qty;
// }

// // bentuk ini akan menampilkan key dan value yang paling terakhir, yaitu bawang 500
// for (let dataResep of recipeMap){
//     document.getElementById("demo").innerHTML=dataResep;
// }


// // bentuk ini akan menampilkan key yang paling terakhir, yaitu bawang : 500
// recipeMap.forEach((value, key, map)=>{
//     document.getElementById("demo").innerHTML=`${key} : ${value}`
// });



// // dengan menggunakan array
// let map = new Map([
//     ["1", "satu"],
//     [1, "one"],
//     [true, "bool"]

// ]);

// // disini nanti akan mendapatkan value berdasarkan dengan key yang kita masukan kedalam map.getnya
// document.getElementById("demo").innerHTML=map.get("1");
// document.getElementById("demo").innerHTML=map.get(1);



// let objek ={
//     nama: "Jimm",
//     age: 19
// }

// // ini akan menampilkan data berdasarkan dengan key dictionary yang dimasukan kedalam map.get nya
// let map = new Map(Object.entries(objek));
// document.getElementById("demo").innerHTML = map.get("nama");