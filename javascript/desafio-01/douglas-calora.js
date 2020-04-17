const binaryToDecimal = number => {
  number = (number.toString() || []).split('').map(item => parseInt(item))
  let results = []
  let exponent = number.length - 1

  for (let index = 0; index < number.length; index++) {
    if (number[index] > 1) {
      return null
    }

    results.push(number[index] * Math.pow(2, exponent))
    exponent -= 1
  }
  
  return (results || []).reduce((accumulator, current) => accumulator + current)
}

console.log(binaryToDecimal(1110))
console.log(binaryToDecimal('101101010101'))