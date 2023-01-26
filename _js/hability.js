async function gera_modelo(ficha){

    // Alguns poderes precisma ser carregados primeiro
    /**********************************************************************************
     * Titulo da Ficha
    ***********************************************************************************/
    Elemento('nPersonage', ficha['characters'][0]['name'])
    document.getElementById('InfoPersonagem_N1').innerText = ficha['characters'][0]['playerName']
    document.getElementById('InfoPersonagem_N1').innerText += ' NP '+ ficha['characters'][0]['powerLevel']
    Elemento('tituloTAB', ficha.portName)
  
    /**********************************************************************************
     * Atributos principais
    ***********************************************************************************/ 
    modificacaoPower.habilidade(ficha['characters'][0]['abilities'])
    Elemento('aForca', modificacaoPower.htmlForca)
    console.log(modificacaoPower.bforca)
    Elemento('aVigor', modificacaoPower.htmlVigor)
    Elemento('aAgilidade', modificacaoPower.htmlAgilidade)
    Elemento('aDestreza', modificacaoPower.htmlDestreza)
    Elemento('aLuta', modificacaoPower.htmlLuta)
    Elemento('aIntelecto', modificacaoPower.htmlIntelecto)
    Elemento('aProntidao', modificacaoPower.htmlProntidao)
    Elemento('aPresenca', modificacaoPower.htmlPresenca)
  
    /**********************************************************************************
    * Vantagem
    ***********************************************************************************/     
     htmlDado = ''
     modificacaoPower.vantagem(ficha['characters'][0]['advantages'])
     document.getElementById('vantagens1').innerHTML = `<table>` + modificacaoPower.HTML_vantagem1 +`</table>`
     document.getElementById('vantagens2').innerHTML = `<table>` + modificacaoPower.HTML_vantagem2 + `</table>`
    
    /**********************************************************************************
     * Defesas
    ***********************************************************************************/
    modificacaoPower.defesa(ficha['characters'][0]['defenses'])
    
    Elemento('dEsquiva', modificacaoPower.htmlEsquiva)
    Elemento('dAparar', modificacaoPower.htmlAparar)
    Elemento('dResistencia', modificacaoPower.htmlResistencia)
    Elemento('dFortitude', modificacaoPower.htmlFortitude)
    Elemento('dVontade', modificacaoPower.htmlVontade)
  
    /**********************************************************************************
     * Perícia
    ***********************************************************************************/ 
    modificacaoPower.pericia(ficha['characters'][0]['skills'], ficha['characters'][0]['extraSkills'])
    document.getElementById('pericias_padrao1').innerHTML = '<table>' + modificacaoPower.HTML_Pericia1 + `</table>`;
    document.getElementById('pericias_padrao2').innerHTML = '<table>' + modificacaoPower.HTML_Pericia2 + `</table>`;
  
    /**********************************************************************************
     * Complicações
     **********************************************************************************/
    
    htmlDado = '<ul>'
    for(i = 0; i <= ficha['characters'][0]['complications'].length - 1; i++){
      htmlDado += `<li><strong>${ficha['characters'][0]['complications'][i]['title']}:</strong> ${ficha['characters'][0]['complications'][i]['description']}</li>`
    }
    htmlDado += '</ul>'
    document.getElementById('complicacoes').innerHTML = htmlDado
    
    /**********************************************************************************
    * Ofensiva
    ***********************************************************************************/
    await equipamentos(ficha.characters[0].equipment)
    await startOfense(ficha)
  
    
  } 
    
    class powerHabilidade {
        // Habilidades
        htmlForca = ''
        bForca = 0
        htmlVigor = ''
        bVigor = 0 
        htmlAgilidade = ''
        bAgilidade =0
        htmlDestreza = ''
        bDestreza = 0
        htmlLuta = ''
        bLuta = 0
        htmlIntelecto = ''
        bIntelecto = 0
        htmlProntidao = ''
        bProntidao = 0 
        htmlPresenca = ''
        bPresenca = 0
        
        // Defesas
        htmlEsquiva = ''
        bEsquiva = 0
        htmlApara = ''
        bAparar = 0
        htmlResistencia = ''
        bResistencia = 0 
        htmlFortitude = ''
        bFortitude = 0
        htmlVontade = ''
        bVontade = 0

        rolamentoDefensivo = 0
        
        // Pericias

        habilidade(habilidade){         
            var valor = 0
            var html = ''
            
            for(var i = 0; i <= habilidade.length - 1; i++){
                //Habilidades Nulas
                if(habilidade[i].extraRank != undefined){
                    html =  habilidade[i].rank + ' / ' + (habilidade[i].rank + habilidade[i].extraRank)
                    valor = habilidade[i].rank + habilidade[i].extraRank
                }
                else{
                    html = habilidade[i].rank
                    valor = habilidade[i].rank 
                }
                if(habilidade[i]["isNull"] == true){
                    html = '—'
                }

                switch (habilidade[i].id){
                    case 1001: // forca
                        this.htmlForca = html
                        this.bforca = valor
                        break
                    case 1002:
                        this.htmlVigor = html
                        this.bVigor = valor
                        break
                    case 1003: //Agilidade                                
                        this.htmlAgilidade = html
                        this.bAgilidade = valor
                        break
                    case 1004: //Destreza
                        this.htmlDestreza = html
                        this.bDestreza = valor
                        break
                    case 1005: //Luta
                        this.htmlLuta = html
                        this.bLuta = valor
                        break
                    case 1006: //Intelecto
                        this.htmlIntelecto = html
                        this.bIntelecto = valor
                        break 
                    case 1007: //Prontidão
                        this.htmlProntidao = html
                        this.bProntidao = valor
                        break
                    case 1008: //Presença
                        this.htmlPresenca = html
                        this.bPresenca = valor
                        break
                }
            }
        }

        defesa(defesas){
            var valor = 0
            var eAumentado 
            for(var i = 0; i <= defesas.length -1; i++){     
                if(defesas[i].extraRank != undefined){
                    valor = defesas[i].rank + defesas[i].extraRank
                    eAumentado = true 
                }
                else{
                    valor = defesas[i].rank
                    eAumentado = false
                }

                switch (defesas[i].id){
                    case 2001: //Esquiva
                        this.bEsquiva += this.bAgilidade + valor 
                        this.htmlEsquiva = this.bAgilidade + defesas[i].rank
                        if(eAumentado == true){
                            this.htmlEsquiva += ' / ' + this.bEsquiva
                        }
                        break
                    case 2002: //Aparar
                        
                        this.bAparar = this.bLuta + valor
                        this.htmlAparar = this.bLuta + defesas[i].rank
                        if(eAumentado == true){
                            this.htmlAparar += ' / ' + this.bAparar
                        }
                        break
                    case 2003: // Resistencia
                        this.bResistencia += this.bVigor + valor
                        this.htmlResistencia += this.bVigor + defesas[i].rank
                        if(eAumentado == true || this.rolamentoDefensivo > 0){
                            this.htmlResistencia += ' / ' + (this.bResistencia + this.rolamentoDefensivo)
                        }
                        break
                    case 2004: // Fortitude/
                        this.bFortitude = this.bVigor + valor
                        this.htmlFortitude = this.bVigor + defesas[i].rank
                        if(eAumentado == true){
                            this.htmlFortitude += ' / ' + this.bFortitude
                        }
                        break
                    case 2005: // Vontade
                        this.bVontade = this.bProntidao + valor
                        this.htmlVontade = this.bProntidao + defesas[i].rank
                        if(eAumentado == true){
                            this.htmlVontade += ' / ' + this.bVontade
                        }
                        break
                }
                if(defesas[i].isImune == true){
                    switch(defesas[i].id){
                        case 2003: // Resistência
                            this.htmlResistencia = 'Imune'
                            break
                        case 2004: // Fortitude
                            this.htmlFortitude = 'Imune'
                            break
                        case 2005: // Vontade
                            this.htmlVontade = 'Imune'
                            break

                    }
                }
            }
        }
        
        HTML_Pericia1 = ''
        HTML_Pericia2 = ''

        pericia(pericias, EXTpericias){
            var Pericianome = ''
            var GradPericia = 0            
            var bonus = 0
            var extraBonus = ''
            var arryPericias = []
            /*******************************************************************************
             * Pericias Comuns
             *******************************************************************************/
            
            for (i = 0; i <= pericias.length - 1; i++) {
                Pericianome = pericias[i]['name']
                GradPericia = pericias[i]['rank']

                switch (pericias[i]['id']) {
                    case 3001: //Acrobacias
                        bonus = this.bAgilidade + GradPericia
                        break;
                    case 3002: //Atletismo
                        bonus = this.bForca + GradPericia
                        break;
                    case 3003: //Enganação
                        bonus = this.bPresenca + GradPericia
                        break;
                    case 3004: //Furtividade 
                        bonus = this.bAgilidade + GradPericia
                        break;
                    case 3005: //Intimidação
                        bonus = this.bPresenca + GradPericia
                        break;
                    case 3006: //Intuição
                        bonus = this.bProntidao + GradPericia
                        break;
                    case 3007: //Investigação
                        if (GradPericia == 0){bonus = 0;}
                        else {bonus = this.bIntelecto + GradPericia}
                        break;
                    case 3008: //Percepção
                        bonus = this.bProntidao + GradPericia
                        break;
                    case 3009: //Persuasão
                        bonus = this.bPresenca + GradPericia
                        break;
                    case 3010: //Prestidigitação
                        if(GradPericia == 0){bonus = 0}
                        else{ bonus = this.bDestreza + GradPericia}
                        break;
                    case 3011: //Tecnologia
                        if(GradPericia == 0){bonus = 0}
                        else { bonus = this.bIntelecto + GradPericia}
                        break;
                    case 3012: //Tratamento
                        if (GradPericia == 0) {bonus = 0}
                        else{bonus += this.bIntelecto + GradPericia}
                        break;
                    case 3013: //Veiculos
                        bonus += this.bDestreza + GradPericia
                        break;

                }
                if(pericias[i].extraRank != undefined){extraBonus = `* +${(pericias[i].extraRank + bonus)}`}
                else{extraBonus = ''}
                arryPericias.push(`<tr><td>${Pericianome}[${GradPericia}]: +${bonus}${extraBonus}</td></tr>`)
            }
            /*******************************************************************************
             * Pericias Extras
             *******************************************************************************/
            //Limpeza de Variáveis
            Pericianome = ''
            GradPericia = 0            
            bonus = 0
            extraBonus = ''

            for(var i = 0; i <= EXTpericias.length -1; i++){
                Pericianome = EXTpericias[i].name
                GradPericia = EXTpericias[i].rank
                //Especialidades
                switch(EXTpericias[i].abilityID){
                    case 1001: // forca
                        bonus = this.bforca + EXTpericias[i].rank
                        break
                    case 1002: // Vigor
                        bonus = this.bVigor + + EXTpericias[i].rank
                        break
                    case 1003: //Agilidade                                
                        bonus = this.bAgilidade + EXTpericias[i].rank
                        break
                    case 1004: //Destreza
                        bonus = this.bDestreza + EXTpericias[i].rank
                        break
                    case 1005: //Luta
                        bonus = this.bLuta + EXTpericias[i].rank
                        break
                    case 1006: //Intelecto
                        bonus = this.bIntelecto + EXTpericias[i].rank
                        break 
                    case 1007: //Prontidão
                        bonus = this.bProntidao + EXTpericias[i].rank
                        break
                    case 1008: //Presença
                        bonus = this.bPresenca + EXTpericias[i].rank
                        break
                }
                //Ataques corpo a corpo
                if(EXTpericias[i].chosenAttacks != undefined){
                    if(EXTpericias[i].isRanged == true){
                        bonus = this.bDestreza + EXTpericias[i].rank
                    }
                    else(
                        bonus = this.bLuta + EXTpericias[i].rank
                    )

                }
                
                if(EXTpericias[i].extraRank != undefined){
                    extraBonus = `* + ${bonus + EXTpericias[i].extraRank}`
                }
                else{
                    extraBonus = ''
                }
                arryPericias.push(`<tr><td>${Pericianome}[${GradPericia}]: +${bonus}${extraBonus}<tr><td>`)
            }            
            
            // Quebra de Coluna
            for(var i = 1; i<= ((pericias.length) + (EXTpericias.length)); i++){
                if(i <= Math.ceil((pericias.length + EXTpericias.length) / 2 )){
                    this.HTML_Pericia1 += arryPericias[i-1]
                }else{
                    this.HTML_Pericia2 += arryPericias[i-1]
                }
        }
    }
        
        HTML_vantagem1 = ''
        HTML_vantagem2 = ''
        vantagem(vantagens){
            var htmlVant = ''
            for(var i=0; i <= vantagens.length - 1; i++){
                //Se graduada
                htmlVant = `<tr><td>${vantagens[i]['name']}`
                if (vantagens[i]['rank'] > 1){
                    htmlVant += `[${vantagens[i]['rank']}]`
                }
                console.log(vantagens)
                //if (vantagens)
                //htmlVant += '</td></tr>'

                // Separar em duas barras
                if( Math.ceil(vantagens.length / 2) >= (i+1)){
                    this.HTML_vantagem1 += htmlVant
                }
                else{
                    this.HTML_vantagem2 += htmlVant
                }
                //Vantagens que modificam a ficha
                switch(vantagens[i].id){
                    case 4083:
                        //Rolamento Defensivo
                        this.rolamentoDefensivo = vantagens[i].rank
                        break
                }
            }
        }
    }



