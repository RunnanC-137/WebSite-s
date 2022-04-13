const noticias =  {
	
	list: [
		{
			titulo:"Tijolo ecológico",
			data:"2022",
			img: "../imgs/casa2.jpg",
			
		},
		{
			titulo:"Taipa de pilão",
			data:"2022",
			img: "../imgs/casa4.jpg",
			
		},
		
	],

	element: document.querySelector(".noticias"),
	
	nova: function (titulo, data, img, descricao) {
		let promise = new Promise( function (resolve, reject) {
			noticias.list.push({titulo, data, img, descricao})
			let error = false;
			error == false ? resolve() : reject({msg: "Erro"})
		}) 
		return promise.then().catch( (error) => console.log(error.msg) )
	}

}

noticias.nova("Adobe", "2022", "../imgs/casa3.jpg")

window.onload = function(e) {

	const noticia = document.querySelectorAll(".noticia")
	
	for (index in noticias.list) {noticias.list[index].descricao = decricoes[index]}

	
	
	for (index of noticias.list) {
		noticias.element.innerHTML += `
		<div class="noticia">
                    <div class="titles">
                        <h1>${index.titulo}</h1>
                        <h4>${index.data}</h4>
                    </div>
                    
                    <img src=${index.img} alt="casa ecológica">
                    <p>
                        ${index.descricao}
                    </p>
                    <hr>
                </div>
		`
	}




}