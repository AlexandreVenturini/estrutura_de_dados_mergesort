import { merge } from "./merge";

export function mergeSortRecursivo(vet: number[]): number[] {
  if (vet.length <= 1) {
    return [...vet];
  }

  const meio = Math.floor(vet.length / 2);
  const esquerda = vet.slice(0, meio);
  const direita = vet.slice(meio);

  return merge(mergeSortRecursivo(esquerda), mergeSortRecursivo(direita));
}
