document.getElementById('uploadFile').addEventListener('change', fct);
//document.getElementById('btnUp').addEventListener('onclick', opeWindos)
async function fct(evento){
    console.log(evento.target.files[0])
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(evento.target.files[0])
}
function onReaderLoad(evento){
    var obj = JSON.parse(evento.target.result);
    localStorage.setItem('JSONfile', JSON.stringify(obj));
    window.open('./Ficha.html') 
}


