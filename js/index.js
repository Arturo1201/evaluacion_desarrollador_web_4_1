CallApiIp();

	function CallApiIp(){

		rRegion = "";
		rIp = "";
		var requestOptions = {
		  method: 'GET',
		  redirect: 'follow'
		};

		fetch("https://ipapi.co/json", requestOptions)
		  .then(response => response.json())
		  .then(result => {
		  	rRegion = result.city + " " + result.region + ", " + result.country_name + ".";
		  	rIp = result.ip;
		  	document.querySelector("#idRegion").innerHTML = rRegion;
		  	document.querySelector("#idIp").innerHTML = rIp;
		  })
		  .catch(error => console.log('error', error));
	}

	function CallApiRest()
	{ 

		var requestOptions = {
		  method: 'GET',
		  redirect: 'follow'
		};
		//Creacion de variable de respuesta	
		var FilasRespuesta = "";
		//consumo del servicio por medio de fetch	
		fetch("http://10.200.3.35/evaluacion_desarrollador_servicio_4_0/", requestOptions)
		  .then(response => response.json())
		  .then(result => {
		  	//implementacion de ciclo para creacion de objeto de respuesta
		  	for(var x = 0; x<result.listaobjetos.length; x++){

								FilasRespuesta 	+= 	"<tr>" +
			        				"<td class = 'filas'>"+result.listaobjetos[x].tipo+"</td>" +
			            			"<td class = 'filas'>"+result.listaobjetos[x].tamanio+"</td>" +
			            			"<td class = 'filas'>"+result.listaobjetos[x].color+"</td>" +
			            		"</tr>";
		  	};
		  	//implementacion del objeto de respuesta en html
	    document.querySelector("#filaRespuesta").innerHTML = FilasRespuesta;
			  })
		  .catch(error => console.log('error', error));


	}