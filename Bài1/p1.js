
let x = 0;
let array = Array();
function addElement(){
    array[x] = document.getElementById("element").value;
    alert("Element: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById("element").value = "";
}
function displayElement(){
    let e = "<hr>";
    for (let i = 0; i < array.length; i++) {
        e += "element" + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e ;
}