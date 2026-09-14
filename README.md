# Merge Sort — Estrutura de Dados

Implementações iterativa e recursiva em TypeScript, com demonstração passo a passo.

## Executar

Com Node.js e npm instalados, na pasta do projeto:

```sh
npm ci
npm start
npm run demo
```

- `npm start`: compara as duas versões com o vetor de referência.
- `npm run demo`: mostra o vetor inteiro dividido em blocos a cada passo, resolvendo a metade esquerda por completo antes de seguir para a direita.
- `npm run build`: gera o JavaScript na pasta `dist`.

## Versão recursiva e demonstração

- `src/mergeSort/recursivo.ts`: exporta `mergeSortRecursivo`, com caso-base de tamanho 0 ou 1, divisão ao meio, chamadas recursivas e união por `merge`.
- `src/mergeSort/demo.ts`: mostra o vetor de referência como uma lista de blocos, imprimindo essa lista inteira a cada divisão e a cada junção. A metade esquerda é sempre resolvida por completo (dividida e reunida) antes de a direita ser tocada.

O algoritmo não altera o vetor recebido. Cada metade é menor que a entrada, garantindo que as chamadas alcancem o caso-base. Ao retornar, `merge` recebe duas metades já ordenadas e mantém essa propriedade no resultado. O uso de `<=` na intercalação prioriza a metade esquerda em empates, preservando a estabilidade.

Vetor de referência:

```text
[10, 3, 7, 20, 1, 2, 11, 0, 5, 4]
```

Resultado verificado:

```text
[0, 1, 2, 3, 4, 5, 7, 10, 11, 20]
```

A demonstração contém 18 passos: 9 divisões e 9 junções.

## Revisão de custo

A versão recursiva tem tempo O(n log n), memória auxiliar O(n) e pilha O(log n).

A versão iterativa existente foi preservada. Ela ordena corretamente, mas `novo = novo.concat(...)` copia repetidamente o prefixo acumulado e pode elevar o custo a O(n²). O custo clássico O(n log n) da versão iterativa exige evitar essas cópias, por exemplo escrevendo em um buffer.
