const readline = require('readline').createInterface({

	input: process.stdin,
	output: process.stdout
});

	readline.question("Insira um valor X: ", (xStr)=>{
		readline.question("Insira um valor para Y: ", (yStr)=>{
			readline.question("Insira um operador (+, -, *, /): ", (operador)=>{

				const x = parseInt(xStr);
				const y = parseInt(yStr);

				let result;

				switch (operador){

					case '+':
						result = x+y;
						console.log(`${x} + ${y} = ${result}`);
						break;
					
					case '-':
						result = x-y;
						console.log(`${x} - ${y} = ${result}`);
						break;

					case '*':
						result = x*y;
						console.log(`${x} * ${y} = ${result}`);
						break;

					case '/':
						result = x/y;
						console.log(`${x} / ${y} = ${result}`);
						break;
					
					default:
						console.log("Operacao invalida!");

				}

				readline.close();
			})
		})
	});