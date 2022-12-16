let hesapMakinesi = document.getElementById('hesapla');

function calculatorInput(val){
    hesapMakinesi.value+=val;
}
function solve(){
    let sayi1 = hesapMakinesi.value;
    let sayi2 = eval(sayi1);
    hesapMakinesi.value = sayi2;
}

function clr(){
    hesapMakinesi.value = " ";
}