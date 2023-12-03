//Bài 9-  Viết chương trình khởi tạo/nhập vào 2 mảng nguyên gồm 10 phần tử, gọi là mảng a và b. Bảng c là một mảng được khai báo bao gồm 20 số nguyên tử. Chương trình sẽ lưu các phần tử được kết nối từ hai mảng b và một mảng c. Hiển thị mảng c.


let a = [ 10, 1, 2 ,3, 4, 5, 6, 7 ,4 ,3];
let b = [ 1 , 2,4,5, 5,6,6, 77 , 7 ,7];
let c=[];
c = c.concat(a, b);


console.log("Mảng c sau khi kết nối:");
console.log(c);