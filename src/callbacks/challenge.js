/**
 * En este programa se hace uso de Callbacks para utilizar 
 * una api de un programa de caricaturas.
 * XHMLHttpRequest: Esta es la llamada al modulo XMLHttpRequest que
 *                  se instalo con npm
 * API: Es la url de la api que se va a usar
 */

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

/**
 * 
 * @param  url_api: aqui se pondra la url a la que se le madara a llamar
 *                  con el metodo GET (Rest - API)
 * @param  callback: Aqui se manda la funcion callback que recuperará los
 *                  datos de la llamada a la api 
 */

function fetchData(url_api,callback){
    //Primero se crea una nueva instancia de XMLHttpRequest
    let xhttp = new XMLHttpRequest();
    /*  
        Se abre la peticion, como primer parametro se pone el metodo a usar
        En este caso es GET porque se traera informacion
        Despues de pone la url a usar y por ultimo el true es por default
        Que significa que se activara el modo asincrono
    */

    xhttp.open('GET', url_api, true);

    /*
        Aqui se manda a llamar el metodo que revisara si la respuesta fue 
        correcta, primero se iguala a 4 y despues en estado 200
        (mas info: https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp)
    */
    xhttp.onreadystatechange = function(event) {
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                /*
                    En esta parte es donde se manda a llamar el callback
                    Se le envia un null que significa que la peticion no
                    tuvo errores, y como segundo parametro se manda
                    la respuesta de la api, se tiene que parsear como
                    tipo JSON para poder usarlo como un objeto
                */
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                /*
                    En este else se manda un error en
                    caso de que no sea correcta la respuesta de la API
                    en este caso se pone en un return para matar la funcion
                    ademas de que no se manda niguna informacion y aqui si se envia
                    como parametro un error
                */
                const error = new Error("Error en la api");
                return callback(error, null);
            }
        }
    }
    //Aqui finalmente se manda la peticion
    xhttp.send();
}



/*
    Aqui se usa la funcion fetchdata para hacer tres peticiones a la API,
    esto para traer los datos necesarios.
*/
/*
    Primero se manda la URL de la api principal, esta
    va a recuperar todos los personajes
    como funcion de callback se hace una funcion a la cual
    data1 es resultado de la primera peticion, asi como error1 puede ser 
    el error de la primera peticion que se pueda llegar a generar
*/
fetchData(API, function(error1, data1){
    if(error1){
        return console.error(error1);
    }
    /*
        Aqui se manda a llamar por segunda vez, se usa un atributo de la
        respuesta a la llamada anterior que te regresa la URL del personaje
        que le indiques. Despues se manda otra funcion callback
        y en esta caso esta tiene data2 y error2 que son los resultados generados 
        por la segunda peticion
    */
    fetchData(data1.results[0].url, function(error2, data2){
        if(error2){
            return console.error(error2);
        }
        /* 
            Misma funcion que las dos pasadas, esta es la tercer llamada a la API
        */
        fetchData(data2.origin.url, function(error3, data3){
            if(error3){
                return console.error(error3);
            }
            /*
                Finalmente una vez obtenidos los datos requeridos
                se mandan a imprimir
                Como se parseo a JSON, se puede usar como si fueran 
                objetos y se accede a sus atributos
            */
            console.log(data1.info.count);
            console.log(data1.results[0].name);
            console.log(data3.dimension);
        });
    }); 
});