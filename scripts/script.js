/// Escopo da variáveis 
const projetcts = document.querySelector(".projetos")


const logo = document.querySelector(".caixa")
const caixa = document.querySelector("#logo")


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
caixa.addEventListener("mouseover", e => {
     
    caixa.classList.add("vem")
    logo.classList.add("fui")

    logo.innerHTML = "Ruan Vieira"

    
})
caixa.addEventListener("mouseout", e => {
 
    caixa.classList.remove("vem")
    logo.classList.remove("fui")

    logo.innerHTML = "RV"
    
})

