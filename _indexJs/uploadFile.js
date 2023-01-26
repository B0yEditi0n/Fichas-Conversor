
sessionStorage.setItem('JSONfile', null)
window.sessionStorage.setItem('theme', 'Dark')
window.sessionStorage.setItem('setViewType', '2');
console.log(document.getElementById('uploadFile').value)



/*document.getElementById('btnShow').addEventListener('click', setGameType)
document.getElementById('btnPrint').addEventListener('click', setpPrintType)
*/

document.getElementById('uploadFile').addEventListener('change', upJson);
//document.getElementById('uploadFile').input.onchange = fct()

document.getElementById('btnMenu').addEventListener('click', showMenu)
document.getElementById('btncloseMenu').addEventListener('click', closeMenu)

document.getElementById('TypShow').addEventListener('change', selectLayout)
document.getElementById('ColorTheme').addEventListener('change', themeSelect)
document.getElementById('checkDesarmado').addEventListener('change', setDesarmado)
// btnColorTheme btnTypShow btncloseMenu 

async function upJson(evento){
    console.log(evento.target.files[0])
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    console.log('evento disparado')
    reader.readAsText(evento.target.files[0])
}

async function onReaderLoad(evento){
    var obj = JSON.parse(evento.target.result);
    window.sessionStorage.setItem('JSONfile', JSON.stringify(obj));
    console.log(window.sessionStorage.getItem('JSONfile'))
    window.open('./Ficha.html', '_parent') 
    //document.location.reload();
}

/*async function setGameType(){
    window.sessionStorage.setItem('setViewType', '1');
    if(window.sessionStorage.getItem('JSONfile') == null){
        window.alert('Carregue um Json de Ficha')
    }
    else{
        window.location.href="./Ficha.html";
    }
}*/

/* Configurações do Menu */

function showMenu(){
    document.getElementById('btnMenu').style = 'display: none;'
    window.document.getElementById('menuDiv').style = 'display: block;'
}
function closeMenu(){
    window.document.getElementById('menuDiv').style = 'display: none;'
    document.getElementById('btnMenu').style = 'display: block;'
}

/* Tipo de Layout */
function selectLayout(event){
    valor = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd)

    if(valor == 'PLAY'){
        window.sessionStorage.setItem('setViewType', '1');
        
    }
    else {if(valor == 'PDF'){
        window.sessionStorage.setItem('setViewType', '2');
        
    }}
}


function themeSelect(event){
    var valor = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd)
    window.sessionStorage.setItem('theme', valor)
}

function setDesarmado(){
    var valor = window.document.getElementById('checkDesarmado').checked    
    window.sessionStorage.setItem('Por_Ofensiva', valor)

}