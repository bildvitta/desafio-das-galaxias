# Desafio 3: Gerando surpresinha da Mega-Sena.

Uma das modalidades de aposta na Mega-Sena é conhecida como __surpresinha__, trata-se de uma opção oferecida nas lotéricas onde o sistema é o responsável por escolher os números de forma aleatória.

O objetivo deste desafio é implementar a função que gera os números para a __surpresinha__ da Mega-Sena.

## Premissas

1. O usuário poderá escolher a quantidade de números jogados, desde que respeitando o intervalo de possibilidades válidas, ou seja, de 6 até 15 números. Caso o parâmetro fique em branco, deve-se assumir o valor 6 como padrão. O tipo do parâmetro poderá ser `Number` ou `String`.
2. Lembre-se que as possibilidades de números para jogar começam em 1 e vão até 60 e que um número nunca aparece duas vezes.
3. O resultado deverá ser uma matriz de inteiros em ordem crescente.

## Exemplos

_Lembrando que, como os números são aleatórios, o retorno sempre será diferente._

``` js
console.log(surpresinha())
// retorna [10, 20, 30, 40, 50, 60]

console.log(surpresinha('10'))
// retorno: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(surpresinha(5))
console.log(surpresinha(16))
// retorno: Error [Informe um valor entre 6 e 15.]
```

## Referências

- [Caixa Econômica Federal](http://loterias.caixa.gov.br/wps/portal/loterias/landing/megasena/)
