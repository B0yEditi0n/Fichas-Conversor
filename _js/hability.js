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
        htmlEsquiva
        bEsquiva
        htmlApara
        bAparar
        htmlResistencia
        bResistencia
        htmlFortitude
        bFortitude
        htmlVontade
        bVontade
        
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
                        this.bEsquiva = this.bAgilidade + valor 
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
                        this.bResistencia = this.bVigor + valor
                        this.htmlResistencia = this.bVigor + defesas[i].rank
                        if(eAumentado == true){
                            this.htmlResistencia += ' / ' + this.bResistencia 
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
                
            }
        }

        HTML_Pericia1 = ''
        HTML_Pericia2 = ''

        pericia(pericias){
            var Pericianome = ''
            var GradPericia = 0            
            var bonus = 0
            for (i = 0; (i) <= pericias.length - 1; i++) {
                Pericianome = pericias[i]['name']
                GradPericia = pericias[i]['rank']

                switch (pericias[i]['id']) {
                    case 3001: //Acrobacias
                        bonus += this.bAgilidade
                        break;
                    case 3002: //Atletismo
                        bonus += this.bForca
                        break;
                    case 3003: //Enganação
                        bonus += this.bPresenca
                        break;
                    case 3004: //Furtividade 
                        bonus += this.bAgilidade
                        break;
                    case 3005: //Intimidação
                        bonus += this.bPresenca
                        break;
                    case 3006: //Intuição
                        bonus += this.bProntidao
                        break;
                    case 3007: //Investigação
                        if (GradPericia == 0){bonus = 0;}
                        else {bonus += this.bIntelecto}
                        break;
                    case 3008: //Percepção
                        bonus += this.bProntidao
                        break;
                    case 3009: //Persuasão
                        bonus += this.bPresenca
                        break;
                    case 3010: //Prestidigitação
                        if(GradPericia == 0){bonus = 0}
                        else{ bonus += this.bDestreza}
                        break;
                    case 3011: //Tecnologia
                        if(GradPericia == 0){bonus = 0}
                        else { bonus += this.bIntelecto}
                        break;
                    case 3012: //Tratamento
                        if (GradPericia == 0) {bonus = 0}
                        else{bonus += this.bIntelecto}
                        break;
                    case 3013: //Veiculos
                        bonus += this.bDestreza
                        break;

                }
                //console.log(GradPericia)
                
                //Quebra de Coluna
                if(Math.ceil(pericias.length / 2 ) >= i + 1){
                    this.HTML_Pericia1 += `<tr><td>${Pericianome}[${GradPericia}]: +${GradPericia + bonus}</td></tr>`    
                }
                else{
                    this.HTML_Pericia2 += `<tr><td>${Pericianome}[${GradPericia}]: +${GradPericia + bonus}</td></tr>`
                }


            }


        }
        
        HTML_vantagem1 = ''
        HTML_vantagem2 = ''
        vantagem(vantagens){
            var htmlVant = ''
            for(i=0; i <= vantagens.length - 1; i++){
                if (vantagens[i]['rank'] > 1){
                    htmlVant = `<tr><td>${vantagens[i]['name']}[${vantagens[i]['rank']}]</td></tr>`
                }
                else{
                    htmlVant = `<tr><td>${vantagens[i]['name']}</td></tr>`  
                }

                if( Math.ceil(vantagens.length / 2) >= (i+1)){
                    this.HTML_vantagem1 += htmlVant
                }
                else{
                    this.HTML_vantagem2 += htmlVant
                }
            }
        }
    }



