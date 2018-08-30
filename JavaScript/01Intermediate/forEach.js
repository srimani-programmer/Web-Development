
const months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']

months.forEach(function(monthValue,indexValue){

    console.log(`${indexValue+1} -- ${monthValue}`)
})

console.log('=====================')

//my todo list

const myTodoList = ['go to marraige','then buy a book','return to hostel','go to gym','complete dinner','go to sleep']

myTodoList.forEach(function(list,index){
    console.log(`my schedule list no : ${index+1} ===> ${list}`)
})