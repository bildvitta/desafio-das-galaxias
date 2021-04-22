function binToDec(bin) {
  bin = bin.toString()
  let dec = 0

  for (let i = (bin.length), e = 0; i > 0; i--, e++) {
    dec += Math.pow(2, e) * bin[i - 1]
  }
  return dec
}

console.log(binToDec(1010))