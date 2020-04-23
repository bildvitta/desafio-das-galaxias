# Desafio 4: Maioria dos votos

Para definir esse tipo de votação, o candidato deverá aparecer com mais de 50% dos votos dentre todos os demais.

## Premissas

1. A frequência de quem tem a maioria dos votos **deve** ser maior que 50%
2. Se não houver um elemento que corresponda o primeiro resultado, retorne `null`
3. Se o array for vazio, retorne `null`

`N / 2 onde N = quantidade de votos totais`

```js
maioriaDosVotos(["A", "A", "B"]);
// retorna "A"

maioriaDosVotos(["A", "A", "A", "B", "C", "A"]);
// retorna "A"

maioriaDosVotos(["A", "B", "B", "A", "C", "C"]);
// retorna null
```
