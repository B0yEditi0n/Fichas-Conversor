
//Importar json
// Personagem nº.json
// Nolham - Caio.json
pathFicha = 'Personagem nº.json'
// (fetch('Nolham - Caio.json')
//   .then(res => res.json()
//   .then(json => gera_modelo(json)))
//   )
async function getJson(patch) {
  const getFile = await fetch(patch);
  const Exportjson = await getFile.json();
  return(Exportjson)
}
callPower()
gera_modelo()


//Atomatizador de Trocas de Dados
function Elemento(idElemento, pJson){
    document.getElementById(idElemento).innerText = pJson    
}

// não é possivel fazer ponteiros...
async function gera_modelo(){
  ficha = JSON
  ficha = await getJson(pathFicha)
  /**********************************************************************************
   * Titulo da Ficha
  ***********************************************************************************/
  Elemento('nPersonage', ficha['characters'][0]['name'])
  Elemento('nJogador', ficha['characters'][0]['playerName'])
  Elemento('NivelPoder', ficha['characters'][0]['powerLevel'])

  
  /**********************************************************************************
   * Atributos principais
  ***********************************************************************************/
  Elemento('aForca', ficha['characters'][0]['abilities'][0]['rank'])
  Elemento('aVigor', ficha['characters'][0]['abilities'][1]['rank'])
  Elemento('aAgilidade', ficha['characters'][0]['abilities'][2]['rank'])
  Elemento('aDestreza', ficha['characters'][0]['abilities'][3]['rank'])
  Elemento('aLuta', ficha['characters'][0]['abilities'][4]['rank'])
  Elemento('aIntelecto', ficha['characters'][0]['abilities'][5]['rank'])
  Elemento('aProntidao', ficha['characters'][0]['abilities'][6]['rank'])
  Elemento('aPresenca', ficha['characters'][0]['abilities'][7]['rank'])
  
  /**********************************************************************************
   * Defesas
  ***********************************************************************************/
  Elemento('dEsquiva', ficha['characters'][0]['defenses'][0]['rank'])
  Elemento('dAparar', ficha['characters'][0]['defenses'][1]['rank'])
  Elemento('dResistencia', ficha['characters'][0]['defenses'][2]['rank'])
  Elemento('dFortitude', ficha['characters'][0]['defenses'][3]['rank'])
  Elemento('dVontade', ficha['characters'][0]['defenses'][4]['rank'])

  /**********************************************************************************
   * Perícia
  ***********************************************************************************/ 

  htmlDado = '<table>'
  for(i=0;(i) <= ficha['characters'][0]['skills'].length - 1; i++){
    Pericianome = ficha['characters'][0]['skills'][i]['name']  
    GradPericia = ficha['characters'][0]['skills'][i]['rank']

    //baseado em qual habilidade?
    //força 0 Vigor 1 Agilidade 2 Destreza 3 Luta 4 Intelecto 5 Prontidao 6 Presença 7
    switch (ficha['characters'][0]['skills'][i]['id']){
      case 3001: //Acrobacias

        bonus = ficha['characters'][0]['abilities'][2]['rank']
        break;
      case 3002: //Atletismo
        bonus = ficha['characters'][0]['abilities'][0]['rank']
        break;
      case 3003: //Enganação
        bonus = ficha['characters'][0]['abilities'][7]['rank']
        break;
      case 3004: //Furtividade 
        bonus = ficha['characters'][0]['abilities'][2]['rank']
        break;
      case 3005: //Intimidação
        bonus = ficha['characters'][0]['abilities'][7]['rank']
        break;
      case 3006: //Intuição
        bonus = ficha['characters'][0]['abilities'][6]['rank']
        break; 
      case 3007: //Investigação
        if(GradPericia == 0){
          bonus = 0;
        }else{bonus = ficha['characters'][0]['abilities'][5]['rank']}
        break; 
      case 3008: //Percepção
        bonus = ficha['characters'][0]['abilities'][6]['rank']
        break;
      case 3009: //Persuasão
        bonus = ficha['characters'][0]['abilities'][7]['rank']
        break;
      case 3010: //Prestidigitação
        if(GradPericia == 0){ 
          bonus = 0
        }
        else{bonus = ficha['characters'][0]['abilities'][3]['rank']}
        
        break;
      case 3011: //Tecnologia
        if(GradPericia == 0){ 
          bonus = 0
        }
        else{bonus = ficha['characters'][0]['abilities'][5]['rank']}
        break;
      case 3012: //Tratamento
        if(GradPericia == 0){
          bonus = 0
        }
        else{bonus = ficha['characters'][0]['abilities'][5]['rank']}        
        break;
      case 3013: //Veiculos
        bonus = ficha['characters'][0]['abilities'][3]['rank']
        break;        

    }
        
    htmlDado += `<tr><td>${Pericianome}[${GradPericia}]: +${GradPericia + bonus}</td></tr>`
       

    //quebra de pagina
    if( i == Math.floor(ficha['characters'][0]['skills'].length/2)){
      htmlDado += `</tr><tr>`
    }
    
  }
  htmlDado += `</table>`

  document.getElementById('pericias_padrao').innerHTML = htmlDado;

  /**********************************************************************************
   * Pericias Extras
   * ********************************************************************************/

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
    htmlDado = '<table>'
    for(i=0; i <= ficha['characters'][0]['advantages'].length - 1; i++){
      if (ficha['characters'][0]['advantages'][i]['rank'] > 1){
        htmlDado += `<tr><td>${ficha['characters'][0]['advantages'][i]['name']}[${ficha['characters'][0]['advantages'][i]['rank']}]</td></tr>`
      }
      else{
        htmlDado += `<tr><td>${ficha['characters'][0]['advantages'][i]['name']}</td></tr>`  
      }
    }
    htmlDado += `</table>`
    document.getElementById('vantagens').innerHTML = htmlDado

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