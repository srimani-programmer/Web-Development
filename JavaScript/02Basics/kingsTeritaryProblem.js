//this problem is related to scope of the variable

let king = 'alex'

if(true){
     king = 'krish' /*without any keyword the variable acts like an global one so makesure
                     while declaring an variable in javascript*/

    if(true){
        let king = 'sri'

        if(true){

           king = 'soleman'

            console.log(king)
        }
    }
}

 if(true){
     console.log('this is second territory'+king)
 }

while(true){

    let king = 'arjun'

    if(true){
        console.log('this is third territory:'+king)
    }
    break
}

