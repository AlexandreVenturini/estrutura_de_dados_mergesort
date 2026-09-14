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
- `npm run demo`: mostra cada divisão, caso-base e intercalação da versão recursiva.
- `npm run build`: gera o JavaScript na pasta `dist`.

## Etapa 2 — versão recursiva e demonstração

Os arquivos citados no enunciado não estavam nesta cópia do projeto e foram criados:

- `src/mergeSort/recursivo.ts`: exporta `mergeSortRecursivo`, com caso-base de tamanho 0 ou 1, divisão ao meio, chamadas recursivas e união por `merge`.
- `src/mergeSort/demo.ts`: acompanha a própria execução da função recursiva por um observador opcional. O recuo indica a profundidade das chamadas; não há uma segunda implementação de ordenação na demonstração.

O algoritmo não altera o vetor recebido. Cada metade é menor que a entrada, garantindo que as chamadas alcancem o caso-base. Ao retornar, `merge` recebe duas metades já ordenadas e mantém essa propriedade no resultado. O uso de `<=` na intercalação prioriza a metade esquerda em empates, preservando a estabilidade.

Vetor de referência:

```text
[10, 3, 7, 20, 1, 2, 11, 0, 5, 4]
```

Resultado verificado:

```text
[0, 1, 2, 3, 4, 5, 7, 10, 11, 20]
```

A demonstração contém 28 eventos: 9 divisões, 10 casos-base e 9 intercalações.

## Revisão de custo

A versão recursiva tem tempo O(n log n), memória auxiliar O(n) e pilha O(log n), sem reter o histórico de eventos. O observador da demonstração imprime os eventos; um consumidor que armazene todas as cópias pode usar O(n log n) de espaço.

A versão iterativa existente foi preservada. Ela ordena corretamente, mas `novo = novo.concat(...)` copia repetidamente o prefixo acumulado e pode elevar o custo a O(n²). O custo clássico O(n log n) da versão iterativa exige evitar essas cópias, por exemplo escrevendo em um buffer.
