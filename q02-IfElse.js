const readline = require('readline').createInterface({

	input: process.stdin,
	output: process.stdout
});

	readline.question("Insira um valor inteiro para x: ", (xStr)=>{

		const x = parseInt(xStr);

		const intervalo = x >=7 && x<= 10 ? "Esta no intervalo" : "Nao esta no intervalo";

		console.log(intervalo);

		readline.close();
	});