
function surpersinha(aposta){
2
  if(aposta < 6 || aposta > 15){
3
    let alert = "escolha entre 6 e 15"
4
    return alert
5
  }
6
  
7
  let qtdaposta = new Array(Number(aposta));
8
  //console.log(qtdaposta.length)
9
  let j = 0
10
  for(let i = 0; i < qtdaposta.length; i++)
11
  {
12
    let numerosorteio = Math.floor(Math.random() * 59 + 1)
13
    
14
     while(j < i)
15
      {
16
        if (numerosorteio == qtdaposta[j]) 
17
        { 
18
         qtdaposta[j] = Math.floor(Math.random() * 59 + 1)
19
          j = 0 
20
        }else{
21
          j++
22
        }
23
      }
24
    qtdaposta[j] = numerosorteio
25
  }
26
 return qtdaposta.sort( (a,b) => a-b)
27
}
28
​
29
console.log(surpersinha("6"))
30
​