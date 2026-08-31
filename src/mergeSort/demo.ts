import { mergeSortRecursivo } from "./recursivo";

const vetorReferencia = [10, 3, 7, 20, 1, 2, 11, 0, 5, 4];
const formatar = (vetor: number[]) => `[${vetor.join(", ")}]`;
let numero = 0;

console.log("MERGE SORT RECURSIVO — passo a passo");
console.log(`Vetor original: ${formatar(vetorReferencia)}\n`);

const resultado = mergeSortRecursivo(vetorReferencia, (passo) => {
  const prefixo = `${String(++numero).padStart(2, "0")} ${"  ".repeat(passo.profundidade)}`;
  if (passo.tipo === "caso-base") {
    console.log(`${prefixo}BASE: ${formatar(passo.vetor)} (já ordenado)`);
  } else if (passo.tipo === "divisao") {
    console.log(`${prefixo}DIVIDE: ${formatar(passo.vetor)} -> ${formatar(passo.esquerda!)} | ${formatar(passo.direita!)}`);
  } else {
    console.log(`${prefixo}INTERCALA: ${formatar(passo.esquerda!)} + ${formatar(passo.direita!)} -> ${formatar(passo.vetor)}`);
  }
});

console.log(`\nResultado: ${formatar(resultado)}`);
console.log(`Entrada preservada: ${formatar(vetorReferencia)}`);
