const webSites = [
    {
        nome:"Jogo do bixo",
        href:"https://runnanc-137.github.io/WebSite-s/Jogo_do_Bixo",
        status: true,
        descricao: "Nesse projeto eu recrio um famoso jogo de aposta com o objetijo de treinar o tratamento de numeros aleatorios, grid e DOM",
        src: "imgs/criacao-sites.png"
    
    },

    {
        nome:"Jogo da velha",
        href:"https://runnanc-137.github.io/WebSite-s/jogo_da_velha",
        status:false,
        descricao: "um proveto que faz parte do curso do programador br",
        src:"imgs/jogo-da-velha.png"
    }
]
const Create = {

    nome: null,
    href: null,
    status: null,
    descricao: null,
    src: null,
    
    section: function() {

        let section = document.createElement("div")
        section.classList.add("section")
        section.appendChild(this.img())
        section.appendChild(this.description())

        return section
    },
    
    img: function() {
        let img = document.createElement("div")
        img.classList.add("img")
        img.appendChild(this.imgElement())

        return img
    },

    imgElement: function() {

        let imgElement = document.createElement("img")
        imgElement.classList.add("pictures")
        imgElement.src = this.src

        return imgElement
    },

    description: function() {
        let description =  document.createElement("div")
        description.classList.add("description")
        description.appendChild(this.title())
        description.appendChild(this.p())

        return description
    },

    title: function() {
        let title =  document.createElement("h2")
        title.appendChild(this.link())
        title.innerHTML += this.status

        return title
    },

    link: function(){
        let link = document.createElement("a")
        link.href = this.href
        link.target = "_blank"
        link.rel = "noopener noreferrer"
        link.innerHTML = this.nome

        return link
    },

    p: function() {
        let p = document.createElement("p")
        p.innerHTML = this.descricao
        
        return p
    }
}