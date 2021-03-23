var valorEmAnoText = prompt("Qual valor em ano luz que você quer converter?")

var valorEmAnoNumber = parseFloat(valorEmAnoText)

var valorEmKm = valorEmAnoNumber * 9.461
var valorEmKmFixado = valorEmKm.toFixed(4)

alert(valorEmKmFixado)

// Revisão
// variáveis var int - float - string
// alert - parseInt - parseFloat - prompt
// operações + somar * multiplicar
