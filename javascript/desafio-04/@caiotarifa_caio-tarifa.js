// https://jsbin.com/fazoxiyage/edit?js,console

function maioriaDosVotos(votes) {
  if (Array.isArray(votes) && votes.length) {
    const ranking = {}
    const minimun = votes.length / 2
    
    for (const vote of votes) {
      ranking[vote] = (ranking[vote] || 0) + 1

      if (ranking[vote] > minimun) {
        return vote
      }
    }
  }

  return null
}

console.log(
  maioriaDosVotos(['A', 'A', 'B']),
  maioriaDosVotos(['A', 'A', 'A', 'B', 'C', 'A']),
  maioriaDosVotos(['A', 'B', 'B', 'A', 'C', 'C']),
  maioriaDosVotos(['mari', 'marina', 'mariana', 'mariana', 'mariana'])
)
