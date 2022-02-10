
 carregar = function() {

    var h = document.querySelector(".horas-do-dia")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    minutos < 10 ? minutos = `0${minutos}` : minutos = minutos

    h.innerHTML = `${hora}:${minutos}`

    if (hora >= 0 && hora < 12) {

        document.body.style.backgroundImage = "url(https://c.wallhere.com/photos/f4/50/pixel_art_waterfall_turtle-167853.png!d)"

    } else if (hora >= 12 && hora < 18) {

        document.body.style.backgroundImage = "url(https://c.wallhere.com/photos/1b/58/pixelated_pixel_art_pixels_8_bit_space_astronaut_spacesuit_helmet-35188.png!d)"

    } else {

        document.body.style.backgroundImage = "url(https://c.wallhere.com/photos/52/1c/digital_art_pixel_art_pixelated_pixels_nature_landscape_Shovel_Knight_video_games-24164.jpg!d)"

    }
    
    window.onload(carregar())


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
window.onload(carregar())

