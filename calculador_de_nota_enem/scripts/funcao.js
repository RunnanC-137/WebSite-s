const submit = document.querySelector(".envio")


// escopo dos eventos

submit.addEventListener( "click", element => {

    let h1 = document.querySelector(".media")
    let notas = document.getElementsByClassName("nota")
    let pesos = document.getElementsByClassName("peso")

    let media = 0
    let gamb = 0

    for (nota of notas) {

        
        media += (parseFloat(nota.value) * parseInt(pesos[gamb].value))
        gamb += 1
    }
    
    h1.innerHTML = `Sua media foi ${media/5}`
})
console.log()


// escopo das funçoes

