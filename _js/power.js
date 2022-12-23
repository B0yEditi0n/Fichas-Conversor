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
    buildPower.jsonFicha = ficha['characters'][0]
    await buildPower.loopPower(ficha['characters'][0]['powers']),

    gera_modelo(ficha)
//    setTimeout(gera_modelo, 1000) // um dia isso deve ser arrumado
    return(1)

}

// função utilizada para construir itens dos arranjos
async function tablePowerItem(powerItens){
    reBuild = new chosePower()
    reBuild.jsonFicha = ficha
    var html = ''
    
    for(i = 0; i <= powerItens.length - 1; i++){  
        html += await (reBuild.startSelect(powerItens[i]))
    }
    return(html)  

}

async function concatLinkPowers(linkpower){
    powerLink = new chosePower();
    var html = ''
    return (await powerLink.startSelect(linkpower))
}

function returnJson(id, number){
    //Habilidades
    var i
    if(number)
    if(1001 <= id && 1008 >= id){
        i = id - 1001 
        ficha.characters[0].abilities[i].extraRank = new Object 
        ficha.characters[0].abilities[i].extraRank = number
    }
    //Defesas
    if(2001 <= id && 2005 >= id){
        i = id - 2001
        ficha.characters[0].defenses[i].extraRank = new Object
        ficha.characters[0].defenses[i].extraRank = number
    }
    //Perícias 3001
    if(3001 <= id && 3013 >= id){
        i = id - 3001        
        ficha.characters[0].skills[i].extraRank = new Object
        ficha.characters[0].skills[i].extraRank = number
    }
    //Perícias Extras
    
    for(var j=0; j<=ficha.characters[0].extraSkills.length-1; j++){
        //console.log(ficha.characters[0].extraSkills[j], id)
        if(id == ficha.characters[0].extraSkills[j].id){
            
            ficha.characters[0].extraSkills[j].extraRank = new Object
            ficha.characters[0].extraSkills[j].extraRank = number
            console.log(ficha.characters[0].extraSkills[j])
        }
    }
    

}

/***************************************************************************************** 
 * CLASSES DO EFEITO
*******************************************************************************************/

class powerLayout{
    jsonFicha = {}

