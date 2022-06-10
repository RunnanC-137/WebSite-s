/// Escopo da variáveis 
const projetos = document.querySelector(".projetos")

const logo = document.querySelector(".caixa")
const caixa = document.querySelector("#logo")





///
const webSites = [
    {
        jogoDoBixo:{
            site:"https://runnanc-137.github.io/WebSite-s/Jogo_do_Bixo",
            nome:"Jogo do bixo",
            concluido: true,
            descricao: "Nesse projeto eu recrio um famoso jogo de aposta com o objetijo de treinar o tratamento de numeros aleatorios, grid e DOM",
            img: "imgs/imagem-criacao-de-sites-600x450px.png"
        
        }
    },

    {
        JogoDaVelha:{
            site:"https://runnanc-137.github.io/WebSite-s/jogo_da_velha",
            nome:"Jogo da velha - [multiplayer]",
            concluido: true,
            descricao: "um proveto que faz parte do curso do programador br",
            img:"imgs/jogo-da-velha.png"
        }
    },
    
]


webSites.forEach( e => {

    projetos.innerHTML += `<div class="section ${webSites.indexOf(e)%2 == 0 ? "": "one"}" id="${Object.keys(e)}">

            <div class="img">
                <img src="${Object.values(e)[0].img}" class="pictures" alt=""> 
            </div>
            

            <div class="project-description">

                <h2>
                    <a href="${Object.values(e)[0].site}" target="_blank" rel="noopener noreferrer">${Object.values(e)[0].nome}</a> ${Object.values(e)[0].concluido == true ? "": "(Em produção)"}
                </h2>
                <hr style="width:90%; margin:5pt -6pt">
                <p>
                    ${Object.values(e)[0].descricao}
                </p>
                
            </div>
                
        </div>`
})
                                        

//////


webSites.forEach( e => {

    console.log(e)
})


/////
caixa.addEventListener("mouseover", e => {
     
    caixa.classList.add("vem")
    logo.classList.add("fui")

    logo.classList.remove("fui-1")
    caixa.classList.remove("vem-1")


    logo.innerHTML = "Ruan Vieira"

    
})
caixa.addEventListener("mouseout", e => {
 
    caixa.classList.remove("vem")
    logo.classList.remove("fui")


    caixa.classList.add("vem-1")
    logo.classList.add("fui-1")



    logo.innerHTML = "RV"
    
})

