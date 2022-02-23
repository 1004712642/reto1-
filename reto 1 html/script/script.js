
const array = (["dolar","peso mexicano","peso colombiano","euro","libra esterlina"]);
array.forEach = document.getElementById(btnboton);


let boton = document.getElementById('btnboton');

boton.addEventListener('click',capturardatos)

function capturardatos(){
    let dolar = document.getElementById('do').value;
    let pesomexicano = document.getElementById('pm').value;
    let pesocolombiano = document.getElementById('pc').value;
    let euro = document.getElementById('eu').value;
    let libraesterlina = document.getElementById('li').value;
    let numero = document.getElementById('numero').value;
    let resultados = document.getElementById('resultados').value;


}