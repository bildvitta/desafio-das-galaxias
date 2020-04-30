// https://jsbin.com/qeqivacupi/edit?js,console

function indexMultiplier (array) {
  return array.reduce((sum, value, index) => sum + value * index, 0)
}

console.log(
  indexMultiplier([1, 2, 3, 4, 5]),
  indexMultiplier([-3, 0, 8, -6])
)
