# Desafio 7: Números primos.

Não havia um número melhor que o 7 para este desafio de **números primos**. O objetivo é muito simples: criar uma função que recebe como parâmetro um número que representa o alcance máximo de procura de números primos. O retorno deverá ser uma matriz de inteiros primos em ordem ascendente.

Isto é, ao informar o número `10` isto significa que o seu código deverá realizar uma busca de números primos entre 2 e 10 e retornar `[2, 3, 5, 7]`.

[**ATENÇÃO**] Este é um desafio comum quando lidamos com linguagens de programação, por isso a Internet está repleta de soluções diferentes, basta uma simples busca. Eu o encorajo a manter distância destas soluções e focar na sua lógica, já que é este o objetivo dos desafios. Além de aprender, é claro.

## Premissas

1. Os **números primos** são inteiros maiores que 1, sem divisores positivos além de si mesmo e 1. Como é o caso do 2 (o único número primo par) ou do 11.
2. Caso seja informado um número menor ou igual a 1, deve se retornar uma matriz vazia `[]`.
3. Este é o primeiro desafio a introduzir uma função para teste, localizado no arquivo `test.js`. Para rodar, basta invocar `test` e informar a função criada como parâmetro, por exemplo: `test(primeNumbers)`. Os resultados serão registrados no _console_.

## Exemplos

``` js
console.log(primeNumbers(0))
// retorna []

console.log(primeNumbers(1))
// retorna []

console.log(primeNumbers(2))
// retorna [2]

console.log(primeNumbers(3))
// retorna [2, 3]

console.log(primeNumbers(5))
// retorna [2, 3, 5]

console.log(primeNumbers(10))
// retorna [2, 3, 5, 7]

console.log(primeNumbers(100))
// retorna [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

console.log(primeNumbers(1000))
// retorna [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]
```

[**BÔNUS**] Qual o número máximo de primos que a sua função consegue calcular antes de travar o intérprete?

_Não se esqueça de utilizar a função de teste para validar o resultado._