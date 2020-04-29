function matchHouses (house) {
  if(house === 0){
    return 0
  }else if(house < 0){
    return "Não pode ser número negativo"
  }
  
  const match = 6
  const matchsticks = (match * house) - (house -1)
  return matchsticks + " matchsticks"
}

console.log(matchHouses(1))  // 6 matchsticks
console.log(matchHouses(4))  // 21 matchsticks
console.log(matchHouses(87)) // 436 matchsticks
