const readline = require('readline').createInterface({

	input: process.stdin,
	output: process.stdout
});

	readline.question("Insira um valor real para x: ", (xStr)=>{
		readline.question("Insira um valor real para y: ", (yStr)=>{

			const x = parseFloat(xStr);
			const y = parseFloat(yStr);

			const result = (((x**y)+3*x+1))/((x+1)**y);

			console.log(`Resultado: ${result.toFixed(5)}`);

			readline.close();
		})
	});