    sumPower(nowPower){

    }
    optionsPower(options){
        var html_options = ''
        if(options != undefined){
            html_options = '('
            for(var i = 0; i <= options.length - 1; i++){
                html_options += options[i].name + ', '
                if(options[i].traitText != ""){
                    html_options = html_options.substring(0, html_options.length - 2) // remover ultimo espaço
                    html_options += ': ' + options[i].traitText + ', '
                }
            }
            html_options = html_options.substring(0, html_options.length - 2)
            html_options += ') '
            
            if (options.length == 0){
                html_options = '() '
            }

            return(html_options)
        }
        else{
            return ('')
        }
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

    checkEffects(option){
        if(option == true){
            return('<span>&#8226;</span>&emsp;' + '<strong>EA: </strong>')
        }
        else{
            return ('')
        }
    }

    async checaAlternatives(nowPower){
        if(nowPower.alternateEffects.length > 0){
            
            return(await tablePowerItem(nowPower.alternateEffects))
        }
        else return('')

    }
    //Poderes comuns
    async outherPower(nowPower, effect){
        var item_html = ''
        item_html = this.checkEffects(nowPower.isAlternateEffect)//é ea?
        item_html += `<strong>${nowPower['name']}:</strong> `    //Nome
        item_html += effect + ' '                                //Efeito
        item_html += this.optionsPower(nowPower.powerOptions)    //possui opções?
        item_html += nowPower['rank'] + ' '                      //Graduação
        item_html += this.buildModify(nowPower)                  //Extras
        item_html += `</br>`
        item_html += await this.checaAlternatives(nowPower)     //EAs
        return (item_html);
    }
    //Aflição
    async afflictionPower(nowPower){
        var afflict_html = ''
        var condit_html = ''
        var resistedBy = '' 
        var modify_html = ''   

        afflict_html = this.checkEffects(nowPower.isAlternateEffect)

        afflict_html += `<strong>${nowPower['name']}:</strong> `
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
        //Resistido por, e se Superado
        resistedBy = `Resistido por ${nowPower.resistedBy}`
        if(nowPower.overcomedBy != ''){
            resistedBy += ` e Superado por ${nowPower.overcomedBy}, ` 
        }else{resistedBy += ', '}
        modify_html = this.buildModify(nowPower)
            
        afflict_html += condit_html + resistedBy + modify_html 

        afflict_html += `</br>`

        // Adiciona efeitos alternativos
        afflict_html += await this.checaAlternatives(nowPower)
        
        
        return (afflict_html);
        
    }
    async Weakeness(nowPower){
        var item_html = ''

        item_html = this.checkEffects(nowPower.isAlternateEffect)
        item_html += `<strong>${nowPower['name']}:</strong> `    //Nome
        item_html += 'Enfraquece '                              //Efeito
        item_html += nowPower['rank'] + ' '                     //Graduação
        item_html += `Resistido por ${nowPower.resistedBy}, `
        item_html += this.buildModify(nowPower)                 //Extras
        item_html += `</br>`

        // Adiciona efeitos alternativos
        item_html += await this.checaAlternatives(nowPower)
        return (item_html);
    }
    // Caracteristica Aumetada
    async enhancedTrait(nowPower){
        
        for(var i = 0; i <= nowPower.enhancedTraits.length -1; i++){
            returnJson(nowPower.enhancedTraits[i].affectedTraitID, nowPower.enhancedTraits[i].rank)
        
            //ficha.
            //Quanto
            modifyHabilidade[1].push(nowPower.enhancedTraits[i].rank)
            
        }
    }

    //Poderes combinados, pergunte pro bernardo
    async multiPower(nowPower){
        var table_html
        table_html = `<table><tr><th>${nowPower['name']}</th></tr><tr><td>`
        table_html += await tablePowerItem(nowPower['powers'])
        table_html += '</td></tr></table></br>'
        
        return (table_html)
        
    }
    //Aranjo de Poder
    async powerArry(nowPower){
        var arry_html
        arry_html = `<table><tr><th>${nowPower['name']}</th></tr><tr><td>`
        arry_html += await tablePowerItem(nowPower['alternateEffects'])
        arry_html += '</td></tr></table></br>'
        return (arry_html)
        
    }
    // Poderes Ligados
    async LinkPower(nowPower){
        var link_html = `<strong>${nowPower.name}: </strong> `
        for(var i = 0; i <= nowPower.powers.length -1; i++){
            link_html += await concatLinkPowers(nowPower.powers[i])            
            link_html  = link_html.substring(0, link_html .length - 5) // tirar BR
            // 1 br 4 charteres, 2 8
            if(i == 0){
                link_html += ' <strong>Ligado: </strong'
            }
        }
        link_html += '</br>'
        link_html += await this.checaAlternatives(nowPower)
        return(link_html)
    }
    //Imunidade
    async imunity(nowPower){
        var imunity_html = ''
        imunity_html = this.checkEffects(nowPower.isAlternateEffect)//é ea?
        imunity_html += `<strong>${nowPower.name}</strong> ` 
        // Opções
        imunity_html += '('
        for (var i = 0; i <= nowPower.powerOptions.length - 1; i++){
            imunity_html += `${nowPower.powerOptions[i].name}`
            if (nowPower.powerOptions[i].traitText != ''){
                imunity_html += ` ${nowPower.powerOptions[i].rank}: ${nowPower.powerOptions[i].traitText}, `
            }
            else{
                imunity_html += ` ${nowPower.powerOptions[i].rank}, `
            }
        }
        imunity_html = imunity_html.substring(0, imunity_html.length - 2)
        imunity_html += ')'
        
        imunity_html += this.buildModify(nowPower)  // modificadores
        imunity_html += `</br>`
        imunity_html += await this.checaAlternatives(nowPower)     //EAs

        return(imunity_html)
    }
}
class chosePower extends powerLayout{

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
        this.efeito = _EffectsList[0]
        var name = ''
        name = this.efeito[powers['effectID']].name
        switch (powers['effectID']){
            case 5001: // Aflição
                html = this.afflictionPower(powers)
                break
            case 5006: // Carateristica aumentada
                this.enhancedTrait(powers)
                break
            case 5016: //Enfraquecimento
                html = this.Weakeness(powers)
                break
            case 5020: //Imunidade
                html = this.imunity(powers)   
                break        
            case 5042: //Arranjo           
                html = this.powerArry(powers)                                
                break
            case 5045: // Efeioto ligado
                html = this.LinkPower(powers)
                break
            case 5046: //Múltiplos Efeitos                
                html = this.multiPower(powers)
                break                    
            
            
            
            default:
                html = this.outherPower(powers, name)
        }
        
        return (html)
        
    }
}