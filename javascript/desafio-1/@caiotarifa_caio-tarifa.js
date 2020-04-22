// https://jsbin.com/xopasuzexi/edit?js,console

const binaryToDecimal = b => [...String(b)].reduce((a, c) => a * 2 + +c)

console.log(
  binaryToDecimal(1110),
  binaryToDecimal('101101010101')
)
