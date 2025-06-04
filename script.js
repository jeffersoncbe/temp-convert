function converterCtoF(tempC) {
    const tempF = (tempC * 9/5) + 32
    console.log(`Temp. em Fahrenheit = ${tempF} F`);
    return tempF;
}

function converterCtoK(tempC) {
    const tempK = tempC + 273.15
    console.log(`Temp. em Kelvin = ${tempK} K`);
    return tempK;
}

function converter(temp) {}
    console.log('Ei! Clicou!')

 if (temp === 'F') {
    let tempC = parseFloat(document.getElementById('tempC').value);
    console.log(`Temp ºC: ${tempC}`);

    // Mostrar Resultado
    document.getElementsByClassName('resultado')[0].style.display = 'flex'

 
    // Chamando a função que converte de Celcius para Farenheit

    const resultado = converterCtoF(tempC);
    document.getElementById('resultado').innerHTML = `${resultado} F`; 


    const resultadoK = converterCtoK(tempC);
    document.getElementById('resultado').innerHTML = `${resultadok} K`; 
    
}

function limpar() {
    console.log('Limpou!')

    // Limpar/Ocultar Resultado
    document.getElementsByClassName('resultado')[0].style.display = 'none'

} 