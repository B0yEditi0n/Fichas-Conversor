//src/Database/Effects.ts

class powerLayout{
    
    outherPower(nowPower, effect){
        var item_html
        item_html = `<strong>${nowPower['name']}:</strong> `
        item_html += effect
        item_html += `</br>`
        console.log(item_html)
        return (item_html);
    }
    multiPower(nowPower){
        var table_html
        table_html = `<table><tr><th>${nowPower['name']}</th></tr><tr><td>`
        
        for(i=0; i <= nowPower['powers'].length - 1; i++){
            //table_html += powerItem.choseAbilities(nowPower['powers'])
        }
        table_html += '</td></tr></table>'
        
        return (table_html)
    }
    powerArry(nowPower){
        var arry_html
        arry_html = `<table><tr><th>${nowPower['name']}</th></tr><tr><td>`
        
        for (i = 0; i <= nowPower['alternateEffects'].length -1; i++){
            arry_html += tablePowerItem(nowPower['alternateEffects'])
            //arry_html += powerItem.choseAbilities(nowPower['alternateEffects'])
        }

        arry_html += '</td></tr></table>'
        return (arry_html)
        
    }
}
class chosePower extends powerLayout{
    startSelect(powers){
        var i 
        var html = ''
        for(i=0; i <= (powers.length - 1); i++){                     
            
            switch (powers[i]['effectID']){
                case 5046: //Múltiplos Efeitos                
                    html += this.multiPower(powers[i])
                    break;
                case 5042: //Arranjo            
                    html += this.powerArry(powers[i])                                
                    break;
                case 5013: //Dano
                    html += this.otherPower(powers[i], 'Dano')
                    //break;
                case 5001: // Aflição
                    break;
                default:
                    html += this.otherPowers(powers[i], 'Desonhecido')
    
            }      
        }
        return (html)
    }
}

function callPower(power){    
    buildPower = new chosePower();
    console.log(power)
    document.getElementById('poderes').innerHTML += buildPower.startSelect(power)
}

function tablePowerItem(powerItens){
    reBuild = new chosePower()
    console.log(powerItens)
    //return(reBuild.startSelect(powerItens))

}