

// modifyHabilidade = [[], //Abildiade aumentada
//                     []] //quanto


class powerHabilidade {
    // Habilidades
    forca = ''
    vigor = ''
    agilidade = ''
    destreza = ''
    luta = ''
    intelecto = ''
    prontidao = ''
    presenca = ''
    // Defesas
    // Pericias

    habilidade(habilidade){         
        
        for(var i = 0; i <= modifyHabilidade[0].length - 1; i++){
            
            if( 1001 <= modifyHabilidade[0][i] || 1008 >=  modifyHabilidade[0][i]){
                console.log(modifyHabilidade[0][i])
                switch (modifyHabilidade[0][i]){
                    case 1001: //Força
                        this.forca = ' / ' + (habilidade[0].rank + modifyHabilidade[1][i])
                        break
                    case 1002: //Vigor
                        this.vigor = ' / ' + (habilidade[1].rank + modifyHabilidade[1][i])
                        break
                    case 1003: //Agilidade
                        this.agilidade = ' / ' + (habilidade[2].rank + modifyHabilidade[1][i])
                        break
                    case 1004: //Destreza
                        this.destreza = ' / ' + (habilidade[3].rank + modifyHabilidade[1][i])
                        break
                    case 1005: //Luta
                        this.luta = ' / ' + (habilidade[4].rank + modifyHabilidade[1][i])
                        break
                    case 1006: //Intelecto
                        this.intelecto = ' / ' + (habilidade[5].rank + modifyHabilidade[1][i])
                        console.log(this.intelecto)
                        break 
                    case 1007: //Prontidão
                        this.prontidao = ' / ' + (habilidade[6].rank + modifyHabilidade[1][i])
                        break
                    case 1008: //Presença
                        this.presenca = ' / ' + (habilidade[7].rank + modifyHabilidade[1][i])
                        break
                }
            }
        }
    }
    defesa(){
        for(var i = 0; i <= modifyHabilidade.length - 1; i++){
            // Pericias comuns
            if(modifyHabilidade[0].i){


            }
        }
    }


}



