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

function returnJson(id, number, duracao){
    //Atributo permanente ou temporário?
    var Type = 1
    if(duracao == 3 || duracao == 4){
        Type = 1
    }
    else{ Type = 0 }
    //Habilidades
    var i
    if(number)
    if(1001 <= id && 1008 >= id){
        i = id - 1001
        if(Type == 1){
            ficha.characters[0].abilities[i].extraRank = new Object
            ficha.characters[0].abilities[i].extraRank = number
        }else{
            ficha.characters[0].abilities[i].rank = number
        }

    }
    //Defesas
    if(2001 <= id && 2005 >= id){
        i = id - 2001
        if(Type == 1){
            ficha.characters[0].defenses[i].extraRank = new Object
            ficha.characters[0].defenses[i].extraRank = number
        }else{
            ficha.characters[0].defenses[i].rank = number
        }

    }
    //Perícias 3001
    if(3001 <= id && 3013 >= id){
        i = id - 3001
        if(Type == 1){
            ficha.characters[0].skills[i].extraRank = new Object
            ficha.characters[0].skills[i].extraRank = number
        }
        else{
            ficha.characters[0].skills[i].rank = number
        }
    }
    //Perícias Extras

    for(var j=0; j<=ficha.characters[0].extraSkills.length-1; j++){
        if(id == ficha.characters[0].extraSkills[j].id){
            if(Type == 1){
                ficha.characters[0].extraSkills[j].extraRank = new Object
                ficha.characters[0].extraSkills[j].extraRank = number
            }
            else{
                ficha.characters[0].extraSkills[j].rank = number
            }
        }
    }
}

/*****************************************************************************************
 * CLASSES DO EFEITO
*******************************************************************************************/

class powerLayout{
    jsonFicha = {}
    numberSumPower(Rank, baseCost, Extra, Falha, Flat){
        //Calcula o valor brugo dos itens
        var Total_custo
        var totalFalhas = 0
        var totalExtras = 0
        var totalFlats = 0

        for(var i = 0; i <= Extra.length - 1; i++){
            if(Extra[i].parcial == 0){
                totalExtras += Extra[i].rank * Rank
            }else{
                totalExtras += Extra[i].parcial * Extra[i].rank
            }
        }
        for(var i = 0; i <= Falha.length -1; i++){
            if(Falha[i].parcial == 0){
                totalFalhas += (Falha[i].rank * Rank)
            }else{
                totalFalhas += (Falha[i].rank * Falha[i].parcial)
            }
        }
        for(var i = 0; i <= Flat.length -1; i++){
            if(Flat[i].extra == true){
                totalFlats += Flat[i].rank
            }else{
                totalFlats -= Flat[i].rank
            }

        }
        //conta é
        //Falhas Sobrepoem a Extras e Custo Base
        if((Rank * baseCost) + (totalExtras - totalFalhas) <= 0){
            Total_custo = Math.ceil((Rank / (Math.abs((Rank * baseCost) + (totalExtras - totalFalhas))+1))) + totalFlats
        }else{
            Total_custo = ((Rank * baseCost) + (totalExtras - totalFalhas) + totalFlats)
        }
        if(Total_custo <= 0){
            Total_custo = 1
        }

        return(Total_custo)

    }
    sumPower(Rank, baseCost, Extra, Falha, Flat, EA){
        //Formata o efeito
        var Total_custo = 0
        Total_custo = this.numberSumPower(Rank, baseCost, Extra, Falha, Flat)
        
        if(EA == true){return('<i> - ' + Total_custo + ' Pontos</i>')}
        else{return('<b> - ' + Total_custo + ' Pontos</b>')}

    }
    findRank(nowPower){
    // Essa função tem como objetivo definir o Tipo de Efeito e calcular
    // como suas graduações        
        //Poderes  de Opção
        const PowerOptList = [5004, 5007, 5049, 5020, 5027, 5035]
        const GroupPowList = [5043, 5045, 5046]
        const Arranjo = [5042]
        const caractAumentado = [5006]
        
        //pontos
        var totalRanks = 0  

        console.log(nowPower.effectID)
        // Opções de Poderes
        if(PowerOptList.indexOf(nowPower.effectID) > -1){
            console.log(nowPower.powerOptions)
            for(var i = 0; i <= nowPower.powerOptions.length -1; i++){
                totalRanks += nowPower.powerOptions[i].rank
            }        
        }
        // Conjunto de Poderes
        else if(GroupPowList.indexOf(nowPower.effectID) > -1){
            console.log(nowPower.powers)
            for(var i = 0; i <= nowPower.powers.length -1; i++){
                //totalRanks += this.filterSumPower(nowPower.power[i])

            }
        
        }
        // Arranjo
        else if(Arranjo.indexOf(nowPower.effectID) > -1){
            //Arranjo não tem graduação, mas um algoritimo
            // para contar pontos deverá ser feito 
        }
        // Caracteristica Aumentada 
        else if(nowPower.id == caractAumentado){
            for(var i = 0; i <= nowPower.enhancedTraits.length -1; i++){
                totalRanks += nowPower.enhancedTraits[i].rank   
            }
            for(var j = 0; j <= nowPower.enhancedAdvantages.length -1; j++){
                totalRanks += nowPower.enhancedAdvantages[i].rank
            }
                
        }
        //Poderes Comuns
        else{
            totalRanks = nowPower.rank
        }

        return(totalRanks)
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
                extras_html += arryModify.extras[i].name
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

                if(arryModify.extras[i].parcial != 0){
                    extras_html += ' Parcial ' + arryModify.extras[i].parcial
                }
                extras_html += ', '
            }
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
                if(arryModify.flaws[i].parcial != 0){
                    flaws_html += ' Parcial ' + arryModify.flaws[i].parcial
                }
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
        item_html += this.sumPower(nowPower.rank, nowPower.baseCost, nowPower.extras, nowPower.flaws, nowPower.flats, nowPower.alternateEffects)
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
        if(nowPower.overcomedBy != '' || nowPower.overcomedBy == resistedBy){
            resistedBy += ` e Superado por ${nowPower.overcomedBy}, `
        }else{resistedBy += ', '}

