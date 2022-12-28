async function startOfense(ficha){
    
    BuildOfense = new Ofensiva
    BuildOfense.habilidade = ficha.characters[0].abilities
    BuildOfense.pericias = ficha.characters[0].extraSkills
    BuildOfense.vantagens = ficha.characters[0].advantages
    document.getElementById('Ofensiva'). innerHTML = await BuildOfense.iniciativa()
    document.getElementById('Ofensiva'). innerHTML += await BuildOfense.filtragemdeEfeitos(ficha.characters[0].powers)
}

class Ofensiva{
    habilidade = {}
    pericias = {}
    vantagens = {}

    // Bonus Gerais
    Destreza
    Luta
    VDistancia = 0
    VPerto = 0

    async preparaAtaque(ataque){
        ataque.isRangeModify = new Object
        ataque.isRangeModify = false
        ataque.Critico = new Object
        ataque.Critico = 0
        ataque.acertoBonus = new Object
        ataque.acertoBonus = 0
        for(var i = 0; i <= ataque.extras.length -1; i++){
            switch(ataque.extras[i].id){
                case 500801:
                    //Ataques em Area
                    if(ataque.extras[i].parcial == 0){
                        ataque.rangeID = 5
                    }else{
                        ataque.rangeID = 6
                    }
                    break
                case 10017: 
                    //Distância aumentada
                    ataque.isRangeModify  = true
                    break
                case 11003: 
                    //Baseado em Agarrar
                    break
                case 11022:
                    //Resistivel
                    break
            }
        }
            
        for(var i = 0; i <= ataque.flaws.length -1; i++){
            switch(ataque.flaws[i].id){
                case 11007:
                    //Distância Reduzida
                    ataque.isRangeModify = true
                    break
            }

        }
        for(var i = 0; i <= ataque.flats.length -1; i++){
            switch(ataque.flats[i].id){
                case 501311:
                    //Perigoso
                    ataque.Critico = ataque.flats[i].rank
                    break
                case 10001:
                    //Acurado
                    ataque.acertoBonus += ataque.flats[i].rank * 2
                    break    
                case 11013:
                    //impreciso
                    ataque.acertoBonus -= ataque.flats[i].rank * 2
                    break                
            }
        }
        //Percepção e Area Parcial
        //Bonus de Acerto
        //Efeitos Ligados
        //Duração Concentração Modificado
        return(ataque)
    }
    checkRange(extras, distancia){
        for(var i = 0; i <= extras.length -1; i++){
            console.log('é em Area', extras[i].id)
            if(extras[i].id == 10010){
                // é efeito em Area
                
                if(extras[i].parcial == 0){
                    // não é parcial
                    return(5)
                }
                else{
                    // é parcial
                    return(6)
                }
            }
            else{

                return(distancia)
            }
        }
        
    }
    startBonus(){
        //*********************** */
        // Preenchendo Variáveis
        //*********************** */
        if(this.habilidade[3].extraRank != undefined){
            this.Destreza = this.habilidade[3].rank + this.habilidade[4].extraRank
        }
        else{
            this.Destreza = this.habilidade[3].rank
        }

        if(this.habilidade[4].extraRank != undefined){
            this.Luta = this.habilidade[4].rank + this.habilidade[4].extraRank
        }
        else{
            this.Luta = this.habilidade[4].rank
        }

        for(var i = 0; i <= this.vantagens.length -1; i++){
            if(this.vantagens[i].id == 4011){
                //Acerto a Distanacia
                this.VDistancia = this.vantagens[i].rank
            }
            if(this.vantagens[i].id == 4013){
                //Acerto Corpo a Corpo
                this.VPerto = this.vantagens[i].rank
            }
        }
    }
    checkCritcal(){

    }
    async Acerto(id, range, bonus, extras){
        //*********************** */
        // Declaração de Variáveis
        //*********************** */
        var acerto = 0
        var distancia
        var PDistancia = 0
        var PPerto = 0
        //definindo tipo de distânca

        distancia = this.checkRange(extras, range)
        switch(distancia){
            case 1:
            //perto
                distancia = 0
                break
            case 2:
            //distancia
                distancia = 1
                break
            case 3:
            //percepçaco
                distancia = 3
                break
            case 4:
            //Percepção Parcial
                break
            case 5:
            //Area
                break
            case 6:
            //Area Parcial
                break

            default:
                
        }

        console.log('alcance', distancia)
        
        this.startBonus()
        
        for(var i = 0; i <= this.pericias.length -1; i++){
            if(this.pericias[i].chosenAttacks != undefined && this.pericias[i].isRanged == distancia){
                if(this.pericias[i].chosenAttacks.list.indexOf(id) > -1){
                    
                    if(range == 1){
                        PPerto = (this.pericias[i].rank * 2)
                    }
                    if(range == 2){
                        PDistancia = (this.pericias[i].rank * 2)
                    }
                }
            }
        }
        if(distancia == 1){
            acerto = `+ ${this.Luta + this.VPerto + PPerto + bonus}`
        }
        if(distancia == 2){
            acerto = `+ ${this.Destreza + this.VDistancia + PDistancia + bonus}`
        }
        if(distancia == 3){
            acerto =  'Automático'
        }
        if(distancia == 5){
            console.log('wiork')
            acerto =  'Área'
        }
        if(distancia == 6){
            acerto = 'Área' + acerto
        }
        return(acerto)
    }
    modificadores(ataque){
        const ExtrasI = [10002, 10010, 10019, 10026, 10088, 10033]
        const FalhasI = [11052, 11005, 11006, 11008, 11009, 11011, 11057, 11014, 11022, 11023]
        const FixosI = [10003, 10015, 10016, 10086, 10020, 10038, 10023, 10024, 10027, 10108, 10031, 10032, 10035, 10036, 10037, 11010, 11013]

        const extras = ataque.extras
        const falhas = ataque.flaws
        const fixos = ataque.flats

        var duracao = ''
        var range_str = ''
        var modfi_extra = ''
        var modfi_falha = ''
        var modfi_fixo = ''
        // Concentração duration 2
        // Reção action: 4
        
        // Efeito Concentração
        if(ataque.actionID == 2){
            duracao = ' Concentração'
        }        
        // a Distância Modificada
        if(ataque.isRangeModify == true){
            switch(ataque.rangeID){
                case 1: // Perto
                    range_str = ' Perto'
                    break 
                case 2: // a Distância
                    range_str = ' à Distância'
                    break
                case 3: // Percepção
                    range_str = ' a Percepção'
                    break
            }
        }

        
        for(var i = 0; i <= extras.length -1; i++){
            if(ExtrasI.indexOf(extras[i].id) > -1){
                switch (extras[i].id){
                    case 10010:
                        modfi_extra += `, (${extras[i].traitText})`     
                        break
                    default:
                        if(extras[i].hasTrait == true){
                            modfi_extra += `, ${extras[i].name} (${extras[i].traitText})`
                        }
                        else{
                            modfi_extra += `, ${extras[i].name}`
                        }
                        
                }
            }
            
        }
        for(var i = 0; i <= falhas.length -1; i++){
            if(FalhasI.indexOf(falhas[i].id) > -1){
                if(falhas[i].hasTrait == true){
                    modfi_falha += `, ${falhas[i].name} (${falhas[i].traitText})`
                }else{
                    modfi_falha += `, ${falhas[i].name}`
                }
            }
        }
        for(var i = 0; i<=fixos.length -1; i++){
            if(FalhasI.indexOf(fixos[i].id) > -1){
                if(fixos[i].hasTrait == true){
                    modfi_fixo += `, ${falhas[i].name} (${falhas[i].traitText})`
                }
                else{
                    modfi_fixo += `, ${falhas[i].name}`
                }
            }
            
        }


        return(duracao + range_str + modfi_extra + modfi_falha + modfi_fixo)

    }
    async CD_Resited(id, resistido, superado, grad){
        var CD = 0
        var stringCD = ''
        if(id == 5013){
            CD = 15 + grad
        }
        else{
            CD = 10 + grad
        }

        if(superado == '' || superado == resistido || superado == undefined){
            stringCD = `<b>CD:</b> ${CD} ${resistido}` 
        }
        else{
            stringCD = `<b>CD:</b> ${CD} ${resistido}, ${superado}`
        }

        return(stringCD)
    }

