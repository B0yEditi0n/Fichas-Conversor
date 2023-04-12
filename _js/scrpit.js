
modificacaoPower = new powerHabilidade

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
  }

  document.documentElement.setAttribute( 'data-theme', window.sessionStorage.getItem('theme'))

  

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
