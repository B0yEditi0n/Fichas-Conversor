//src/Database/Effects.ts
function callPower(power){    
    buildPower = new chosePower();
    console.log(power)
    document.getElementById('poderes').innerHTML += buildPower.startSelect(power)
}

// função utilizada para construir itens dos arranjos
function tablePowerItem(powerItens){
    reBuild = new chosePower()
    return(reBuild.startSelect(powerItens))

}

class powerLayout{
    //Poderes comuns
    outherPower(nowPower, effect){
        var item_html
        item_html = `<strong>${nowPower['name']}:</strong> `
        item_html += effect
        item_html += `</br>`
        console.log(item_html)
        return (item_html);
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
    startSelect(powers){
        var i 
        var html = ''
        for(i=0; i <= (powers.length - 1); i++){                     
            console.log(powers[i]['effectID'])
            switch (powers[i]['effectID']){
                case 5046: //Múltiplos Efeitos                
                    html += this.multiPower(powers[i])
                    break;
                case 5042: //Arranjo            
                    html += this.powerArry(powers[i])                                
                    break;
                case 5013: //Dano                    
                    html += this.outherPower(powers[i], 'Dano')
                    break;
                case 5001: // Aflição
                    break;
                default:
                    
                    html += this.outherPower(powers[i], 'Desonhecido')
    
            }      
        }
        return (html)
    }
}