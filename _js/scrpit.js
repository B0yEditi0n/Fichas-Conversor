//Importar json
// Personagem nº.json
// Nolham - Caio.json
pathFicha = 'Personagem 1.json'
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
}


//Atomatizador de Trocas de Dados
function Elemento(idElemento, pJson){
    document.getElementById(idElemento).innerText = pJson    
}

// não é possivel fazer ponteiros...
async function gera_modelo(ficha){
  console.log(ficha)
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
   * Defesas
  ***********************************************************************************/
  console.log(ficha['characters'][0]['defenses'])
  modificacaoPower.defesa(ficha['characters'][0]['defenses'])
  
  Elemento('dEsquiva', modificacaoPower.htmlEsquiva)
  Elemento('dAparar', modificacaoPower.htmlAparar)
  Elemento('dResistencia', modificacaoPower.htmlResistencia)
  Elemento('dFortitude', modificacaoPower.htmlFortitude)
  Elemento('dVontade', modificacaoPower.htmlVontade)

  /**********************************************************************************
   * Perícia
  ***********************************************************************************/ 
  
  modificacaoPower.pericia(ficha['characters'][0]['skills'])
  document.getElementById('pericias_padrao1').innerHTML = '<table>' + modificacaoPower.HTML_Pericia1 + `</table>`;
  document.getElementById('pericias_padrao2').innerHTML = '<table>' + modificacaoPower.HTML_Pericia2 + `</table>`;

  /**********************************************************************************
   * Pericias Extras
   * ********************************************************************************/
  var htmlDado
  htmlDado += `<table>`
  
  for(i=0; i <= ficha['characters'][0]['extraSkills'].length -1; i++){
    //Especialidade 

    if(ficha['characters'][0]['extraSkills'][i]['name'].startsWith('Especialidade')){
      bonus = ficha['characters'][0]['abilities'][5]['rank']
    }
    if(ficha['characters'][0]['extraSkills'][i]['name'].startsWith('Combate À Distância')){
      bonus = ficha['characters'][0]['abilities'][3]['rank']
    }
    if(ficha['characters'][0]['extraSkills'][i]['name'].startsWith('Combate Corpo-a-corpo')){
      bonus = ficha['characters'][0]['abilities'][4]['rank']
    }

    Pericianome = ficha['characters'][0]['extraSkills'][i]['name']
    GradPericia = ficha['characters'][0]['extraSkills'][i]['rank']
    
    htmlDado += `<tr><td>${Pericianome}[${GradPericia}]: +${GradPericia + bonus}</td></tr>`
    
  }  
  htmlDado += '</table>'

  document.getElementById('extra_pericias').innerHTML = htmlDado;

  /**********************************************************************************
  * Vantagem
  ***********************************************************************************/     
    htmlDado = ''
    modificacaoPower.vantagem(ficha['characters'][0]['advantages'])
    document.getElementById('vantagens1').innerHTML = `<table>` + modificacaoPower.HTML_vantagem1 +`</table>`
    document.getElementById('vantagens2').innerHTML = `<table>` + modificacaoPower.HTML_vantagem2 + `</table>`
        

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
    * Poderes
    ***********************************************************************************/

  
  
} 