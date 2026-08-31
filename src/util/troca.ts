export function troca(vet: number[], i: number, j: number): void {
  const aux: number = vet[i];
  vet[i] = vet[j];
  vet[j] = aux;
}
