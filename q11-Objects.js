let instituicao = {

	nomeInstituicao: 'Instituto da Tecnologia',
	dataFundacao: '2006',
	campus: 'Fortaleza'

}

let professor = {

	nomeProfessor: 'Alberto Estênio',
	codigoProfessor: '2050201940'
}

let disciplina = {

	nomeDisciplina: 'Linguagem de Programação I',
	descricao: 'Disciplina que ensina os fundamentos da lógica e da programação usando uma linguagem como base para resolver problemas computacionais',
	codigoDisciplina: '135025'
}

let aluno = {

	nomeAluno: 'Elizabeth R. Park',
	matricula: '200650207803'
}

let diario = {

	...instituicao,
	...professor,
	...disciplina,
	...aluno
}

console.log(diario);