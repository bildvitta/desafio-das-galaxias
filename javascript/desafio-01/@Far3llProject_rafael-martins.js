function Converte(bin) {
  //cria-se um array e coloca em cada index um valo
  //de acordo com a potência binária
  let aux1 = new Array(8);
  aux1[0] = 1;
  aux1[1] = 2;
  aux1[2] = 4;
  aux1[3] = 8;
  aux1[4] = 16;
  aux1[5] = 32;
  aux1[6] = 64;
  aux1[7] = 128;

 /*passo somente o tamanho
 do parâmetro para uma variavel*/
   let qtd = bin.length;
  console.log(qtd)

  /*crio um array com o tamanho do 
  meu parâmegtro */
  let ArrBin = new Array(qtd);
  console.log(ArrBin)
  /* inicio um index em 0 */
  let j = 0;
  /*crio um for que pega o tamanho do 
  parâmetro - 1 (por conta da posição do 
    array) condiciono em que enquanto 
    o i for maior que 0 ele decrementa*/
  for (let i = qtd - 1; i >= 0; i--) {
    /*para cada index do array atribuo 
    um char do meu parâmetro pegando a 
    posição do i adicionando +1 para sempre
    pegar o da frente */
    ArrBin[j] = bin.substring(i, i + 1);
    j++;
    /*aqui da pra ver que ele a cada
    repetição manda somente a posição
    de cada index */
    console.log(bin.substring(i, i + 1))
  }

  /*agora preciso fazer o calculo usando 
  apenas uma comparação pq no caso
  cada index do meu array ja tem um valor */
  let valor = 0;
  for (let i = 0; i < qtd; i++) {
    /*nessa condição eu somente vou atribuir os
    valores na variavel "valor" em que meu
     ArrBin for 1, para cada indix do meu 
     array "aux1" é um valor somado */
    if (ArrBin[i] > 0) {
      valor += aux1[i];

      /*só tirar o coment para visualizar 
      todos os valores */
     // console.log(aux1)
    }
  }
  return valor;
  // console.log(valor);
}

/*Chamando a function passando o 
parâmetro que é um binário em String, 
em outra situação dever-se usar o 
parseTostring*/

console.log(Converte("1101"));

// Rafael Martins
/*esse código é baseado em um código que encontrei 
na web, todos os comentários foram feitos por mim 
para questão de entendimento do código*/ 

/* \{^_^}/ */
