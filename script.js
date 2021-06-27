let office = [];
let obja = [];
let x = 0;
let tablee = window.document.getElementById("tab");
let b_cad = window.document.getElementById("cadastro");
b_cad.addEventListener('click', main)


function cadastrar(n, s, d, i) {

    return {
        nome: n,
        salario: s,
        data_nasc: d,
        id_x: i

    };
}

function main() {
    let c_name = window.document.getElementById("nome").value;
    let c_sala = window.document.getElementById("salario").value;
    let c_data = window.document.getElementById("datana").value;

    if (c_name == "" || c_data == "" || c_sala == "" || c_sala < 0) {
        alert("erro, porfavor preencha todos os campos corretamente")
    } else {
        office[x] = cadastrar(c_name, c_sala, c_data, x);
        tabela();
        x++;
    }
}

function tabela() {
    let nova_linha = document.createElement("tr");
    nova_linha.setAttribute("id", `cadastro_${x}`)

    let novo_nome = document.createElement("td");
    novo_nome.setAttribute("value", `${office[x].nome}`)

    let novo_sala = document.createElement("td");
    novo_sala.setAttribute("value", `${office[x].salario}`)

    let nova_data = document.createElement("td");
    nova_data.setAttribute("value", `${office[x].data_nasc}`)

    let novo_id = document.createElement("td");
    novo_id.setAttribute("value", `${office[x].id_x}`)

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