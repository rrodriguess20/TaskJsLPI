let musicasFavoritas = [
	{titulo: "Every Breath You Take", artista: "The Police", anoLancamento: "1983"},
	{titulo: "Os Anos de Uma Alma", artista: "João Manô", anoLancamento: "2023"},
	{titulo: "It's Not The Same Anymore", artista: "Rex Orange County", anoLancamento: "2019"},
	{titulo: "Best Thing", artista: "Rock City Worship", anoLancamento: "2022"},
	{titulo: "Honeymoon", artista: "Ethan C.  Davis", anoLancamento: "2023"},
	{titulo: "On Time", artista: "Surfaces", anoLancamento: "2021"},
	{titulo: "THE SHADE", artista: "Rex Orange County", anoLancamento: "2022"}
]

for(let musicas of musicasFavoritas){

	console.log(`Título: ${musicas.titulo}\nArtista: ${musicas.artista}\nLançamento: ${musicas.anoLancamento}`);
}