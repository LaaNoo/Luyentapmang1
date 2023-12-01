//Bài 7- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử, nhập/tạo phần tử số nguyên V. Chương trình kiểm tra xem V có thuộc mảng đã cho không, nếu V thuộc mảng đã cho xoá V khỏi mảng (Bản chất việc xoá ở đây tức là dịch phần tử ở bên phải V sang vị trí của V, và gán 0 cho phần tử cuối cùng của mảng)

let khoiTao = ["ngày", 29 , "thang", 11, "năm", 2023 , "CodeGym" , "Huế", 1, 12 ];
let kT = 2023;
let kQ = 0;


for ( let i = 0 ; i < khoiTao.length; i++){
    if (khoiTao[i] === kT){      
        console.log(+kT + " có nằm trong mảng ");
        khoiTao.splice( i ,1);
        khoiTao.push(0);        
        console.log(khoiTao);
        break;

    } else {
        kQ ++;
    }
}
if (kQ == khoiTao.length){
console.log(+kT + " Không có nằm trong mảng ");
}

