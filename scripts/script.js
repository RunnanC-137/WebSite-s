/// Escopo da variáveis 
const projetcts = document.querySelector(".projetos")
const logo = document.querySelector("#logo")

const projetct = document.querySelector(".projeto")


///
const webSites = {
    criadorDeCurriculo:{
        site:"https://runnanc-137.github.io/WebSite-s/Criador_De_Curriculo",
        nome:"Criador de currículo",
        concluido: false,
        descricao: "lorem",
        tecnologias: ["HTML", "CSS", "JavaScript"]
    },
    
    simpleProjects:{
        site:"https://runnanc-137.github.io/WebSite-s/projetinhos",
        nome:"simples projects",
        concluido: false,
        descricao: "lorem",
        tecnologias: ["HTML", "CSS", "JavaScript"]
    },
    jogoDoBixo:{
        site:"https://runnanc-137.github.io/WebSite-s/Jogo_do_Bixo",
        nome:"Jogo do bixo",
        concluido: false,
        descricao: "lorem",
        tecnologias: ["HTML", "CSS", "JavaScript"]
    },
    myBlog:{
        site:"https://runnanc-137.github.io/WebSite-s/My_Blog",
        nome:"My blog",
        concluido: false,
        descricao: "lorem",
        tecnologias: ["HTML", "CSS", "JavaScript"]
    },

},

img = ["", ""]
                                        

//////





/////
logo.addEventListener("mouseover", e => {

    logo.innerHTML = "Ruan Vieira"
    logo.classList += "logo-final"
    setTimeout(1000)
})
logo.addEventListener("mouseout", e => {

    logo.innerHTML = "RV";
    logo.classList -= "logo-final";

})

projetcts.addEventListener("mouseover", e => {

    projetcts.innerHTML = `Projetos
    <div class="projeto">
        <ol>
            <li><a href="#Criador de curriculos" style="color:rgb(5, 102, 105)">Criador de curriculos</a></li>
        </ol>
    </div>`
})

projetcts.addEventListener("mouseout", e => {

    projetcts.innerHTML = `Projetos`

})