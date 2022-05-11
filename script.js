//Sistema de conversão
function convert(){

    //ENCONTRANDO VALOR
    var convertText = document.getElementById("raw-text").value;
    //CONVERTENDO PARA MAIÚSCULO
    convertText = convertText.toUpperCase();
    //CONVERTENDO O ESPAÇAMENTO
    convertText=convertText.replace(/\n\n\n/g, '\n');
    convertText=convertText.replace(/\n\n/g, '\n');
    convertText=convertText.replace(/\n/g, '\n\n');
    //DEVOLVENDO VALOR
    document.getElementById('converted-text').value = convertText;
    console.log('texto depois da conversão: ' + convertText);
}
//Copiar texto
function copy() {
    var copyText = document.getElementById("converted-text");
    copyText.select();
    document.execCommand("copy");
}
