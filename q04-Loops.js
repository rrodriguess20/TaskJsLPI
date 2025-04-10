function informacoes(pessoas){

	let maiorAltura = 0;
	let menorAltura = 0;
	let somaAlturaH = 0;
	let somaAlturaM = 0;
	let nHomens = 0;
	let nMulheres = 0;

	for(let i = 0; i<pessoas.length; i++){

		const {altura, sexo} = pessoas[i];

		if(i===0)
			maiorAltura = menorAltura = altura;
		
		
		else{

			if(altura>maiorAltura)
				maiorAltura = altura;

			if(altura<menorAltura)
				menorAltura = altura;
		}
		

		if(sexo==='M'||sexo==='m'){
			nHomens++;
			somaAlturaH += altura;
		}

		if(sexo==='F'||sexo==='f'){
			nMulheres++;
			somaAlturaM += altura;
		}
		
		
	}

	let mediaAlturaH = somaAlturaH/nHomens;
	let mediaAlturaM = somaAlturaM/nMulheres;

	console.log(`Informações:`);
	console.log(`Maior altura: ${maiorAltura}`);
	console.log(`Menor altura: ${menorAltura}`);
	console.log(`Nº de homens: ${nHomens}`);
	console.log(`Nº de mulheres: ${nMulheres}`);
	console.log(`Média das alturas - Homens: ${mediaAlturaH.toFixed(2)}`);
	console.log(`Média das alturas - Mulheres: ${mediaAlturaM.toFixed(2)}`);
}

const pessoas = [
	{altura: 1.81, sexo: 'M'},
	{altura: 1.58, sexo: 'F'},
	{altura: 1.60, sexo: 'M'},
	{altura: 1.78, sexo: 'M'},
	{altura: 1.60, sexo: 'F'},
];

informacoes(pessoas);