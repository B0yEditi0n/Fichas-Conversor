//document.getElementById('contaFerimento').addEventListener('beforeinput', editFerimento) //escrever valores
document.getElementById('contaFerimento').addEventListener('change', editFerimento)

function editFerimento(){
    var ferimento = document.getElementById('contaFerimento').value
    console.log()
    var aVigor = modificacaoPower.bResistencia + modificacaoPower.rolamentoDefensivo
    console.log()
    
    var aVigor = document.getElementById('dResistencia').innerText = `${parseInt(aVigor) - parseInt(ferimento)}`
}