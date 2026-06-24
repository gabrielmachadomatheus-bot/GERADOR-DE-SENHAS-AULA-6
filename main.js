const numeroSenha = document.querySelector('.parametro-senha__texto');
const campoSenha = document.getElementById('campo-senha');

let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

// -------------------
// CARACTERES
// -------------------
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%&*()-_=+[]{}<>?/";

// -------------------
// CHECKBOXES
// -------------------
const checkboxMaiusculo = document.querySelector('input[name="maiusculo"]');
const checkboxMinusculo = document.querySelector('input[name="minusculo"]');
const checkboxNumero = document.querySelector('input[name="numero"]');
const checkboxSimbolo = document.querySelector('input[name="simbolo"]');

// -------------------
// ALTERAR TAMANHO
// -------------------
function diminuiTamanho() {
if (tamanhoSenha > 1) {
tamanhoSenha--;
}
numeroSenha.textContent = tamanhoSenha;
gerarSenha();
}

function aumentaTamanho() {
if (tamanhoSenha < 20) {
tamanhoSenha++;
}
numeroSenha.textContent = tamanhoSenha;
gerarSenha();
}

// -------------------
// GERAR SENHA
// -------------------
function gerarSenha() {

let caracteres = "";

if (checkboxMaiusculo.checked) {
caracteres += letrasMaiusculas;
}

if (checkboxMinusculo.checked) {
caracteres += letrasMinusculas;
}

if (checkboxNumero.checked) {
caracteres += numeros;
}

if (checkboxSimbolo.checked) {
caracteres += simbolos;
}

if (caracteres.length === 0) {
campoSenha.value = "Selecione opções";
return;
}

let senha = "";

for (let i = 0; i < tamanhoSenha; i++) {
const index = Math.floor(Math.random() * caracteres.length);
senha += caracteres[index];
}

campoSenha.value = senha;
}

// atualizar quando marcar/desmarcar
checkboxMaiusculo.onchange = gerarSenha;
checkboxMinusculo.onchange = gerarSenha;
checkboxNumero.onchange = gerarSenha;
checkboxSimbolo.onchange = gerarSenha;

// gerar inicial
gerarSenha();
