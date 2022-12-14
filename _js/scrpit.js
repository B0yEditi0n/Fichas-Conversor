//Importar json
// Personagem nº.json
// Nolham - Caio.json
// Jonny Texte.json
// Ofensivo.json
pathFicha = 'Ele_(Pedro).json'
modificacaoPower = new powerHabilidade
// (fetch('Nolham - Caio.json')
//   .then(res => res.json()
//   .then(json => gera_modelo(json)))
//   )

//***********************************
  Inicio()
//***********************************

var ficha = JSON

async function getJson(patch) {
  const getFile = await fetch(patch);
  const Exportjson = await getFile.json();
  return(Exportjson)
}

async function Inicio(){
  ficha = await JSON.parse(window.sessionStorage.getItem('JSONfile'))
  await callPower(ficha)  
  //Chama imagem
  
}

async function geraImage(img){
  if(img != undefined){
    document.getElementById('imgPersonagem').src = img
  }
  if(img == undefined || img == ''){
    document.getElementById('imgPersonagem').class = 'ImgOFF'
    document.getElementById('imgPersonagem').style = 'border: 0px solid'
  }
}

//Atomatizador de Trocas de Dados
function Elemento(idElemento, pJson){
  document.getElementById(idElemento).innerText = pJson    
}

// não é possivel fazer ponteiros...
async function gera_modelo(ficha){

  // Alguns poderes precisma ser carregados primeiro
  /**********************************************************************************
   * Titulo da Ficha
  ***********************************************************************************/
  Elemento('nPersonage', ficha['characters'][0]['name'])
  document.getElementById('InfoPersonagem_N1').innerText = ficha['characters'][0]['playerName']
  document.getElementById('InfoPersonagem_N1').innerText += ' NP '+ ficha['characters'][0]['powerLevel']
  Elemento('tituloTAB', ficha.portName)

  /**********************************************************************************
   * Atributos principais
  ***********************************************************************************/ 
  modificacaoPower.habilidade(ficha['characters'][0]['abilities'])
  Elemento('aForca', modificacaoPower.htmlForca)
  Elemento('aVigor', modificacaoPower.htmlVigor)
  Elemento('aAgilidade', modificacaoPower.htmlAgilidade)
  Elemento('aDestreza', modificacaoPower.htmlDestreza)
  Elemento('aLuta', modificacaoPower.htmlLuta)
  Elemento('aIntelecto', modificacaoPower.htmlIntelecto)
  Elemento('aProntidao', modificacaoPower.htmlProntidao)
  Elemento('aPresenca', modificacaoPower.htmlPresenca)

  /**********************************************************************************
  * Vantagem
  ***********************************************************************************/     
   htmlDado = ''
   modificacaoPower.vantagem(ficha['characters'][0]['advantages'])
   document.getElementById('vantagens1').innerHTML = `<table>` + modificacaoPower.HTML_vantagem1 +`</table>`
   document.getElementById('vantagens2').innerHTML = `<table>` + modificacaoPower.HTML_vantagem2 + `</table>`
  
  /**********************************************************************************
   * Defesas
  ***********************************************************************************/
  modificacaoPower.defesa(ficha['characters'][0]['defenses'])
  
  Elemento('dEsquiva', modificacaoPower.htmlEsquiva)
  Elemento('dAparar', modificacaoPower.htmlAparar)
  Elemento('dResistencia', modificacaoPower.htmlResistencia)
  Elemento('dFortitude', modificacaoPower.htmlFortitude)
  Elemento('dVontade', modificacaoPower.htmlVontade)

  /**********************************************************************************
   * Perícia
  ***********************************************************************************/ 
  modificacaoPower.pericia(ficha['characters'][0]['skills'], ficha['characters'][0]['extraSkills'])
  document.getElementById('pericias_padrao1').innerHTML = '<table>' + modificacaoPower.HTML_Pericia1 + `</table>`;
  document.getElementById('pericias_padrao2').innerHTML = '<table>' + modificacaoPower.HTML_Pericia2 + `</table>`;

  /**********************************************************************************
   * Complicações
   **********************************************************************************/
  
  htmlDado = '<ul>'
  for(i = 0; i <= ficha['characters'][0]['complications'].length - 1; i++){
    htmlDado += `<li><strong>${ficha['characters'][0]['complications'][i]['title']}:</strong> ${ficha['characters'][0]['complications'][i]['description']}</li>`
  }
  htmlDado += '</ul>'
  document.getElementById('complicacoes').innerHTML = htmlDado
  
  /**********************************************************************************
  * Ofensiva
  ***********************************************************************************/
  await equipamentos(ficha.characters[0].equipment)
  await startOfense(ficha)

  
} 