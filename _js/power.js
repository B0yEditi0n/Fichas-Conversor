//src/Database/Effects.ts
function callPower(power){    
    buildPower = new chosePower();
    buildPower.loopPower(power)
}

// função utilizada para construir itens dos arranjos
function tablePowerItem(powerItens){
    reBuild = new chosePower()
    var html = ''
    
    for(i = 0; i <= powerItens.length - 1; i++){  
        html += (reBuild.startSelect(powerItens[i]))
        
    }
    return(html)
    
    

}

class powerLayout{
    //Poderes comuns
    outherPower(nowPower, effect){
        var item_html
        item_html = `<strong>${nowPower['name']}:</strong> `    //Nome
        item_html += effect + ' '                               //Efeito
        item_html += nowPower['rank']                           //Graduação
        //Extras

        //Falhas
        item_html += `</br>`
        return (item_html);
    }
    //Aflição
    afflictionPower(nowPower){
        var i = 0

        var distanciModify = false;
        var afflict_html = ''
        var range_html = ''
        var extra_html = ''
        var flaws_html = ''
        var condit_html = ''        

        afflict_html = `<strong>${nowPower['name']}:</strong> `
        afflict_html += 'Aflição '
        afflict_html += `${nowPower['rank']} `

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
        
        

        //Extras fora distância
        for(i=0; i <= nowPower['extras'].length - 1; i++){
            
            console.log(nowPower['extras'][i]['id'])
            if (!(nowPower['extras'][i]['id'] == 10017)){
                
                extra_html += `${nowPower['extras'][i]['name']}, `
            }
            else{                
                distanciModify = true;
                
            }
        }
        //Falhas 
        
        for(i=0; i <= nowPower['flaws'].length - 1; i++){
            
            if (!(nowPower['flaws'][i]['id'] == 11001)){
                

            flaws_html += `${nowPower['flaws'][i]['name']}, `
            }
            else{
                distanciModify = true;
            }
            
        }      
        
        if(distanciModify){
            
            console.log(distanciModify)
            switch(nowPower['rangeID']){
                case 1:
                    range_html = 'Corpo-a-corpo'
                    break; 
                case 2:
                    range_html = 'a Distância'
                    break;
                case 3:
                    range_html = 'a Percepção'
                    break;
            }

        }
            

        afflict_html += `${range_html} ${condit_html}, ${nowPower['rangeID']} ${extra_html}, ${flaws_html}`

        

        afflict_html += `</br>`
        
        
        return (afflict_html);

        
    }
    //Poderes combinados pergunte pro bernardo
    multiPower(nowPower){
        var table_html
        table_html = `<table><tr><th>${nowPower['name']}</th></tr><tr><td>`
        table_html += tablePowerItem(nowPower['powers'])
        table_html += '</td></tr></table>'
        
        return (table_html)
        
    }
    //Aranjo de Poder
    powerArry(nowPower){
        var arry_html
        arry_html = `<table><tr><th>${nowPower['name']}</th></tr><tr><td>`
        arry_html += tablePowerItem(nowPower['alternateEffects'])
        arry_html += '</td></tr></table>'
        return (arry_html)
        
    }
}
class chosePower extends powerLayout{
    loopPower(powers){
        var html = ''
        var i
        for(i=0; i <= (powers.length - 1); i++){             
            
            html = this.startSelect(powers[i])
            document.getElementById('poderes').innerHTML += html
        }

    }
    startSelect(powers){
        var i 
        var html = ''
        switch (powers['effectID']){
            case 5046: //Múltiplos Efeitos                
                html = this.multiPower(powers)
                break;
            case 5042: //Arranjo           
                html = this.powerArry(powers)                                
                break;
//              Lista de EFeitos individuais                    
            case 5013: //Dano                    
                html = this.outherPower(powers, 'Dano')
                break;
            case 5001: // Aflição
                html = this.afflictionPower(powers)
                break;
            case 5002:
                html = this.outherPower(powers, 'Alongamento')
                break;
            case 5003:
                html = this.outherPower(powers, 'Ambiente')
                break
            default:
                html = this.outherPower(powers, 'Desonhecido')

        }     
        
        return (html)
    }
}