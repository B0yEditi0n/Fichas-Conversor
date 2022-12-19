document.getElementById('btnUp').addEventListener('click', fct);

function fct(){
    console.log(document.getElementById('uploadFile').files[0])
    if (document.getElementById('uploadFile').files[0] == undefined){
        window.alert('Carregue um arquivo')
    }
    else{
        //conversão em json
        window.open('./Ficha.html', self) 
        
        
        console.log(document.getElementById('uploadFile').files[0].webkitRelativePath)
        //readFile.readAsText();
        
    }
}
