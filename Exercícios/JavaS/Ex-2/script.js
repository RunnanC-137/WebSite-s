function contar() {
    let inicio = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let dados = document.getElementById('dados')
   
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] FALTAM DADOS')
    } else if (Number(passo.value) == 0) {
        window.alert('[ERRO] DADOS INVALIDOS')
    } else{
        dados.innerHTML = 'Contando'
        
        let n_ini = Number(inicio.value)
        let n_fim = Number(fim.value)
        let n_pas = Number(passo.value)

        if (n_pas <= 0) {
            n_pas = 1 
        }
        
        if (n_ini < n_fim) {
           for(let c = n_ini; c <= n_fim; c += n_pas) {
                dados.innerHTML += ` &#x1F449; ${c} `             
            } 
        } else if (n_ini > n_fim) {
            for(let c = n_ini; c >= n_fim; c -= n_pas) {
                dados.innerHTML += ` &#x1F449; ${c} `     
            }   
        }
        dados.innerHTML += `&#x1F6A9`
    }
}


var but = document.getElementById('but')

