let arr = [-3,1,4,6,3,7];
let first = 0;
let last = arr.length -1;
while (first < last){
    let b = arr[first];
    arr[first] = arr[last]
    arr[last] = b
    first++;
    last--;
}
document.write(arr)