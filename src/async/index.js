
const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => {resolve("Do something dude!")},3000)
        : reject(new Error("Ahhh jelp me dio amsiedaaad :c"));
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

const doSomethingSecure = async () => {
    try{
        const something = await doSomethingAsync();
        console.log(something);
    }catch(err){
        console.error(err);
    }
    
}



console.log("Before");
doSomething();
doSomethingSecure();
console.log("After");



