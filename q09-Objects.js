var pessoa1 = {

	nome: 'Djavan',
	dataNascimento: '27/01/1949'
}

var pessoa2 = {

	nome: 'Rebeca Rodrigues',
	dataNascimento: '20/01/2006'
}

var endereco = {

	nome: 'Rua Gentileza - 11500', //Referência à data de lançamento do álbum 'Memórias, Crônicas e Declarações de Amor' (11/05/2000)
	bairro: 'Marisa Monte',
	cidade: 'MPB',
	cep: '02081-962' //Data da primeira apresentação de Garota de Ipanema
}
var clinica = {

	nome: 'Clínica Musical',
	endereco: endereco

}

var especializacao = {

	nome: 'Terapeuta',
	descricao: 'Responsavel por ajudar os pacientes com as dores do amago'
}

var medico = {

	nome: pessoa1.nome, 
	especializacao: especializacao
}

var paciente = {

	nome: pessoa2.nome,
	telefone: '40028922'

}

var consulta = {

	medico: medico,
	data: '11/04/2025',
	horario: '16:30', //Início do pôr do sol
	clinica: clinica,
	paciente: paciente
}