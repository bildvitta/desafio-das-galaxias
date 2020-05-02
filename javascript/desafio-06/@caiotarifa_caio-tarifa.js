// https://jsbin.com/zalalozoza/edit?js,console

function matchHouses (houses) {
  return parseInt(houses) > 0 ? houses * 6 - (houses - 1) : 0
}

console.log(
  matchHouses(-5),
  matchHouses(0),
  matchHouses(1),
  matchHouses(4),
  matchHouses(87)
)
