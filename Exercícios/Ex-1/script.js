function carregar() {
    var foto = document.getElementById('foto')
    var msg = document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas`
    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#dc8e4d'
        foto.src = '../../Fotos/manha.png'
    } else if (hora >= 12 && hora < 18) {
        document.body.style.background = '#7b4e75'
    } else {
        foto.src = '../../Fotos/noite.png'
        document.body.style.background = '#00192d'
    }



}

var corpo = document.getElementById('corpo')
corpo.addEventListener('load', carregar())

