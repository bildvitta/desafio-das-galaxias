function matchHouses (house) {
  if (house < 0) {
    return 'Insira um numero positivo'
  }

  return house > 1 ? (house * 6) - (house - 1) : !house ? house : 6
}

matchHouses(1)
matchHouses(4)
matchHouses(87)
