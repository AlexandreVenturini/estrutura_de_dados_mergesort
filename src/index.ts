import { mergeSortIterativo } from "./mergeSort/iterativo";
import { mergeSortRecursivo } from "./mergeSort/recursivo";

const vetorReferencia: number[] = [10, 3, 7, 20, 1, 2, 11, 0, 5, 4];

console.log("vetor original:      ", vetorReferencia);
console.log("merge sort iterativo:", mergeSortIterativo(vetorReferencia));
console.log("merge sort recursivo:", mergeSortRecursivo([...vetorReferencia]));
