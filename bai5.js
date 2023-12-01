//Viết chương trình đếm số nguyên trong một chuỗi

let soNguyen = ["ngày", 29 , "thang", 11, "năm", 2023 , "CodeGym" , "Huế"];
let demSo = 0;

for (let i= 0; i < soNguyen.length; i++){
    if (typeof(soNguyen[i]) == "number"){
        console.log(typeof(soNguyen[i]));
        demSo++;
    }
}

console.log(demSo);