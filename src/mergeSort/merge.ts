export function merge(esquerda: number[], direita: number[]): number[] {
  const resultado: number[] = [];
  let i: number = 0;
  let j: number = 0;

  while (i < esquerda.length && j < direita.length) {
    if (esquerda[i] <= direita[j]) {
      resultado.push(esquerda[i]);
      i++;
    } else {
      resultado.push(direita[j]);
      j++;
    }
  }

  while (i < esquerda.length) {
    resultado.push(esquerda[i]);
    i++;
  }

  while (j < direita.length) {
    resultado.push(direita[j]);
    j++;
  }

  return resultado;
}
