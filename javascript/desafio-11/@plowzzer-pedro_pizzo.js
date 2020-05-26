// On Codepen: https://codepen.io/plowzzer/pen/MWadbEO
/**
 * Decodificador de Código Morse
 * Return a decoded morse code
 * 
 * @param code
 * @return {string}
 */

function morseDecode(code){
  const codeSplit = code.split(" ")
  const returnDecoded = []
  let result = ''

  codeSplit.forEach(key => {
    switch (key) {
      case ".-":
        returnDecoded.push('A')
        break;
      case "-...":
        returnDecoded.push('B')
        break;
      case "-.-.":
        returnDecoded.push('C')
        break;
      case "-..":
        returnDecoded.push('D')
        break;
      case ".":
        returnDecoded.push('E')
        break;
      case "..-.":
        returnDecoded.push('F')
        break;
      case "--.":
        returnDecoded.push('G')
        break;
      case "....":
        returnDecoded.push('H')
        break;
      case "..":
        returnDecoded.push('I')
        break;
      case ".---":
        returnDecoded.push('J')
        break;
      case "-.-":
        returnDecoded.push('K')
        break;
      case ".-..":
        returnDecoded.push('L')
        break;
      case "--":
        returnDecoded.push('M')
        break;
      case "-.":
        returnDecoded.push('N')
        break;
      case "---":
        returnDecoded.push('O')
        break;
      case ".--.":
        returnDecoded.push('P')
        break;
      case "--.-":
        returnDecoded.push('Q')
        break;
      case ".-.":
        returnDecoded.push('R')
        break;
      case "...":
        returnDecoded.push('S')
        break;
      case "-":
        returnDecoded.push('T')
        break;
      case "..-":
        returnDecoded.push('U')
        break;
      case "...-":
        returnDecoded.push('V')
        break;
      case ".--":
        returnDecoded.push('W')
        break;
      case "-..-":
        returnDecoded.push('X')
        break;
      case "-.--":
        returnDecoded.push('Y')
        break;
      case "--..":
        returnDecoded.push('Z')
        break;
      case "..--.-":
        returnDecoded.push("_");
        break;
      default:
        returnDecoded.push('?')
        break;
    }
  });

  for (let i = 0; i < returnDecoded.length; i++) {
    if(returnDecoded[i] === '_')
    {
      result = `${result} `
    }else{
      result = `${result}${returnDecoded[i]}`
    }
    
  }
  console.log(result)
}

morseDecode("-.-. --- -.. .. --. --- ..--.- -- --- .-. ... .")
morseDecode("- .... . ..--.- --.- ..- .. -.-. -.- ..--.- -... .-. --- .-- -. ..--.- ..-. --- -..- ..--.- .--- ..- -- .--. ... ..--.- --- ...- . .-. ..--.- - .... . ..--.- .-.. .- --. -.-- ..--.- -.. --- --.")