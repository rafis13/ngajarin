const namaMantan = ["Niki", "Rahmah","Tyas"]

namaMantan.forEach(function(item,index,array){
    console.log(item,index)
})

//Nambahin Satu Variabel Baru
namaMantan.push("Fara")

console.log(namaMantan)

//Kurangin Satu Objek Diakhir
namaMantan.pop();

console.log(namaMantan)

//Kurangin satu objek diawal
namaMantan.shift();

console.log(namaMantan)

//Nambahin Satu objek Diawal
namaMantan.unshift("Niki")

console.log(namaMantan)

