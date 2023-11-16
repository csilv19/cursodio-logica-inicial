let nomeDoheroi = "Super Nathanzinho";
let nivelDexp = 10000;
let nivel = "";

if (nivelDexp <= 1000) {
    nivel = "Noob Master";
} else if (nivelDexp <= 2000) {
    nivel = "Ferro";
} else if (nivelDexp <= 5000) {
    nivel = "Bronze";
} else if (nivelDexp <= 7000) {
    nivel = "Prata";
} else if (nivelDexp <= 8000) {
    nivel = "Ouro";
} else if (nivelDexp <= 9000) {
    nivel = "Platina";
} else if (nivelDexp <= 10000) {
    nivel = "Ascendente";
} else if (nivelDexp >= 10001) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log("O Herói " + nomeDoheroi + " está no nível de " + nivel);
