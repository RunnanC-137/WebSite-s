const table = document.querySelector(".table")

const animailEscolhido = document.querySelector(".animal-escolhido")
const numeroEscolhido = document.querySelector(".numero-escolhido")

const escolherAnimal = document.querySelector(".escolher-animal")
const escolherNumero = document.querySelector(".escolher-numero")

const iniciar = document.querySelector(".iniciar")

const animalsList = {
    Avestrus:["01",],
    Aguia:["02",],
    Burro:["03",],
    Borboleta:["04",],
    Cachorro:["05",],

    Cabra:["06",],
    Carneiro:["07",],
    Camelo:["08",],
    Cobra:["09",],
    Coelho:["10"],

    Cavalo:["11"],
    Elefante:["12"],
    Galo:["13"],
    Gato:["14"],
    Jacare:["15"],

    Leao:["16"],
    Mamaco:["17"],
    Porco:["18"],
    Pavao:["19"],
    Peru:["20"],

    Touro:["21"],
    Tigre:["22"],
    Urso:["23"],
    Veado:["24"],
    Vaca:["25"]

}




/// escopo dos laços
Object.keys(animalsList).forEach(element => {
    
    table.innerHTML += `<div class="animal">
    <h2 class="numero">${animalsList[element][0]}</h2>
    <h1 class="nome">${element}</h1>
    </div>`
});





/// Escopo dos eventos
window.onload = e => {const animais = document.querySelectorAll(".animal") 

animais.forEach(i => {

    i.childNodes[3].addEventListener( "click" , () => {

        animailEscolhido.innerHTML = `${i.children[1].textContent}`       
    })

    i.childNodes[1].addEventListener( "click" , () => {

            numeroEscolhido.innerHTML = `${i.children[0].textContent}`
        })
})

iniciar.addEventListener("click", () => {

    let animal = Math.floor(Math.random() * 25)
    let numero = Math.floor(Math.random() * 25)
    animal = Object.keys(animalsList)[animal]
    numero = Object.values(animalsList)[numero][0]

    escolherAnimal.innerHTML = animal
    escolherNumero.innerHTML = numero

    ani = animailEscolhido.textContent
    num = numeroEscolhido.textContent 

    if (ani == animal) {
        alert("vocé acertou o animal")
    } else if (num == numero) {

        alert("vocé acertou o número")

    }
    
})


    
const webSites = {
    
    
    criadorDeCurriculo: {
        site:"https://runnanc-137.github.io/WebSite-s/Criador_De_Curriculo",
        nome:"Criador de currículo",
        concluido: false,
        descricao: "Aplicação criada com o intuito de ajudar quem não tem um currículo cria um de forma fácil. Projeto criado para treinar as habilidades de DOM e experiência do usuário.",
        img: "imgs/sites.png.opdownload"
    },

    
    
    simpleProjects:{
        site:"https://runnanc-137.github.io/WebSite-s/projetinhos",
        nome:"Simples projects",
        concluido: false,
        descricao: "Aqui eu crio projetinhos de pequeno porte para fins específicos, são projetos simples execultados com HTML, CSS e JavaScript.",
        img: "imgs/pngegg.png"
    }
}


function indexBusc (object, chave=""){
    
    chave = object[chave]
    let contador = 0
    for (index in object) {

        if (object[index] == chave) {
            return contador
            break 
        } else {

            contador++
        }
 
    }

}



}
