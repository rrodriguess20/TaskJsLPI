//EXEMPLO 1 - Arrays
////////////////////////////////////////////////

let valores = [10, 20, 30, 40, 50];

let [v1, v2, v3, v4, v5] = valores;

console.log(v3);

let rest;

[v1, v2, v3, v4, v5, ...rest] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(rest);

//EXEMPLO 2 - Objetos
//////////////////////////////////////////////////

let almoco = {

	proteina: 'Frango',
	carboidrato: 'Macarrão Integral',
	fibra: 'Aveia em flocos',
	verdura: 'Alface'
};

let {proteina, carboidrato, fibra, verdura} = almoco;

console.log(proteina);
console.log(fibra);