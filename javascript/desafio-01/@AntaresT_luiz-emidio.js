function convertBinarytoDecimal (value) {
  value = value.toString()
  var decimal = 0
  for (let count = value.length - 1, i = 0; count >= 0; count--, i++){
    decimal += value[count] * Math.pow(2, i); 
  }
  return decimal
}

console.log(
  convertBinarytoDecimal('111101'),
  convertBinarytoDecimal(111101)
)
