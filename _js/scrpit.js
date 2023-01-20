modificacaoPower = new powerHabilidade

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
  if(img == undefined || img == ''){
    document.getElementById('imgPersonagem').class = 'ImgOFF'
    document.getElementById('imgPersonagem').style = 'border: 0px solid'
  }
}