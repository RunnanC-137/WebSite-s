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