    afliction_condig(ataque){
        var condit_html = ''

    if(ataque.conditions != undefined){
            condit_html = '('
            if(ataque['conditions']['firstDegree'] != ''){
                condit_html += `${ataque['conditions']['firstDegree']}`
            if(ataque['conditions']['secondDegree'] != '')
                condit_html += `, ${ataque['conditions']['secondDegree']}`
            if(ataque['conditions']['thirdDegree']){
                condit_html += `, ${ataque['conditions']['thirdDegree']}`}
            }else{ // Efeit de apenas 3º grau
                condit_html += `(${ataque['conditions']['thirdDegree']})`
            }
            condit_html += ') '
        }
        return (' ' + condit_html)
    }

    critico(ataque){
        if(ataque.Critico > 0){
            return(' <b>CD:</b>' + (20 - ataque.Critico))
        }
        else{
            return('')
        }
    }

    async ataque_comum(ataque){
        var ofensiva_String = ''
        ataque = await this.preparaAtaque(ataque)

        // Nome
        ofensiva_String += `<strong>${ataque.name}</strong>: `
        // Acerto
        ofensiva_String += "<b>Acerto</b> "
        ofensiva_String += await this.Acerto(ataque.id, ataque.rangeID, ataque.acertoBonus, ataque.extras) + ' | '
        // Efeito
        ofensiva_String += `<b>${_EffectsList[0][ataque.effectID].name}</b> ${ataque.rank}`
        ofensiva_String += this.modificadores(ataque)
        // CD
        ofensiva_String += '</br>'
        ofensiva_String += await this.CD_Resited(ataque.id, ataque.resistedBy, ataque.overcomedBy, ataque.rank)
        ofensiva_String += this.afliction_condig(ataque)
        ofensiva_String += this.critico(ataque)
        ofensiva_String += '</br></br>'
        return(ofensiva_String)
    }
    async filtragemdeEfeitos(poderes){
        var html = ''

        for(var i = 0; i<= poderes.length -1; i++){
            // construção principal
            if(poderes[i].typeID == 1 || poderes[i].resistedBy != 'Nenhum'){
                switch(poderes[i].id){           
                    default:
                        html += await this.ataque_comum(poderes[i])
                }
            }
            // Opções de Efeitos
            if(poderes[i].powers != undefined){
                html += await this.filtragemdeEfeitos(poderes[i].powers)
            }

            // Efeitos alternativos
            if(poderes[i].alternateEffects.length > 0){
                
                html += await this.filtragemdeEfeitos(poderes[i].alternateEffects)
            }
            
        }
        return(html)
    }
    iniciativa(ficha){
        //Velocidade do Pensamento e Iniciativa
        var iniciativa = 0
        for(var i = 0; i <= this.vantagens.length -1; i++){
            if(this.vantagens[i].id == 4061){
                //Inicitiva aprimorada
                iniciativa += vantagens[i].rank * 4
            }
            if(this.vantagens[i].id == 4096){
                iniciativa += this.habilidade[5].rank
            }
            else{
                iniciativa += this.habilidade[2].rank
            }
        }
        return(`<div class='txtIniciativa'><b>Iniciativa</b> +${iniciativa}<div></br>`)
    }
}
