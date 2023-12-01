//Bài 6-  Viết chương trình khởi tạo/nhập vào một số nguyên mảng bao gồm 10 phần tử, nhập/tạo phần tử số nguyên V. Chương trình tìm kiếm V có nằm trong số nguyên mảng không? Nếu V thuộc mảng số nguyên thì in ra "V nằm trong mảng" còn in ra "V không nằm trong mảng".

let khoiTao = ["ngày", 29 , "thang", 11, "năm", 2023 , "CodeGym" , "Huế", 1, 12 ];
let kT = 2023;
let kQ = 0;


for ( let i = 0 ; i < khoiTao.length; i++){
    if (khoiTao[i] === kT){      
        console.log(+kT + " có nằm trong mảng ");
        break;

    } else {
        kQ ++;
    }
}
if (kQ == khoiTao.length){
console.log(+kT + " Không có nằm trong mảng ");
}
