function verificarRank(vitoria, derrota){
  saldo = vitoria - derrota

  if (vitoria < 10) {
    return "Ferro";
  } else if (vitoria >= 11 && vitoria <= 20) {
    return "Bronze";
  } else if (vitoria >= 21 && vitoria <= 50) {
    return "Prata";
  } else if (vitoria >= 51 && vitoria <= 80) {
    return "Ouro";
  } else if (vitoria >= 81 && vitoria <= 90) {
    return "Diamante";
  } else if (vitoria >= 91 && vitoria <= 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}

let vitoria = 5
let derrota = 8
let saldoRank = verificarRank(vitoria, derrota)

console.log(`O Herói tem saldo de ${saldo} e está no nível de ${saldoRank}`)
