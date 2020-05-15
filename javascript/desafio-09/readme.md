# Desafio 9 - Verificar se uma frase ou palavra é um Palíndromo

Um palíndromo é uma palavra, frase ou qualquer outra sequência de unidades que tenha a propriedade de poder ser lida tanto da direita para a esquerda como da esquerda para a direita. Num palíndromo, normalmente são desconsiderados os sinais ortográficos (diacríticos ou de pontuação), assim como o espaços entre palavras.

## exemplos de palíndromo:
 - rodador
 - socos
 - Roma me tem amor
 - Socorram-me, subi no ônibus em Marrocos!

```js
isPalindrome('rodador')
// retorna true

isPalindrome('Socorram-me, subi no ônibus em Marrocos!')
// retorna true

isPalindrome('socos')
// retorna true

isPalindrome('roma')
// retorna false

isPalindrome('soco')
// retorna false

isPalindrome('Socorram-me, subi no ônibus')
// retorna false
```