const textarea = document.getElementsByTagName("textarea");

for (let index in textarea) {

	let text = textarea[index]

	text.addEventListener( "keyup", e => {
	text.style.height = "auto"
	let scHeight = e.target.scrollHeight;
	text.style.height = `${scHeight}px`;
	});
}

const envio =document.querySelector(".enviar");

envio.addEventListener( "click", )

let nome 
let profissao
let numero
let email
let cidade 
let resumo