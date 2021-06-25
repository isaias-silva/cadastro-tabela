var office = [];

var x = 0;
var tablee = window.document.getElementById("tab");

function cadastrar(n, s, d, i) {

    return {
        nome: n,
        salario: s,
        data_nasc: d,
        id_x: i

    };
}

function main() {
    var c_name = window.document.getElementById("nome").value;
    var c_sala = window.document.getElementById("salario").value;
    var c_data = window.document.getElementById("datana").value;

    office[x] = cadastrar(c_name, c_sala, c_data, x);
    tabela();
    x++;
}

function tabela() {
    var nova_linha = document.createElement("tr");
    var novo_nome = document.createElement("td");

    var novo_sala = document.createElement("td");
    var nova_data = document.createElement("td");
    var novo_id = document.createElement("td");
    tablee.appendChild(nova_linha);

    nova_linha.appendChild(novo_nome);

    novo_nome.innerHTML = office[x].nome;

    nova_linha.appendChild(novo_sala);
    novo_sala.innerHTML = office[x].salario;

    nova_linha.appendChild(nova_data);
    nova_data.innerHTML = office[x].data_nasc;

    nova_linha.appendChild(novo_id);
    novo_id.innerHTML = office[x].id_x;


}