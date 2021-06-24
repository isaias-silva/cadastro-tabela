var office = [


]

var x = 0;

function cadastrar(n, s, d) {
    return {
        nome: n,
        salario: s,
        data_nasc: d
    }
}


function main() {
    var c_name = window.document.getElementById("nome").value
    var c_sala = window.document.getElementById("salario").value
    var c_data = window.document.getElementById("datana").value

    office[x] = cadastrar(c_name, c_sala, c_data)
    x++
}