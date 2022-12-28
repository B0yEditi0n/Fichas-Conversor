//Importar json
// Personagem nº.json
// Nolham - Caio.json
// Jonny Texte.json
pathFicha = 'Michel Jackson.json'
// (fetch('Nolham - Caio.json')
//   .then(res => res.json()
//   .then(json => gera_modelo(json)))
//   )

//***********************************
  Inicio()
//***********************************

async function getJson(patch) {
  const getFile = await fetch(patch);
  const Exportjson = await getFile.json();
  return(Exportjson)
}
async function Inicio(){

  await callPower()  
  //Chama imagem
  
}

async function geraImage(img){
  if(img != undefined){
    document.getElementById('imgPersonagem').src = img
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
  Elemento('nJogador', ficha['characters'][0]['playerName'])
  Elemento('NivelPoder', ficha['characters'][0]['powerLevel'])

  modificacaoPower = new powerHabilidade
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
  
  htmlDado = '<UL>'
  for(i = 0; i <= ficha['characters'][0]['complications'].length - 1; i++){
    htmlDado += `<LI><strong>${ficha['characters'][0]['complications'][i]['title']}:</strong> ${ficha['characters'][0]['complications'][i]['description']}</LI>`
  }
  htmlDado += '</UL>'
  document.getElementById('complicacoes').innerHTML = htmlDado
  
  /**********************************************************************************
  * Ofensiva
  ***********************************************************************************/
  startOfense(ficha)

  
} 