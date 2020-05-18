// Verificar se uma frase ou palavra é um Palíndromo
// On Codepen: https://codepen.io/plowzzer/pen/jObQPJE

function isPalindrome(string) {
  const parsed = string
    .replace(/[\u0300-\u036f]/g) //Removing special characters
    .replace(/([^\w]+|\s+)/g, "") //Removing Spages
    .toLowerCase();

  const inverse = parsed.split("").reverse().join("");

  if (parsed === inverse) {
    return true;
  }
  return false;
}

console.log(isPalindrome("rodador"));
// retorna true

console.log(isPalindrome("Socorram-me, subi no ônibus em Marrocos!"));
// retorna true

console.log(isPalindrome("socos"));
// retorna true

console.log(isPalindrome("roma"));
// retorna false

console.log(isPalindrome("soco"));
// retorna false

console.log(isPalindrome("Socorram-me, subi no ônibus"));
// retorna false
