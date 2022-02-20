const sorteio = document.querySelector(".sorteio");
const numeroSorteado = document.querySelector(".numero-sorteado");
const opcoesDeAnimais = document.querySelector(".opcoes")

const animais = ["vaca", "jacare", "onça", "pavão", "cavalo"]

for (let index in animais) {
    
    opcoesDeAnimais.innerHTML += `<option value="${animais[index]}">${animais[index]}</option>`

}

sorteio.addEventListener( "click", element => {

    let animal = animais[Math.floor((Math.random()) * 4)]
    let aposta = document.querySelector(".opcoes").value
    numeroSorteado.innerHTML = animal;

    animal == aposta ? alert("Você ganhou") : alert("Você perdeu")
});