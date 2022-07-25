class veiculo {
    constructor(...tipo) {
        this.tipo = tipo //ATRIBUTO
    }
    totalizacao() { //MÉTODO
        let aereoTotal = 0
        let terraTotal = 0
        let aquaticoTotal = 0
        this.tipo.forEach(t => { //INCREMENTO
            if (t == "aereo") {
                aereoTotal = aereoTotal + 1 
            } else if (t == 'aquatico') {
                aquaticoTotal = aquaticoTotal + 1
            } else if (t == 'terra') {
                terraTotal = terraTotal + 1
            }
        });
        return `Total aereo: ${aereoTotal}, Total terra: ${terraTotal}, Total aquatico: ${aquaticoTotal}`
    }
}

const v1 = 'terra'
const v2 = 'aereo'
const v3 = 'aquatico'
const v4 = 'terra'
const total = new veiculo(v1, v2, v3, v4) //INSTANCIANDO
console.log(total.totalizacao())