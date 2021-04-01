/**
 * En este archivo se crea el modulo de la funcion fetchData.
 * Se sigue utilizando XMLHttpRequest para la peticion a la API
*/
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

/**
 * 
 * @param url_api: Esta es la URL de la API a utilizar
 * en la funcion se sigue la implementacion de una promesa y se siguen los pasos
 * para realizaar la peticion a la API explicados en el el apartado de 
 * los Callbacks
 */
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
        if(xhttp.readyState === 4){
            /*
                Aqui es donde cambia la implementacio,
                ya que en vez de mandar a llamar callbacks
                se usan los resolve y el reject para devolver la
                informacion recuperada de la API
                Si falla se manda una instancia de Error
            */
            (xhttp.status === 200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error("Whooops!!"));
            }
        });
        xhttp.send();
    });
}

/*
    Aqui se exporta el modulo 
    y no se usa ECS6 ya que node aun trabaja bajo common JS 
    por defecto
*/
module.exports = fetchData;