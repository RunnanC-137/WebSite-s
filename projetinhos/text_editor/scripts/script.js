const formatacoes = document.querySelector(".formatacoes");
const p = document.querySelector(".p");
const textArea = document.querySelector(".textArea")
///

const formList = {

    strong: "N",
    em: "I",
    ins: "S",
    mark: "M",
    small: "P",
    del: "R",
    sub: "sub",
    sup: "sup"

}

///

const procura = function(nome, clase) {

    var nome = document.querySelector(`.${clase}`);
    nome = nome
}

const executar = function(element) {

    console.log(element.className)
    console.log(textArea.value)

    p.innerHTML = `<p><${element.className}>${textArea.value}</${element.className}><p>`
    
}

///

for (let index in formList) {


    formatacoes.innerHTML += `

        <label for="${index}">
            <input type="button" value="${formList[index]}" onclick="executar(this)" class="${index}"></input>
        </label>

    `

    procura(index, index)



}