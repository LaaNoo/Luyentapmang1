//Bài 3-  Viết chương trình khởi tạo mảng nguyên. Hiển thị giá trị lớn nhất trong mảng đó. In ra giá trị trung bình của các phần tử trong mảng.

let number10 = [ 10, 1, 2 ,3, 4, 5, 6, 7 ,4 ,3];
let max = 0;
let tB= 0;
for (let i = 0; i < number10.length; i++){
    if ( max < number10[i]){
        max = number10[i];
    }

    tB +=  number10[i];
}
tB = tB / number10.length;

console.log(max);
console.log(tB);