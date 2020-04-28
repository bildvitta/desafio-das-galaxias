// Maioria dos votos
// On codepen: https://codepen.io/plowzzer/pen/LYpWVEq?editors=0012

function majorityVote(votes) {
  const unique = votes.filter((item, index) => votes.indexOf(item) === index);
  let accepted = null;

  const teste = unique.forEach((uniqueVote) => {
    let count = 0;
    votes.forEach((vote) => {
      if (vote === uniqueVote) {
        count++;
      }
    });

    if (count > votes.length / 2) {
      accepted = uniqueVote;
    }
  });

  return accepted;
}

console.log(majorityVote(["A", "A", "B"]));
// "A"

console.log(majorityVote(["A", "A", "A", "B", "C", "A"]));
// "A"

console.log(majorityVote(["A", "B", "B", "A", "C", "C"]));
// null
