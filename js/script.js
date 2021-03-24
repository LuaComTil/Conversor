function convert(){

    //ENCONTRANDO VALOR
    var convertText = document.getElementById("oldText").value;
    //CONVERTENDO PARA MAIÚSCULO
    convertText = convertText.toUpperCase();
    //CONVERTENDO O ESPAÇAMENTO
    convertText=convertText.replace(/\n\n\n/g, '\n');
    convertText=convertText.replace(/\n\n/g, '\n');
    convertText=convertText.replace(/\n/g, '\n\n');
    //DEVOLVENDO VALOR
    document.getElementById('newText').value = convertText;
    console.log('texto depois da conversão: ' + convertText);
}
function copy() {
    var copyText = document.getElementById("newText");
    copyText.select();
    document.execCommand("copy");
}