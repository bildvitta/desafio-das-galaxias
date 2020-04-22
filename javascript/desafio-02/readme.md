# Desafio 02: Multiplicar os números pares da matriz pelo primeiro ímpar encontrado.

Dada uma matriz composta `[[1, 3, 4], [5, 6], [0, 2]]`, crie uma função que receba `n` matrizes, ou seja, quantos desejar via parâmetro. Percorra essas matrizes e:

- Caso o número seja par, multiplique-o pelo primeiro número ímpar da matriz atual;
- Caso seja ímpar, deixe o número como está.
- Caso não exista nenhum número ímpar namatriz, não faça nada.

Ah, e lembre-se de desconsiderar e remover os elementos que não forem matrizes.

O retorno sempre será uma matriz, ainda que vazia.

## Exemplos

``` js
console.log(multiply([1, 3, 4], [5, 6], [0, 1]))
// [[1, 3, 4], [5, 6], [0, 1]] => [[1, 3, 1 * 4], [5, 6*5], [0 * 1, 1]] no final vira =>
// retorno: [[1, 3, 4], [5, 30], [0, 1]]

console.log(multiply([0, 2, 7], [5, 1], [2, 0]))
// [[0, 2, 7], [5, 1], [2, 0]] => [[0 * 7, 2 * 7, 7], [5, 1], [2, 0]]
// retorno: [[0, 14, 7], [5, 1], [2, 0]]

console.log(multiply([0, 1], 5, [2, 0]))
// [[0, 1], 5, [2, 0]] => [[0 * 1], [2, 0]]
// retorno: [[0, 1], [2, 0]]

console.log(multiply(5))
// retorno: []
```