        modify_html = this.buildModify(nowPower)
        afflict_html += condit_html + resistedBy + modify_html
        afflict_html += this.sumPower(nowPower.rank, nowPower.baseCost, nowPower.extras, nowPower.flaws, nowPower.flats, nowPower.alternateEffects)
        afflict_html += `</br>`
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
        //Somatorio de Poderes
    }
    async protection(nowPower){
        returnJson(2003, nowPower.rank, nowPower.durationID)
        return( await this.outherPower(nowPower, 'Proteção'))
    }
    //Poderes combinados, pergunte pro bernardo
    async multiPower(nowPower){
        var table_html = ''
        var remove = ''
        var point = 0
        //*****************/
        var pRank = 0
        var pCust = 0
        var pExtras = {}
        var pFalhas = {}
        var pFlats = {}
        //*************** */

        // Soma de poderes
        for(var i = 0; i <= nowPower.powers.length - 1; i++){
            pRank   = this.findRank(nowPower)
            pCust   = nowPower.powers[i].baseCost
            pExtras = nowPower.powers[i].extras
            pFalhas = nowPower.powers[i].flaws
            pFlats  = nowPower.powers[i].flats
            point += this.numberSumPower(pRank, pCust, pExtras, pFalhas, pFlats)
        }
        switch(nowPower.removable){
            case 1:
                remove = ' Removível'
                point =  point - Math.trunc(point / 5)
                break
            case 2:
                point =  point - (Math.trunc(point / 5) * 2)
                remove = ' Facilmente Removível'
        }

        table_html = `<table><tr><th>${nowPower['name']}<r>${remove} -</r>  ${point}</th></tr><tr><td>`
        table_html += await tablePowerItem(nowPower['powers'])
        table_html += '</td></tr></table></br>'

        return (table_html)

    }
    //Aranjo de Poder
    async powerArry(nowPower){
        //EAs
        var arry_html = ''
        var remove = ''
        var points = 0
        var principal = 0
        //*****************/
        var EARank = 0
        var EACust = 0
        var EAExtras = {}
        var EAFalhas = {}
        var EAFlats = {}
        //*************** */

        //Somando os pontos dos poderes
        for(var i = 0; i <= nowPower.alternateEffects.length - 1; i++){
            EARank   = nowPower.alternateEffects[i].rank
            if(nowPower.alternateEffects[i].rank <= 0){//Caso existam Power Options
                
            }
            EACust   = nowPower.alternateEffects[i].baseCost
            
            EAExtras = nowPower.alternateEffects[i].extras
            EAFalhas = nowPower.alternateEffects[i].flaws
            EAFlats  = nowPower.alternateEffects[i].flats
            if(points < this.numberSumPower(EARank, EACust, EAExtras, EAFalhas, EAFlats)){
                points = this.numberSumPower(EARank, EACust, EAExtras, EAFalhas, EAFlats)
                
                principal = i
            }
        }

        switch(nowPower.removable){
            case 1:
                remove = ' Removível'
                points =  points - Math.trunc(points/5)
                break
            case 2:
                points +=  points - (Math.trunc(points/5) * 2)
                remove = ' Facilmente Removível'
        }
        //Definindo Efeito Principal
        nowPower.alternateEffects[principal].isAlternateEffect = false
        arry_html = `<table><tr><th>${nowPower.name}<R>${remove} - ${points}+${(nowPower.alternateEffects.length - 1)}EA : </R>${(points + nowPower.alternateEffects.length - 1)} pontos</th></tr><tr><td>`
        arry_html += await tablePowerItem(nowPower['alternateEffects'])

        arry_html += '</td></tr></table></br>'
        return (arry_html)

    }
    
    // Dispositivos
    // async device(nowPower){
    //     var arry_html
    //     //*****************/
    //     var EARank = 0
    //     var EACust = 0
    //     var EAExtras = {}
    //     var EAFalhas = {}
    //     var EAFlats = {}
    //     //*************** */
    //     arry_html = `<table><tr><th>${nowPower['name']}</th></tr><tr><td>`
    //     //for(var i = 0; i <= nowPower.powerOptions)
    //     arry_html += await tablePowerItem(nowPower.powers)
    //     arry_html += '</td></tr></table></br>'
    //     return (arry_html)
    // }

    // Poderes Ligados
    async LinkPower(nowPower){
        var link_html = `<strong>${nowPower.name}: </strong> `
        var pontos = 0
        var linksPower_html = ''
        for(var i = 0; i <= nowPower.powers.length -1; i++){
            linksPower_html = await concatLinkPowers(nowPower.powers[i])
            linksPower_html = linksPower_html.substring(0, linksPower_html .length - 5) // tirar BR
            linksPower_html = linksPower_html.replace('<b>', '<i>')
            linksPower_html = linksPower_html.replace('</b>', '</i>')

            link_html += linksPower_html
            //Soma
            pontos += this.numberSumPower(nowPower.powers[i].rank, nowPower.powers[i].baseCost, nowPower.powers[i].extras, nowPower.powers[i].flaws, nowPower.powers[i].flats)

            this.sumPower
            if(i <= nowPower.powers.length -2){
                link_html += ' <strong>Ligado: </strong>'
            }

        }
        link_html += `, <b>${pontos} pontos</b></br>`
        link_html += await this.checaAlternatives(nowPower)
        //link_html += this.sumPower(sumPoints, nowPower.baseCost, nowPower.extras, nowPower.flaws, nowPower.flats)
        return(link_html)
    }
    //Poderes com Opções
    async CountOpPower(nowPower, effect){ // Custo Especial
        var optionP_html = ''
        var sumPoints = 0
        var html_list_opt = ''
        optionP_html = this.checkEffects(nowPower.isAlternateEffect)//é ea?
        optionP_html += `<strong>${nowPower.name}:</strong> `
        optionP_html += effect
        // Opções
        for (var i = 0; i <= nowPower.powerOptions.length - 1; i++){
            sumPoints += nowPower.powerOptions[i].rank
            html_list_opt += `${nowPower.powerOptions[i].name}`
            sumPoints += nowPower.powerOptions[i].rank
            if (nowPower.powerOptions[i].traitText != ''){
                html_list_opt += ` ${nowPower.powerOptions[i].rank}: ${nowPower.powerOptions[i].traitText}, `
            }
            else{
                html_list_opt += ` ${nowPower.powerOptions[i].rank}, `
            }
        }
        html_list_opt = html_list_opt.substring(0, html_list_opt.length - 2)
        optionP_html += ` ${sumPoints} (${html_list_opt})`
        optionP_html += this.buildModify(nowPower)  // modificadores
        optionP_html += this.sumPower( sumPoints, nowPower.baseCost, nowPower.extras, nowPower.flaws, nowPower.flats, nowPower.isAlternateEffect)
        optionP_html += `</br>`
        optionP_html += await this.checaAlternatives(nowPower)     //EAs

        return(optionP_html)
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
        imunity_html += await this.checaAlternatives(nowPower) //EAs

        return(imunity_html)
    }
    async ilusion(nowPower){
        var ilusion_html = ''
        ilusion_html = this.checkEffects(nowPower.isAlternateEffect)//é ea?
        ilusion_html += `<strong>${nowPower['name']}:</strong> `    //Nome
        ilusion_html += `Ilusão (${nowPower.affectedTrait}) `                                //Efeito
        ilusion_html += this.optionsPower(nowPower.powerOptions)    //possui opções?
        ilusion_html += nowPower['rank'] + ' '                      //Graduação
        ilusion_html += this.buildModify(nowPower)                  //Extras
        ilusion_html += this.sumPower(nowPower.rank, nowPower.baseCost, nowPower.extras, nowPower.flaws, nowPower.flats, nowPower.alternateEffects)
        ilusion_html += `</br>`
        ilusion_html += await this.checaAlternatives(nowPower)     //EAs
        return (ilusion_html);
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
        //var escolha = ''
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
            case 5030:
                html = this.protection(powers)
                break
            case 5042: //Arranjo
                html = this.powerArry(powers)
                break            
            case 5045: // Efeioto ligado
                html = this.LinkPower(powers)
                break
            case 5043: //Dispositivos                
            case 5046: //Múltiplos Efeitos
                html = this.multiPower(powers)
                break
            case 5018: //Ilusão
                html = this.ilusion(powers)
                break
            case 5020: // Imunidade
            case 5027: // Movimento
            case 5035: // Sentidos
            case 5007: // Compreender
                html = this.CountOpPower(powers, name)
                break
            default:
                html = this.outherPower(powers, name)
        }

        return (html)

    }
}