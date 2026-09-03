import { merge } from "./merge";

export type PassoMergeSort = {
  tipo: "divisao" | "caso-base" | "intercalacao";
  profundidade: number;
  vetor: number[];
  esquerda?: number[];
  direita?: number[];
};

export function mergeSortRecursivo(
  vet: number[],
  observar?: (passo: PassoMergeSort) => void,
): number[] {
  function ordenar(vetor: number[], profundidade: number): number[] {
    if (vetor.length <= 1) {
      observar?.({ tipo: "caso-base", profundidade, vetor: [...vetor] });
      return [...vetor];
    }

    const meio = Math.floor(vetor.length / 2);
    const esquerda = vetor.slice(0, meio);
    const direita = vetor.slice(meio);
    observar?.({
      tipo: "divisao", profundidade, vetor: [...vetor],
      esquerda: [...esquerda], direita: [...direita],
    });

    const esquerdaOrdenada = ordenar(esquerda, profundidade + 1);
    const direitaOrdenada = ordenar(direita, profundidade + 1);
    const resultado = merge(esquerdaOrdenada, direitaOrdenada);
    observar?.({
      tipo: "intercalacao", profundidade, vetor: [...resultado],
      esquerda: [...esquerdaOrdenada], direita: [...direitaOrdenada],
    });
    return resultado;
  }

  return ordenar(vet, 0);
}
