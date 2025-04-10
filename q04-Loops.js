//NECESSÁRIO CORREÇÕES!!!!!!!!!!!
function informacoes(pessoas){

	let maiorAltura = 0;
	let menorAltura = 0;
	let somaAlturaH = 0;
	let somaAlturaM = 0;
	let nHomens = 0;
	let nMulheres = 0;

	for(let i = 0; i<pessoas.length; i++){

		const {altura, sexo} = pessoas[i];

		if(pessoas[i]===0)
			maiorAltura = menorAltura = altura;
		
		else{

			if(altura>maiorAltura)
				maiorAltura = altura;

			if(altura<menorAltura)
				menorAltura = altura;
		}
		
		
	}
}

const pessoas = [
	{altura: 1.81, sexo: 'M'},
	{altura: 1.58, sexo: 'F'},
	{altura: 1.60, sexo: 'M'},
	{altura: 1.78, sexo: 'M'},
	{altura: 1.60, sexo: 'F'},
];

informacoes(pessoas);