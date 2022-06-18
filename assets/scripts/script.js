/// Escopo da variáveis 
const projetos = document.querySelector(".projetos")
const logo = document.querySelector(".caixa")
const caixa = document.querySelector("#logo")

///

webSites.forEach( e => {


    Object.keys(e).forEach( o => Create[o] = e[o])
    let section = Create.section()
    projetos.appendChild(section)

})

window.onload = function() {
    const sections = document.querySelectorAll(".section")
    
    for (let index in sections) {
        index % 2 == 0 ? 
        sections[index].classList.add("outher") : 
        false
    }
}


/////


