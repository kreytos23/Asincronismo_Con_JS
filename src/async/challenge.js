const fetchData = require('../utils/fetchData.js');
const fechData = require('../utils/fetchData.js');
const API = 'https://rickandmortyapi.com/api/character/';

const info = async (url_api) => {
    try{
        const count = await fetchData(url_api);
        const name = await fetchData(`${url_api}${count.results[5].id}`);
        const dimension = await fetchData(`${name.origin.url}`);

        console.log(count.info.count);
        console.log(name.name);
        console.log(dimension.dimension);
    }catch{
        console.error(error);
    }
    
}

console.log('Before');
info(API);
console.log('After');