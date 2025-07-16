let b = document.getElementById("caroGame");
let arr = [];
let data = "";
for (let i=0;i<5; i++ ){
    arr[i] = new Array( 0,0,0,0,0);
}
for (let i=0;i <5; i++){
    data += "<br>";
    for (let j=0;j<5; j++){
        data += arr[i][j] + "&nbsp;&nbsp;";
    }
}
data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
b.innerHTML = data;
function changeValue() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data= "";
    arr[positionX][positionY]= "X";
    for (let i=0;i < 5; i++ ){
        data+= "<br>";
        for (let j=0;j<5; j++){
            data += arr[i][j] + "&nbsp;&nbsp;&nbsp;";
        }
    }
    data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
    b.innerHTML = data;

}