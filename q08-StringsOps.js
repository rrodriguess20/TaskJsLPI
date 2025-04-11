//EXEMPLO 1 - concat, charAt, indexOf, replace, slice, split
///////////////////////////////////////////////////////////////////////////

let prenome = "Rebeca ";
let sobrenome = "da Silva Rodrigues";

let nomeCompleto = prenome.concat(sobrenome);

console.log(nomeCompleto); //"Rebeca da Silva Rodrigues"

console.log(nomeCompleto.charAt(16)); //"R"

console.log(nomeCompleto.indexOf("Rodrigues")); //16

console.log(nomeCompleto.replace("da Silva", "Marchon")); //não altera a string original

console.log(nomeCompleto.slice(0, 6)); //"Rebeca" -> mostrará apenas o prenome

console.log(nomeCompleto.split(" ")); //não altera a string original

//EXEMPLO 2 - join(), .length
////////////////////////////////////////////////////////////////////////

let cidadesLitoralLeste = ["Aracati", "Beberibe", "Cascavel", "Fortim", "Icapuí", "Itaiçaba", "Jaguaruana", "Pindoretama"];

console.log(cidadesLitoralLeste.join(", "));

console.log(cidadesLitoralLeste.join(", ").length); //mostra o comprimento da string criada com a função join

//EXEMPLO 3 - Template Literals
///////////////////////////////////////////////////////////////////////

let professor = "Silas Santiago";
let disciplina = "Linguagem de Programação I";
let horario = "Quarta-feira, Sexta-feira";
const info = `Disciplina: ${disciplina}\nMinistrada por: ${professor}\nDias: ${horario}`;

console.log(info);