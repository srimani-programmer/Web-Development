//to get better understanding about array please go to documentation section
const numbers = [1,2,3,4,5,6]

console.log(numbers)


//shift operator in js which is used to shift one element at starting position

console.log(numbers.shift())
console.log(numbers)

//unshift operator in js

console.log(numbers.unshift(0))
console.log(numbers)

//push operation with array's

numbers.push(7)
numbers.push(8)

console.log(numbers)

//pop operation in js

numbers.pop()
console.log(numbers)

//splice operator in js

numbers.splice(2,3,6)
console.log(numbers)