/**
 * Aqui se explica el funcionamiento de las promesas
 */

/*
    Se crea una funcion con operador flecha que retornara una nueva
    instancia de Promise, la cual por dentro tendra otra funcion con operador
    flecha que tendra siempre dos parametros llamados "Resolve" y "Reject"
    Estos tendran el resultado de la promesa si se cumple o no respectivamente

    Dentro del cuerpo del arrow function de la promesa se pondra la 
    validacion de la promesa para ver si se cumplira o no
*/
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        //Esta es la validacion, y dentro de resolve o reject se coloca lo que la 
        //promesa retornara en caso de ser cumplida o no
        //Aqui se usó operador terneario
        true ? resolve('Hey!!!') : reject("Whoops!!");
    });
};

/*
    Aqui se manda a ejecutar la promesa
    se usa ".then" para usar lo que la promesa regreso en el caso 
    de ser correcta y se usa ".cath" para usar lo que retorno 
    en el caso de que no se haya cumplido
*/
somethingWillHappen()
    .then( response => console.log(response))
    .catch(err => console.log(err));


/*
    Aqui otro ejemplo, aqui en vez de un simple mensaje 
    de error se instancia un Error para que regrese todo el
    tree del error, ademas de usar un setTimeOut para 
    que se vea la diferencia de tiempo
*/
const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Hey!!! x2");
        }else{
            setTimeout(() => {
                err = new Error("Whooppps!! x2");
                reject(err);
            },3000);
            
        }
    });
};

//Se manda a ejecutar el segundo ejemplo
somethingWillHappen2()
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error));

