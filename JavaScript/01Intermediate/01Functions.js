//let us illustrate about functions in javascript

let sayHello = function(username){

    console.log("Glad welcome to our website "+username)

    console.log(`hello ${username}`)
}

// sayHello('manikanta')

let fullNameMaker = function(firstName,lastName){

    console.log('welcome to our website')
    console.log(`Glad to see you here ${firstName +' '+lastName}`)
}

fullNameMaker('sri','manikanta')

let score = function(level1,level2,bonus){

    let total = level1 + level2 + (bonus*3.5)

    return total
}

console.log('the total game score is:'+score(20,31,60))

let myMultiplier = function(num1,num2){
    
    return  num1 * num2

}

console.log('the multiplied value is:'+myMultiplier(7,12))