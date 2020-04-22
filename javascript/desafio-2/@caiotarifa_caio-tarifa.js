// https://jsbin.com/diduloribe/edit?js,console

const multiply = (...l) => l.reduce((a, c) => {
  if (Array.isArray(c)) {
    if (f = c.find(v => v % 2)) {
      c = c.map(v => v % 2 ? v : v * f)
    }
    
    a.push(c)
  }

  return a
}, [])

console.log(
  multiply([1, 3, 4], [5, 6], [0, 1]),
  multiply([0, 2, 7], [5, 1], [2, 0]),
  multiply([0, 1], 5, [2, 0]),
  multiply(5)
)
