function carregar() {
    var foto = document.getElementById('foto')
    var msg = document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas`
    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#dc8e4d'
        foto.src = 'Fotos/manha.png'
    } else if (hora >= 12 && hora < 18) {
        document.body.style.background = '#7b4e75'
    } else {
        foto.src = 'Fotos/noite.png'
        document.body.style.background = '#00192d'
    }



}

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

function calcular() {
    let num = document.getElementById('oi')
    let sel = document.getElementById('sele')
    
    if (num.value.length == 0 || Number(num.value) == 0) {
        window.alert('[ERRO] FALTAM DADOS')
    } else {
        let n = Number(num.value)
        
        sel.innerHTML = ''
        for (c=1; c<=10; c++) {
            let inti = document.createElement('option')
            inti.text = `${n} x ${c} = ${c*n}`
            sel.appendChild(inti)
        }
    }
}


var but = document.getElementById('but')
var corpo = document.getElementById('corpo')
corpo.addEventListener('load', carregar())

