/*document.getElementById('uploadFile').addEventListener('change', fct);
//document.getElementById('btnUp').addEventListener('onclick', opeWindos)
async function fct(evento){
    console.log(evento.target.files[0])
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(evento.target.files[0])
}
async function onReaderLoad(evento){
    var obj = JSON.parse(evento.target.result);
    window.sessionStorage.setItem('JSONfile', JSON.stringify(obj));
    window.location.href="./Ficha.html";
    //console.log(window.localStorage.getItem('JSONfile'))
    //window.open('./Ficha.html', '_self') 
    if(window.confirm()){
        //window.open('./Ficha.html', '_self')
    }
}

*/
document.getElementById('btnShow').addEventListener('click', setGameType)
document.getElementById('btnPrint').addEventListener('click', setpPrintType)
document.getElementById('uploadFile').addEventListener('change', fct);


async function fct(evento){
    console.log(evento.target.files[0])
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(evento.target.files[0])
}
async function onReaderLoad(evento){
    var obj = JSON.parse(evento.target.result);
    window.sessionStorage.setItem('JSONfile', JSON.stringify(obj));
    console.log(window.sessionStorage.getItem('JSONfile'))
    //window.open('./Ficha.html', '_self') 
}
async function setGameType(){
    window.sessionStorage.setItem('setViewType', '1');
    if(window.sessionStorage.getItem('JSONfile') == null){
        window.alert('Carregue um Json de Ficha')
    }
    else{
        window.location.href="./Ficha.html";
    }
}
async function setpPrintType(){
    window.sessionStorage.setItem('setViewType', '2');
    if(window.sessionStorage.getItem('JSONfile') == null){
        window.alert('Carregue um Json de Ficha')
    }
    else{
        window.location.href="./Ficha.html";
    }
}