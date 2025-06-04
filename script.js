function converterCtoF(tempC) {
    const tempF = (tempC * 9 / 5) + 32;
    console.log(`Temp. em Farenheit = ${tempF} F`);
    /* o return retorna o que é desejado, neste caso a temp convertida que está na variável tempF */
    return tempF;
}

function converterCtoK(tempC) {
    const tempK = tempC + 273.15;
    console.log(`Temp. em Kelvin = ${tempK} k`);

    return tempK;
}

function converter(temp) {
    console.log('Ei Clicou!', temp);

    /* parseFloat() converte para decimal, pois estava vindo no formato de string, exemplo '18' */
    let tempC = parseFloat(document.getElementById('tempC').value);
    let resultado = 0;

    console.log(`Temp Celsius: ${tempC} °C`);

    if (temp === 'F') {
        /* Chamando a função que converte de C para F */
        resultado = converterCtoF(tempC);
    } else if (temp === 'K') {
        /* Chamando a função que converte de C para K */
        resultado = converterCtoK(tempC);
    }

    /* Exibe o reultado na tag que possui um id chamado resultado no HTML */
    document.getElementById('resultado').innerHTML = `${resultado} ${temp}`;

    /* Exibir a div com a temperatura assim que o valor estiver setado em F */
    document.getElementsByClassName('resultado')[0].style.display = 'flex'

}

function limpar() {
    console.log('limpou!');
    //document.getElementById('resultado').innerHTML = ''

    /* Limpa (Oculta) */
    document.getElementsByClassName('resultado')[0].style.display = 'none'
}
