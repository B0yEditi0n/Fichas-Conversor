//Importar json
(fetch("Nolhan Homes.json")
  .then(res => res.json()
  .then(json => gera_modelo(json))))

//Atomatizador de Trocas de Dados
function Elemento(idElemento, pJson){
    document.getElementById(idElemento).innerText = pJson    
}

// não é possivel fazer ponteiros...
function gera_modelo(ficha){
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
  htmlDado = '<tr>'
  for(i=0; i++; i <= ficha['characters'][0]['skills'].length){
    Pericianome = ficha['characters'][0]['skills'][i]['name']  
    GradPericia = ficha['characters'][0]['skills'][i]['rank']
    htmlDado += `<th>${Pericianome}: ${GradPericia}</th>`
     
  }
  htmlDado += `<tr>`
  document.getElementById('pericias_padrao').innerHTML = htmlDado;
