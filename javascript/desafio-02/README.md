## Desafio 02 - Multiplicar números pares da matriz pelo primeiro ímpar encontrado.

Dado uma matriz [[1, 3, 4], [5, 6], [0, 2]] crie uma função que receba `N` arrays, ou seja, quantos arrays desejar no parametro, percorra esses arrays, e caso o número seja par, multiplique ele pelo primeiro número ímpar do array atual, caso não tenha não faça nada. Se passar um número que não seja um array remova da matriz.

#### Exemplo:
```js
console.log(multiply([1, 3, 4], [5, 6], [0, 1]))
// [[1, 3, 4], [5, 6], [0, 1]] => [[1, 3, 1 * 4], [5, 6*5], [0 * 1, 1]] no final vira =>
// retorno: [[1, 3, 4], [5, 30], [0, 1]]

console.log(multiply([0, 2, 7], [5, 1], [2, 0]))
// [[0, 2, 7], [5, 1], [2, 0]] => [[0 * 7, 2 * 7, 7], [5, 1 * 5], [2, 0]]
// retorno: [[0, 14, 7], [5, 5], [2, 0]]

console.log(multiply([0, 1], 5, [2, 0]))
// [[0, 1], 5, [2, 0]] => [[0 * 1, ], [2, 0]]
// retorno: [[0 * 1, ], [2, 0]]

console.log(multiply(5))
// retorno: []
```
