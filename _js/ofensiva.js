async function startOfense(ficha){
    
    BuildOfense = new Ofensiva
    BuildOfense.habilidade = ficha.characters[0].abilities
    BuildOfense.pericias = ficha.characters[0].extraSkills
    BuildOfense.vantagens
    
    document.getElementById('Ofensiva'). innerHTML = BuildOfense.filtragemdeEfeitos(ficha.characters[0].powers)
    
}

class Ofensiva{
    habilidade = {}
    pericias = {}
    vantagens = {}
    Acerto(id, range, name){
        var Luta = 0
        var VDistancia = 0
        var VPerto = 0
        var PDistancia = 0
        var PPerto = 0
        console.log(this.habilidade[4])
        if(this.habilidade[3].extraRank != undefined){
            Destreza = this.habilidade[3].rank + this.habilidade[4].extraRank
        }
        else{
            Destreza = this.habilidade[3].rank
        }

        if(this.habilidade[4].extraRank != undefined){
            Luta = this.habilidade[4].rank + this.habilidade[4].extraRank
        }
        else{
            Luta = this.habilidade[4].rank
        }

        for(var i = 0; i <= this.vantagens.length -1; i++){
            if(this.vantagens.id == 4011){
                //Acerto a Distanacia
                VDistancia = this.vantagens.rank
            }
            if(this.vantagens.id == 4013){
                //Acerto Corpo a Corpo
                PPerto = this.vantagens.rank
            }
        }

        if(id = 1){
            //Bonus de pericia
            for(var i = 0;i <= this.pericias.length -1; i++){
                if(this.pericias[i].id == )
            }
            
        }
        if(id = 2){
            //Destreza Vantagem e Perícia
        }
        if(id = 3){

        }
    }
    modificadores(ataque){

    }
    ataque_comum(ataque){
        var ofensiva_String = ''

        // Nome
        ofensiva_String += `<strong>${ataque.name}</strong>: `
        // Acerto
        ofensiva_String += this.efeito[powers['effectID']].name
        console.log(ataque.name)
        return(ataque.name)
    }
    filtragemdeEfeitos(poderes){
        var html = ''

        for(var i = 0; i<= poderes.length -1; i++){
            
            if(poderes[i].alternateEffects.length > 0){
                html += this.filtragemdeEfeitos(poderes[i].alternateEffects)
            }
            
            if(poderes[i].powers != undefined){
                html += this.filtragemdeEfeitos(poderes[i].powers)
            }
            
            if(poderes[i].typeID == 1){
                switch(poderes[i].id){           
                    default:
                        
                        html += this.ataque_comum(poderes[i])
                }
            }
            
        }
        return(html)
    }
}
