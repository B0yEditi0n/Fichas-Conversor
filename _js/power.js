//import data from ;
//src/Database/Effects.ts
// async function getJson(patch) {
//     const getFile = await fetch('./_js/dataBase/dataBase.json');
//     const jsonExport = await getFile.json();
//     return await(jsonExport)
//     // return await (jsonExport[id])
//     // return await ()
//   }
const PowerOptionsList = [5003, 5004, 5007, 5009, 5020, 5027, 5035];
const MultiplePowersList = [5043, 5045, 5046, 5048];


async function callPower(){    
    ficha = JSON
    ficha = await getJson(pathFicha)

    buildPower = new chosePower();
    buildPower.loopPower(ficha['characters'][0]['powers'])
    

}

// função utilizada para construir itens dos arranjos
async function tablePowerItem(powerItens){
    reBuild = new chosePower()
    var html = ''
    
    for(i = 0; i <= powerItens.length - 1; i++){  
        html += await (reBuild.startSelect(powerItens[i]))
    }
    return(html)  

}

class powerLayout{
    sumPower(nowPower){

    }
    buildModify(arryModify){
        var rangeModify = false
        var rage_html = ''
        var extras_html = ''
        var flaws_html = ''
        var flat_html = ''
        

        
        // EXTRAS
        for(var i = 0; i<= arryModify.extras.length - 1; i++){ 
            if(arryModify.extras[i].id == 10017){ // separar modificadores de distancia
                rangeModify = true
            }
            else{
                extras_html += arryModify.extras[i].name}

                if(arryModify.extras[i].ranked == true){ //graduações
                    if(arryModify.extras[i].rank > 1){
                        extras_html += ' ['
                        extras_html += arryModify.extras[i].rank
                        extras_html += '] '      
                    }
                    

                }

                if(arryModify.extras[i].hasTrait == true){ // Descrição
                    extras_html += ' ('
                    extras_html += arryModify.extras[i].traitText
                    extras_html += ')'
                }
                extras_html += ', '
            
            }
        
        // FALHAS
        for (var i = 0; i<=arryModify.flaws.length - 1; i++){
            if(arryModify.flaws[i].id ==11001){ // separar modificadores de distancia
                rangeModify = true
            }
            else{
                flaws_html += arryModify.flaws[i].name

                if(arryModify.flaws[i].ranked == true){ // Graduações
                    if(arryModify.flaws[i].rank > 1){
                        flaws_html += ' ['
                        flaws_html += arryModify.flaws[i].rank
                        flaws_html += ']'      
                    }
                    

                }

                if(arryModify.flaws[i].hasTrait == true){ // Descrição
                    flaws_html  += ' ('
                    flaws_html += arryModify.flaws[i].traitText
                    flaws_html += ')'
                }
                flaws_html += ', '
            }
            
            
        }
        //Caso a distancia seja modificada
        if(rangeModify == true){
            if ( arryModify.rangeID == 1 ){
                rage_html = 'Perto '
            }
            else{ 
                if(arryModify.rangeID == 2){
                    rage_html = 'a Distância '
                }
                else{
                    if(arryModify.rangeID ){
                        rage_html += 'a Percepção '
                    }
                }

            }
        }
        
        //FIXOS
        
        for(var i =0; i <= arryModify.flats.length - 1; i++){

            flat_html += arryModify.flats[i].name

            //Caso seja Ranqueado
            if (arryModify.flats[i].ranked == true){
                if(arryModify.flats[i].rank > 1){
                    flat_html += ' ['
                    flat_html += arryModify.flats[i].rank
                    flat_html += ']'                                        
                }
            }
            if (arryModify.flats[i].hasTrait == true){ // Descrição
                flat_html += ' ('
                flat_html += arryModify.flats[i].traitText
                flat_html += ')'
            }
            flat_html += ', '

        }
        //Extras Graduados
        
        var f_html = rage_html + extras_html + flaws_html + flat_html

        f_html = f_html.substring(0, f_html.length - 2); // Remove a ultima virgula

        return(f_html)

    }

    //Poderes comuns
    outherPower(nowPower, effect){
        var item_html = ''

        item_html = `<strong>${nowPower['name']}:</strong> `    //Nome
        item_html += effect + ' '                               //Efeito
        item_html += nowPower['rank'] + ' '                     //Graduação
        item_html += this.buildModify(nowPower)                 //Extras
        item_html += `</br></br>`
        return (item_html);
    }
    //Aflição
    afflictionPower(nowPower){
        var afflict_html = ''
        var modify_html = ''
        var condit_html = ''        

        afflict_html = `<strong>${nowPower['name']}:</strong> `
        afflict_html += 'Aflição '
        afflict_html += nowPower['rank'] + ' '

        // CONDIÇÔES
        
        condit_html = '['
        if(nowPower['conditions']['firstDegree'] != ''){
            condit_html += `${nowPower['conditions']['firstDegree']}`
        if(nowPower['conditions']['secondDegree'] != '')
            condit_html += `, ${nowPower['conditions']['secondDegree']}`
        if(nowPower['conditions']['thirdDegree']){
                    condit_html += `, ${nowPower['conditions']['thirdDegree']}`
                }
        }else{ // Efeit de apenas 3º grau
            condit_html += nowPower['conditions']['thirdDegree']
        }
        condit_html += '] '
        console.log(condit_html)

        modify_html = this.buildModify(nowPower)
            
        afflict_html += condit_html + modify_html 
        

        afflict_html += `</br></br>`
        
        
        return (afflict_html);

        
    }
    //Poderes combinados pergunte pro bernardo
    async multiPower(nowPower){
        var table_html
        table_html = `<table><tr><th>${nowPower['name']}</th></tr><tr><td>`
        table_html += await tablePowerItem(nowPower['powers'])
        table_html += '</td></tr></table></br></br>'
        
        return (table_html)
        
    }
    //Aranjo de Poder
    async powerArry(nowPower){
        var arry_html
        arry_html = `<table><tr><th>${nowPower['name']}</th></tr><tr><td>`
        arry_html += await tablePowerItem(nowPower['alternateEffects'])
        arry_html += '</td></tr></table></br></br>'
        return (arry_html)
        
    }
}
class chosePower extends powerLayout{
    efeito = JSON
    async loopPower(powers){
        
        var html = ''
        var i
        for(i=0; i <= (powers.length - 1); i++){                         
            html = await this.startSelect(powers[i])
            document.getElementById('poderes').innerHTML += html
        }
    }
    async startSelect(powers){
        //Declaração de Variáveis
        var escolha = ''
        var html = ''
        this.efeito = await getJson('./_js/dataBase/dataBase.json')
        var parametro
        //Tabela de Poderes
        if(powers["isAlternateEffect"] == true){ // Efeito de Arranjo
            parametro = this.efeito[powers['effectID']].name
        }else{ 
            if(!(MultiplePowersList.includes(powers['effectID']))){ //Efeitos alternativos não Tabelas
                if(powers['effect'] === undefined){
                    parametro = this.efeito[powers['effectID']].name
                    escolha = powers['effectID']
                }
                else{
                    parametro = powers['effect']['name']
                    escolha = powers['effect']['id']
                }
                
            }

            }
        console.log(escolha)
        switch (escolha){
            case 5046: //Múltiplos Efeitos                
                html = this.multiPower(powers)
                break;
            case 5042: //Arranjo           
                html = this.powerArry(powers)                                
                break;
//              Lista de EFeitos individuais                    
            case 5001: // Aflição
                html = this.afflictionPower(powers)
                break;
            default:
                html = this.outherPower(powers, parametro)
        }
        
        return (html)
        
    }
}