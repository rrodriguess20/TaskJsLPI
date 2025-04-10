function somaArray(A, B){

	let C = 0;

	if(A.length!=B.length)
		console.log(`Operação inválida!`);

	
	else{

		for(let i = 0; i<A.length; i++){

			C += (A[i]+B[i]);
		}
	}

	return C;
}

let A = [1, 2, 3, 4, 5]; //15
let B = [6, 7, 8, 9, 10]; //40

console.log(somaArray(A, B));