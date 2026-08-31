import { merge } from "./merge";

export function mergeSortIterativo(vet: number[]): number[] {
  const n: number = vet.length;
  let atual: number[] = [...vet];
  let largura: number = 1;

  while (largura < n) {
    let novo: number[] = [];

    for (let i: number = 0; i < n; i += 2 * largura) {
      const esquerda: number[] = atual.slice(i, i + largura);
      const direita: number[] = atual.slice(i + largura, i + 2 * largura);
      novo = novo.concat(merge(esquerda, direita));
    }

    atual = novo;
    largura *= 2;
  }

  return atual;
}
