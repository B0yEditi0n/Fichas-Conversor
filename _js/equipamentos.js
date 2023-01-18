async function equipamentos(device){
    Equip = new modeloEquipamentos
    if(device.length > 0){
        document.getElementById('EquipH2').innerText = 'Equipamentos'
        document.getElementById('EquipH2').style = `
            background-color: black;
            color: white;
            padding: 0.1cm;
        
            border-bottom: 2px solid;
            border-radius: 5px;
        `
        document.getElementById('Equipamentos').innerHTML = await Equip.startLayout(device) 
    }   
    
}
class modeloEquipamentos extends powerLayout{
    EqPoderes = new chosePower

    Veiculos(){
        return [6073, 6074, 6075, 6076, 6077, 6078, 6079, 6080, 6081, 6082, 6083, 6084]
    }
    async buildVeiculos(veiculo){
        var VeiculoHTML = ''
        VeiculoHTML = `<table><tr><tr><th>${veiculo.name} Custo ${veiculo.cost}</th></tr><td>` 
        for(var i = 0; i <= veiculo.powers.length -1; i++){
            VeiculoHTML += await this.EqPoderes.startSelect(veiculo.powers[i])
        }
        VeiculoHTML += '</td></tr></table></br>'
        return(VeiculoHTML)
    }
    async MakeEquipament(equipamente){
        var deviceHTML = ''

        deviceHTML = `<b>${equipamente.name}</b> - ${equipamente.cost} </br>`

        //Veiculos ou Quarteis
        /*if(equipamente.power == undefined){
            deviceHTML = await this.EqPoderes.startSelect(equipamente.power[0])
        }
        else{
            deviceHTML = `<table><tr><tr><th>${equipamente.name} Custo ${equipamente.cost}</th></tr><td>` 
            for(var i = 0; i <= equipamente.power.length -1; i++){
                deviceHTML += await this.EqPoderes.startSelect(equipamente.power[i])
            }
            deviceHTML += '</td></tr></table>'
        }*/
        return(deviceHTML)
    }
    async startLayout(devices){
        var html = ''
        //Loop
        for(var i = 0; i <= devices.length -1; i++){
            if(this.Veiculos().indexOf(devices[i].id) > -1){
                
                html += await this.buildVeiculos(devices[i])
            }   
            else{ // qualquer equipamentos
                html += await this.MakeEquipament(devices[i])
            }
        }
        
        return(html)
    }
}