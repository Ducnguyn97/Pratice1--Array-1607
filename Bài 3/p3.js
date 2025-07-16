let value = parseInt(prompt("Nhập vào giá trị trong mảng"));
let arr = [-3,5,4,3,7,8,10,11,17];
let index = -1
for (let i =0; i < arr.length; i++) {
    if (value == arr[i]) {
        index = i;
    }
}
if(index > -1){
    alert("Số " + value + " vị trí thứ "+ index);
}else{
    alert("Số " + value + " không tìm thấy ví trí trong mảng")
}
