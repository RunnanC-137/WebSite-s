/// Escopo da variáveis 
const projetos = document.querySelector(".projetos")
const logo = document.querySelector(".caixa")
const caixa = document.querySelector("#logo")

///

webSites.forEach( e => {

    Create.nome = e.nome
    Create.href = e.href
    Create.status = e.status == true ? "": "(Em produção)"
    Create.src = e.src
    Create.descricao = e.descricao


    let section = Create.section()
    
    projetos.appendChild(section)

    Object.keys(e).forEach( o => console.log(e[o]))
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

