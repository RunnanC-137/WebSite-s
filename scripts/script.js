/// Escopo da variáveis 
const projetos = document.querySelector(".projetos")

const logo = document.querySelector(".caixa")
const caixa = document.querySelector("#logo")





///
const webSites = [
    
    {
        criadorDeCurriculo:{
            site:"https://runnanc-137.github.io/WebSite-s/Criador_De_Curriculo",
            nome:"Criador de currículo",
            concluido: false,
            descricao: "Aplicação criada com o intuito de ajudar quem não tem um currículo cria um de forma fácil. Projeto criado para treinar as habilidades de DOM e experiência do usuário.",
            img: "imgs/sites.png.opdownload"
    }
},
    
    {
        media_enem:{
            site:"https://runnanc-137.github.io/WebSite-s/media_enem",
            nome:"Média enem",
            concluido: true,
            descricao: "Aqui eu criei um projeto que calcula a média de ate cinco valores, criado principalmente para calcular a minha média do enem com os pesos específicos ",
            img: "imgs/pngegg.png"
    }
},
    {
        jogoDoBixo:{
            site:"https://runnanc-137.github.io/WebSite-s/Jogo_do_Bixo",
            nome:"Jogo do bixo",
            concluido: false,
            descricao: "Nesse projeto eu recrio um famoso jogo de aposta com o objetijo de treinar o tratamento de numeros aleatorios, grid e DOM",
            img: "imgs/imagem-criacao-de-sites-600x450px.png"
        
    }
},
    {
        myBlog:{
            site:"https://runnanc-137.github.io/WebSite-s/My_Blog",
            nome:"My blog",
            concluido: false,
            descricao: "Um blog em que eu escrevo sobre assustos do meu interesse, seja ele relacionado com programação ou não",
            img: "imgs/Criacao-de-Websites.png"
    }
},

]


webSites.forEach( e => {

    console.log()
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

