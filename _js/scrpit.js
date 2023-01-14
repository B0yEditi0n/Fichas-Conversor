//Importar json
// Personagem nº.json
// Nolham - Caio.json
// Jonny Texte.json
// Ofensivo.json
// pathFicha = 'Ele_(Pedro).json'
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
  //define a configruação de visão
    configuraLayoutPage()
        
  }
  
function configuraLayoutPage(){
  if (window.sessionStorage.getItem('setViewType') == 2){
    document.getElementById('optCombat').style = "display: block;"
    document.getElementById('conditbox').style = "display: none"
    document.getElementById('Ofensiva').style = 'padding-right: 0px;'
    document.getElementById('img').style = 'width: 200px; height: 300px;'
    document.getElementById('corpo').style = 'display: block; padding-left: 0.7cm; padding-top: 0cm;'
    window.getSelection(html).style = 'background-color: black'
  }

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

/*********************************************
* 
**********************************************/
