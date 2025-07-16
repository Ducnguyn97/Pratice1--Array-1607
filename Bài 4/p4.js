let arr = [-3,5,6,7,8,9,1,15]
let max = arr[0];
let index = 0;
for (let i = 1; i < arr.length; i++) {
    if(arr[i] > max){
        max = arr[i];
        index = i;
    }
}
alert("max: " + max + "a t position " + index);