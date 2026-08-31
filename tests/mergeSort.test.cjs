const { test } = require("node:test");
const assert = require("node:assert/strict");
const { mergeSortRecursivo } = require("../dist/mergeSort/recursivo.js");
const { mergeSortIterativo } = require("../dist/mergeSort/iterativo.js");

for (const vetor of [[], [1], [2, 1], [3, 1, 2], [4, 4, 1, 4], [-3, 0, -8, 2.5],
  [1, 2, 3, 4], [5, 4, 3, 2, 1], [10, 3, 7, 20, 1, 2, 11, 0, 5, 4]]) {
  test(`ordena e preserva a entrada ${JSON.stringify(vetor)}`, () => {
    const original = [...vetor];
    const esperado = [...vetor].sort((a, b) => a - b);
    assert.deepEqual(mergeSortRecursivo(vetor), esperado);
    assert.deepEqual(mergeSortIterativo(vetor), esperado);
    assert.deepEqual(vetor, original);
  });
}

test("rastreamento da referência: 9 divisões, 10 bases e 9 intercalações", () => {
  const passos = [];
  const resultado = mergeSortRecursivo([10, 3, 7, 20, 1, 2, 11, 0, 5, 4], p => passos.push(p));
  for (const [tipo, total] of [["divisao", 9], ["caso-base", 10], ["intercalacao", 9]]) {
    assert.equal(passos.filter(p => p.tipo === tipo).length, total);
  }
  assert.deepEqual(passos.at(-1).vetor, resultado);
  for (const passo of passos.filter(p => p.tipo === "intercalacao")) {
    assert.deepEqual(passo.vetor, [...passo.esquerda, ...passo.direita].sort((a, b) => a - b));
  }
});

test("observador recebe cópias e não consegue alterar a ordenação", () => {
  const vetor = [3, 2, 1];
  const resultado = mergeSortRecursivo(vetor, passo => {
    passo.vetor.fill(99);
    passo.esquerda?.fill(99);
    passo.direita?.fill(99);
  });
  assert.deepEqual(resultado, [1, 2, 3]);
  assert.deepEqual(vetor, [3, 2, 1]);
});
