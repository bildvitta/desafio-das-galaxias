function magicBall () {
  const responses = [
    // possíveis respostas afirmativas
    'É Certo',
    'É Decidido',
    'Sem dúvidas',
    'Sim, definitivamente',
    'Você pode contar com',
    'Eu vejo como um sim',
    'Provavelmente',
    'Boa perspectiva',
    'Sim',
    'Sinais apontam que sim',
    // possíveis respostas sem compromisso
    'Não entendi, tente novamente',
    'Tente novamente mais tarde',
    'Melhor não te falar agora',
    'Não consigo prever agora',
    'Concentre-se e pergunte novamente',
    // possíveis respostas negativas
    'Não contaria com isso',
    'Minha resposta é não',
    'Minhas fontes dizem que não',
    'Perspectivas não tão boas',
    'Bem duvidoso'
  ]

  const random = Math.floor(Math.random() * (19 - 0)) + 0

  return responses[random]
}

magicBall()