/**
 * Aqui se importa la funcion de fetchData para la peticion a la API
 * ademas de declarar la URL de la API
 */
const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';


console.log("Recuperado de la API");

/*
    Aqui se ejecuta la promesa con los ".then" se usa la 
    arrow function con parametro de "data" que contiene la informacion devuelta
    despues se usa un return para que regrese otra iteracion de
    fetchData para hacer otra peticion a la API
    Se usa template literals para formar la URL nueva apartir de la 
    informacion adquirida
    Al final se hace el ".catch" por si hay algun error
*/
fetchData(API)
    .then((data) => {
        console.log(`Numero de Personajes: ${data.info.count}`);
        return fetchData(`${API}${data.results[0].id}`);
    })
    .then((data) => {
        console.log(`Nombre del Personaje: ${data.name}`);
        return fetchData(data.origin.url);
    })
    .then((data) => {
        console.log(`Dimension del Personaje: ${data.dimension}`);
    })
    .catch((err) => {
        console.log(err);
    });