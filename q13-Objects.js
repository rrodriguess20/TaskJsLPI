let funcionarios = [
	{id:"002", nome:"Renata", profissao:"Recursos Humanos", inicio: new Date("2023-01-30")},
	{id:"003", nome:"Elizabeth", profissao:"Contabilidade", inicio: new Date("2023-05-15")},
	{id:"006", nome:"Gustavo", profissao:"Vendedor", inicio: new Date("2024-03-20")},
	{id:"005", nome:"Matheus", profissao:"Vendedor", inicio: new Date("2023-01-31")},
	{id:"001", nome:"Sarah", profissao:"Gerente", inicio: new Date("2023-01-30")},
	{id:"008", nome:"Clara", profissao:"Vendedora", inicio: new Date("2025-02-28")},
	{id:"007", nome:"Rebeca", profissao:"Repositora", inicio: new Date("2024-01-20")},
	{id:"009", nome:"Pablo", profissao:"Serviços Gerais", inicio: new Date("2023-02-06")},
	{id:"010", nome:"Astolfo", profissao:"Manutenção", inicio: new Date("2023-05-30")}
]

console.log(`Ordem - Nome:`);
funcionarios.sort((a, b) => a.nome.localeCompare(b.nome));
console.log(funcionarios);

console.log(`Ordem - ID:`);
funcionarios.sort((a, b) => a.id - b.id)
console.log(funcionarios);

console.log(`Ordem - Data de Início:`);
funcionarios.sort((a, b) => a.inicio - b.inicio);
console.log(funcionarios);