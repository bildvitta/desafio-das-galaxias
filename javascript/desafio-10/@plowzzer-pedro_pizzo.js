// On Codepen: https://codepen.io/plowzzer/pen/KKdrePr
// Codificador de Código Morse

function morseEncode(string) {
  const stringSplit = string
    .normalize("NFD") // normalizing the code
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("-")
    .toUpperCase()
    .split("");

  const returnCode = [];
  let result = "";

  stringSplit.forEach((key) => {
    switch (key) {
      case "A":
        returnCode.push(".-");
        break;
      case "B":
        returnCode.push("-...");
        break;
      case "C":
        returnCode.push("-.-.");
        break;
      case "D":
        returnCode.push("-..");
        break;
      case "E":
        returnCode.push(".");
        break;
      case "F":
        returnCode.push("..-.");
        break;
      case "G":
        returnCode.push("--.");
        break;
      case "H":
        returnCode.push("....");
        break;
      case "I":
        returnCode.push("..");
        break;
      case "J":
        returnCode.push(".---");
        break;
      case "K":
        returnCode.push("-.-");
        break;
      case "L":
        returnCode.push(".-..");
        break;
      case "M":
        returnCode.push("--");
        break;
      case "N":
        returnCode.push("-.");
        break;
      case "O":
        returnCode.push("---");
        break;
      case "P":
        returnCode.push(".--.");
        break;
      case "Q":
        returnCode.push("--.-");
        break;
      case "R":
        returnCode.push(".-.");
        break;
      case "S":
        returnCode.push("...");
        break;
      case "T":
        returnCode.push("-");
        break;
      case "U":
        returnCode.push("..-");
        break;
      case "V":
        returnCode.push("...-");
        break;
      case "W":
        returnCode.push(".--");
        break;
      case "X":
        returnCode.push("-..-");
        break;
      case "Y":
        returnCode.push("-.--");
        break;
      case "Z":
        returnCode.push("--.");
        break;
      case "-":
        returnCode.push("..--.-");
        break;
      default:
        returnCode.push("?");
        break;
    }
  });

  for (let i = 0; i < returnCode.length; i++) {
    if (i === returnCode.length - 1) result = `${result}${returnCode[i]}`;
    else result = `${result}${returnCode[i]} `;
  }

  return result;
}

console.log(morseEncode("Código Morse"));
// retorna -.-. --- -.. .. --. --- ..--.- -- --- .-. ... .

console.log(morseEncode("The quick brown fox jumps over the lazy dog"));
// retorna - .... . ..--.- --.- ..- .. -.-. -.- ..--.- -... .-. --- .-- -. ..--.- ..-. --- -..- ..--.- .--- ..- -- .--. ... ..--.- --- ...- . .-. ..--.- - .... . ..--.- .-.. .- --. -.-- ..--.- -.. --- --.
