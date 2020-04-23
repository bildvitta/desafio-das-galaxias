// https://jsbin.com/xemilehoru/edit?js,console

const binaryToDecimal = binary => [...String(binary)].reduce(
  (accumulator, currentValue) => accumulator * 2 + +currentValue
)

console.log(
  binaryToDecimal(1110),
  binaryToDecimal('101101010101')
)
