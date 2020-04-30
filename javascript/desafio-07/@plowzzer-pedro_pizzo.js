function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

function primeNumbers(num) {
  const result = [];
  // Checking n numbers
  for (let n = 1; n <= num; n++) if (isPrime(n)) result.push(n);

  return result;
}

function test(fn) {
  // Cadastra os casos de teste, tendo a chave como o parâmetro da função e o valor como o resultado esperado.
  const cases = {
    0: [],
    1: [],
    2: [2],
    3: [2, 3],
    5: [2, 3, 5],
    10: [2, 3, 5, 7],
    100: [
      2,
      3,
      5,
      7,
      11,
      13,
      17,
      19,
      23,
      29,
      31,
      37,
      41,
      43,
      47,
      53,
      59,
      61,
      67,
      71,
      73,
      79,
      83,
      89,
      97,
    ],
    1000: [
      2,
      3,
      5,
      7,
      11,
      13,
      17,
      19,
      23,
      29,
      31,
      37,
      41,
      43,
      47,
      53,
      59,
      61,
      67,
      71,
      73,
      79,
      83,
      89,
      97,
      101,
      103,
      107,
      109,
      113,
      127,
      131,
      137,
      139,
      149,
      151,
      157,
      163,
      167,
      173,
      179,
      181,
      191,
      193,
      197,
      199,
      211,
      223,
      227,
      229,
      233,
      239,
      241,
      251,
      257,
      263,
      269,
      271,
      277,
      281,
      283,
      293,
      307,
      311,
      313,
      317,
      331,
      337,
      347,
      349,
      353,
      359,
      367,
      373,
      379,
      383,
      389,
      397,
      401,
      409,
      419,
      421,
      431,
      433,
      439,
      443,
      449,
      457,
      461,
      463,
      467,
      479,
      487,
      491,
      499,
      503,
      509,
      521,
      523,
      541,
      547,
      557,
      563,
      569,
      571,
      577,
      587,
      593,
      599,
      601,
      607,
      613,
      617,
      619,
      631,
      641,
      643,
      647,
      653,
      659,
      661,
      673,
      677,
      683,
      691,
      701,
      709,
      719,
      727,
      733,
      739,
      743,
      751,
      757,
      761,
      769,
      773,
      787,
      797,
      809,
      811,
      821,
      823,
      827,
      829,
      839,
      853,
      857,
      859,
      863,
      877,
      881,
      883,
      887,
      907,
      911,
      919,
      929,
      937,
      941,
      947,
      953,
      967,
      971,
      977,
      983,
      991,
      997,
    ],
  };

  const results = [];

  for (const index in cases) {
    console.group(`Testando "${index}".`);

    console.time(index);
    const result = fn(index);
    console.timeEnd(index);

    // Valida o resultado. Comparação de duas matrizes idênticas.
    const passed = JSON.stringify(result) === JSON.stringify(cases[index]);

    // Exibe o resultado e, em caso de erro, imprime as matrizes certas e erradas.
    passed
      ? console.log('Passou! O resultado para "%s" está correto!', index)
      : console.error(
          'Deu ruim! O resultado para "%s" deveria ser %o e não %o.',
          index,
          cases[index],
          result
        );

    console.groupEnd();

    // Armazena o resultado para verificação completa.
    results.push(passed);
  }

  // Verifica se houve ao menos um teste com falha.
  const allPassed = !results.some((result) => result === false);

  // Devolutiva resumida.
  allPassed
    ? console.log("Passou! Todos os testes passaram.")
    : console.error("Deu ruim! Existem resultados inconsistentes.");

  return allPassed;
}

console.log(test(primeNumbers));
