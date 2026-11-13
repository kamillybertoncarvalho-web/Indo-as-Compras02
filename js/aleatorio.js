const nomes = [
    "Ana",
    "Beatriz",
    "Camila",
    "Fernanda",
    "Júlia",
    "Mariana",
    "Gabriela",
    "Isabela"
];

export function aleatorio(lista) {

    const posicao = Math.floor(Math.random() * lista.length);

    return lista[posicao];
}

export const nome = aleatorio(nomes);