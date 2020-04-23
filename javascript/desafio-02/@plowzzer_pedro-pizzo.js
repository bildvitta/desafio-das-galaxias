// Multiplicar números pares da matriz pelo primeiro ímpar encontrado
// On codepen: https://codepen.io/plowzzer/pen/QWjNYGP

function multiply() {
  const returningArray = [];
  for (let index = 0; index < arguments.length; index++) {
    const element = arguments[index];
    const partArray = [];
    let firstOdd = null;

    //Check if the element is an array, if is not, it not return anything to the returningArray
    if (Array.isArray(element)) {
      //Checking the first Odd number in the intern array and saving it to fistOdd
      element.forEach((num) => {
        if (num % 2 != 0) {
          if (firstOdd == null) {
            firstOdd = num;
          }
        }
      });

      //Checking the number is even and multipling to the first odd number if it exists, if not, just return the number, and if the number is odd, it just enters on partArray
      element.forEach((num) => {
        if (num % 2 == 0) {
          if (firstOdd != null) {
            partArray.push(num * firstOdd);
          } else {
            partArray.push(num);
          }
        } else {
          partArray.push(num);
        }
      });

      returningArray.push(partArray);
    }
  }
  return returningArray;
}

console.log("[1, 3, 4], [5, 6], [0, 1]");
console.log(multiply([1, 3, 4], [5, 6], [0, 1]));
console.log("[0, 2, 7], [5, 1], [2, 0]");
console.log(multiply([0, 2, 7], [5, 1], [2, 0]));
console.log("[0, 1], 5, [2, 0]");
console.log(multiply([0, 1], 5, [2, 0]));
console.log("5");
console.log(multiply(5));
