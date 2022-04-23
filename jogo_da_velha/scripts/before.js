window.onload = function() {

    const squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener("click", handleClick)
    })

}
const jogador = document.querySelector(".jogador")
const butao = document.querySelector(".button")
function handleClick(element) {
    console.log(element.target)

    let square = element.target;
    let position = square.id

    if(handleMove(position)) {
        setTimeout(() => {
            playerTime == 0 ? alert("Player ⭕ venceu") : alert("Player ❌ venceu")  
            butao.classList += " butao recomecar"
            butao.addEventListener("click", () => location.reload())
        }, 10)
        
    }
    
    upDateSquare(`${position}`)
}

function upDateSquare(position) {
    console.log(position)
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class="${symbol}"></div>`
    
}