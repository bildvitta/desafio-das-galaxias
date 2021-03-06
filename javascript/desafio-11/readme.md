# Desafio 11: Decodificador de Código Morse

Este desafio é continuação do 10. [Codificador de Código Morse](https://github.com/bildvitta/desafio-das-galaxias/tree/master/javascript/desafio-10), se você ainda não o fez, tente faze-lo para ter resultados melhores aqui.

O Código Morse é um sistema de representação de letras, algarismos e sinais de pontuação através de um sinal codificado enviado de modo intermitente. Foi desenvolvido por Samuel Morse em 1835, criador do telégrafo elétrico, dispositivo que utiliza correntes elétricas para controlar eletroímãs que atuam na emissão e na recepção de sinais.

Essas mensagens após serem codificadas, podiam ser transmitidas de várias maneiras:

- Pulso elétricos em um cabo
- Ondas mecânicas (som)
- Sinais visuais (luzes acendendo e apagando)
- Ondas eletromagnéticas (sinais de rádio)

| Letra | Código | Letra | Código |
| ----- | ------ | ----- | ------ |
| A     | .-     | N     | -.     |
| B     | -...   | O     | ---    |
| C     | -.-.   | P     | .--.   |
| D     | -..    | Q     | --.-   |
| E     | .      | R     | .-.    |
| F     | ..-.   | S     | ...    |
| G     | --.    | T     | -      |
| H     | ....   | U     | ..-    |
| I     | ..     | V     | ...-   |
| J     | .---   | W     | .--    |
| K     | -.-    | X     | -..-   |
| L     | .-..   | Y     | -.--   |
| M     | --     | Z     | --..   |

## Premissas:

1. Você deve escrever uma função para decodificar uma frase que está em código morse.
2. O retorno deve ser expresso como uma string.

```js
console.log(morseDecode("-.-. --- -.. .. --. --- ..--.- -- --- .-. ... ."));
// retorna CODIGO MORSE

console.log(
  morseDecode(
    "- .... . ..--.- --.- ..- .. -.-. -.- ..--.- -... .-. --- .-- -. ..--.- ..-. --- -..- ..--.- .--- ..- -- .--. ... ..--.- --- ...- . .-. ..--.- - .... . ..--.- .-.. .- --.. -.-- ..--.- -.. --- --."
  )
);
// retorna The quick brown fox jumps over the lazy dog
```

### Observações

Após concluido o teste... tente escrever alguma mensagem legal em algum dos grupos da NAVE e chame mais pessoas para participar :)
