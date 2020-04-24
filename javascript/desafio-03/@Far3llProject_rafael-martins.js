function surpersinha(aposta){
  if(aposta < 6){
    let alert = "escolha entre 6 e 15"
    return alert
  }
  
  let qtdaposta = new Array(Number(aposta));
  //console.log(qtdaposta.length)
  let j = 0
  for(let i = 0; i < qtdaposta.length; i++)
  {
    let numerosorteio = Math.floor(Math.random() * 59 + 1)
    
     while(j < i)
      {
        if (numerosorteio == qtdaposta[j]) 
        { 
         qtdaposta[j] = Math.floor(Math.random() * 59 + 1)
          j = 0 
        }else{
          j++
        }
      }
    qtdaposta[j] = numerosorteio
  }
 return qtdaposta.sort()
}

console.log(surpersinha("6"))
