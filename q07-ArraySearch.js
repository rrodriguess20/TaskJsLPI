let amigos = ["Bia", "Donato", "Mateus", "Léo", "Gabriel", "Rebeca"];

console.log(`Kildery está na lista? R:`, amigos.includes("Kildery"));
; //false

console.log(`Adicionando Kildery à lista...`);
amigos.splice(amigos.length, 0, "Kildery");

console.log(`Kildery está na lista? R:`, amigos.includes("Kildery"));
; //true

let position = amigos.indexOf("Kildery")+1;

console.log(`Em qual posição Kildery está? R: ${position}`);