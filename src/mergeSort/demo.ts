import { merge } from "./merge";

const vetorReferencia = [10, 3, 7, 20, 1, 2, 11, 0, 5, 4];

let passo = 0;
function mostrar(blocos: number[][]): void {
  passo++;
  const linha = blocos.map((bloco) => `[${bloco.join(", ")}]`).join(" ");
  console.log(`${String(passo).padStart(2, "0")}: ${linha}`);
}

function ordenar(blocos: number[][], indice: number, vetor: number[]): number[] {
  if (vetor.length <= 1) {
    return [...vetor];
  }

  const meio = Math.floor(vetor.length / 2);
  const esquerda = vetor.slice(0, meio);
  const direita = vetor.slice(meio);
  blocos.splice(indice, 1, esquerda, direita);
  mostrar(blocos);

  blocos[indice] = ordenar(blocos, indice, esquerda);
  blocos[indice + 1] = ordenar(blocos, indice + 1, direita);

  const mesclado = merge(blocos[indice], blocos[indice + 1]);
  blocos.splice(indice, 2, mesclado);
  mostrar(blocos);

  return mesclado;
}

console.log("MERGE SORT RECURSIVO — passo a passo (esquerda antes da direita)");
console.log(`Vetor original: [${vetorReferencia.join(", ")}]\n`);

const resultado = ordenar([[...vetorReferencia]], 0, [...vetorReferencia]);

console.log(`\nResultado: [${resultado.join(", ")}]`);
console.log(`Entrada preservada: [${vetorReferencia.join(", ")}]`);
