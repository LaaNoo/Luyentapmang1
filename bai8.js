//Bài 8- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử. Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.

let number10 = [ 10, 100,1, 2 ,3, 4, 5, 6, 7 ,4 ,3];


number10.sort(function(a, b) {
    return b - a;
});


console.log("Mảng sau khi sắp xếp giảm dần:");
console.log(number10);