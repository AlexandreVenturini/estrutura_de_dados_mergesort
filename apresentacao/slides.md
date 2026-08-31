# Merge Sort — apresentação unificada

## 1. Merge Sort — duas formas de ordenar

Versão iterativa e recursiva; demonstração do vetor de referência.

---

## 2. Intercalar é a operação central

Duas entradas ordenadas

Compare os primeiros valores disponíveis.

Copie o menor e avance nessa entrada.

Ao esgotar uma metade, copie o restante.

Um resultado ordenado

[3, 10] + [1, 7, 20]

1 → 3 → 7 → 10 → 20

Em empate, o operador <= escolhe a esquerda e preserva a estabilidade.

---

## 3. A versão iterativa aumenta os blocos

Entrada: 10, 3, 7, 20, 1, 2, 11, 0, 5, 4

1: 3, 10 | 7, 20 | 1, 2 | 0, 11 | 4, 5

2: 3, 7, 10, 20 | 0, 1, 2, 11 | 4, 5

4: 0, 1, 2, 3, 7, 10, 11, 20 | 4, 5

8: 0, 1, 2, 3, 4, 5, 7, 10, 11, 20

---

## 4. A recursão divide antes de intercalar

Caso-base e divisão

Se o tamanho for 0 ou 1, retorne uma cópia.

Calcule o meio com Math.floor(n / 2).

Separe as metades com slice.

Chamadas e retorno

Ordene recursivamente a esquerda.

Ordene recursivamente a direita.

Retorne merge(esquerdaOrdenada, direitaOrdenada).

---

## 5. A divisão começa pela esquerda

01 DIVIDE: [10, 3, 7, 20, 1, 2, 11, 0, 5, 4] -> [10, 3, 7, 20, 1] | [2, 11, 0, 5, 4]

02   DIVIDE: [10, 3, 7, 20, 1] -> [10, 3] | [7, 20, 1]

03     DIVIDE: [10, 3] -> [10] | [3]

04       BASE: [10] (já ordenado)

05       BASE: [3] (já ordenado)

06     INTERCALA: [10] + [3] -> [3, 10]

07     DIVIDE: [7, 20, 1] -> [7] | [20, 1]

08       BASE: [7] (já ordenado)

---

## 6. A metade esquerda fica ordenada

09       DIVIDE: [20, 1] -> [20] | [1]

10         BASE: [20] (já ordenado)

11         BASE: [1] (já ordenado)

12       INTERCALA: [20] + [1] -> [1, 20]

13     INTERCALA: [7] + [1, 20] -> [1, 7, 20]

14   INTERCALA: [3, 10] + [1, 7, 20] -> [1, 3, 7, 10, 20]

15   DIVIDE: [2, 11, 0, 5, 4] -> [2, 11] | [0, 5, 4]

---

## 7. A recursão avança pela direita

16     DIVIDE: [2, 11] -> [2] | [11]

17       BASE: [2] (já ordenado)

18       BASE: [11] (já ordenado)

19     INTERCALA: [2] + [11] -> [2, 11]

20     DIVIDE: [0, 5, 4] -> [0] | [5, 4]

21       BASE: [0] (já ordenado)

22       DIVIDE: [5, 4] -> [5] | [4]

---

## 8. A metade direita fica ordenada

23         BASE: [5] (já ordenado)

24         BASE: [4] (já ordenado)

25       INTERCALA: [5] + [4] -> [4, 5]

26     INTERCALA: [0] + [4, 5] -> [0, 4, 5]

27   INTERCALA: [2, 11] + [0, 4, 5] -> [0, 2, 4, 5, 11]

---

## 9. A última intercalação entrega o resultado

28 INTERCALA: [1, 3, 7, 10, 20] + [0, 2, 4, 5, 11] -> [0, 1, 2, 3, 4, 5, 7, 10, 11, 20]

Entrada preservada.

---

## 10. O custo depende da implementação

Recursiva deste projeto

Tempo: O(n log n).

Memória auxiliar: O(n).

Pilha de chamadas: O(log n).

Análise sem armazenar o histórico da demonstração.

Iterativa deste projeto

Não usa chamadas recursivas.

O concat repetido copia o prefixo acumulado: pode custar O(n²).

Com escrita em buffer, a versão iterativa clássica tem O(n log n).

---

## 11. O mesmo vetor, o mesmo resultado

Executar o trabalho

npm ci

npm start

npm run demo

npm test

O que a execução confirma

As duas versões ordenam a referência.

A recursão termina no caso-base.

Cada retorno intercala partes já ordenadas.

11 testes passaram.