//NECESSÁRIO CORREÇÕES!!!!!!!!!!!
function informacoes(pessoas){

	let altura;
	let sexo;
	let nHomens = 0;
	let nMulheres = 0;
	let somaHomens = 0;
	let somaMulheres = 0;
	let mediaH = 0;
	let mediaM = 0;
	let maiorAltura = 0;
	let menorAltura = 0;

	for(let pessoa of pessoas){

		pessoa = {altura, sexo};

		/*if(i === 0)
			maiorAltura = menorAltura = altura;*/
		

			if(altura>maiorAltura)
				maiorAltura = altura;
			if(altura < menorAltura)
				menorAltura = altura;
		
		

		//Atualiza a contagem dos sexos e a variavel auxiliar no calculo da media

		if(sexo==="M"||sexo==="m"){

			nHomens++;
			somaHomens +=altura;
		}

		else if(sexo==="F"||sexo==="f"){
			nMulheres++;
			somaMulheres +=altura;
		}
	}

	mediaH = nHomens > 0 ? (somaHomens/nHomens) : 0;
	mediaM = nMulheres > 0 ? (somaMulheres/nMulheres) : 0;

	console.log(`Maior altura: ${maiorAltura}`);
	console.log(`Menor altura: ${menorAltura}`);
	console.log(`Media homens: ${mediaH.toFixed(2)}`);
	console.log(`Media mulheres: ${mediaM.toFixed(2)}`);
	console.log(`Numero de homens: ${nHomens}`);
	console.log(`Numero de mulheres: ${nMulheres}`);
}

const pessoas = [
	{altura: 1.81, sexo: 'M'},
	{altura: 1.58, sexo: 'F'},
	{altura: 1.60, sexo: 'M'},
	{altura: 1.78, sexo: 'M'},
	{altura: 1.60, sexo: 'F'},
];

informacoes(pessoas);