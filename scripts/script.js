/// Escopo da variáveis 
const projetcts = document.querySelector(".projetos")

///
const webSites = {
    criadorDeCurriculo:{site:"https://runnanc-137.github.io/WebSite-s/Criador_De_Curriculo", nome:"Criador de currículo"},
    myBlog:{site:"https://runnanc-137.github.io/WebSite-s/My_Blog", nome:"My blog"},
    simpleProjects:{site:"https://runnanc-137.github.io/WebSite-s/projetinhos", nome:"simples projects"},
    jogoDoBixo:{site:"https://runnanc-137.github.io/WebSite-s/Jogo_do_Bixo", nome:"Jogo do bixo"}

}
////
for (let index in webSites) {
    
projetcts.innerHTML += ` <div class="projeto"> 
    
    <a href="${webSites[index].site}"> ${webSites[index].nome}</a>
</div> `

}
                                        

