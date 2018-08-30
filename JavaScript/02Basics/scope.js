//Let us talk about the hierarchy of variables in javascript

let iAmGlobal = 'i am a Global variable'

while(true){

    let iAmLocal = 'i am a local variable'

    var iAmLocal2 = 'i am declared locally but work like a global variable'

    console.log(iAmGlobal)
    console.log(iAmLocal)
    
    break;
}

console.log(iAmGlobal)

console.log(iAmLocal2)