let listaCompras = ["Arroz", "Feijão", "Macarrão", "Carne"];

listaCompras.unshift("Manteiga"); //insere elemento no inicio, e desloca os demais elementos para um indice maior
listaCompras[listaCompras.length] = "Capuccino"; //inserindo elemento no fim da lista
listaCompras.splice(2, 0, "Banana"); //adiciona ou remove elementos em qualquer posição da lista

//continuar

console.log(listaCompras);