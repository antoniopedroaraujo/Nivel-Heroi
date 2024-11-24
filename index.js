let nomeHeroi = "Felipão";
let pontosXP = Math.random()*11;

console.log("------------------------------------------------------");
if (pontosXP <= 1.000) {
 console.log(`O Herói de nome ${nomeHeroi} está no nível de Ferro.`);
} else if (pontosXP <= 2.000) {
 console.log(`O Herói de nome ${nomeHeroi} está no nível de Bronze.`);
 } else if (pontosXP <= 5.000) {
 console.log(`O Herói de nome ${nomeHeroi} está no nível de Prata.`);
 } else if (pontosXP <= 7.000) {
 console.log(`O Herói de nome ${nomeHeroi} está no nível de Ouro.`);
 } else if (pontosXP <= 8.000) {
 console.log(`O Herói de nome ${nomeHeroi} está no nível de Platina.`);
 } else if (pontosXP <= 9.000) {
 console.log(`O Herói de nome ${nomeHeroi} está no nível de Ascendente.`);
 } else if (pontosXP <= 10.000) {
 console.log(`O Herói de nome ${nomeHeroi} está no nível de Imortal.`);
 } else {
 console.log(`O Herói de nome ${nomeHeroi} está no nível de Radiante.`);
 }
 console.log("------------------------------------------------------");
 console.log(`Total de XP acumulado: ${pontosXP} pontos.`);
 console.log("------------------------------------------------------");
