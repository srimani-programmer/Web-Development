//project1

// const myTodoList = ['go to marraige','then buy a book','return to hostel','go to gym','complete dinner','go to sleep']

// myTodoList.forEach(function(list,index){
//     console.log(`my schedule list no : ${index+1} ===> ${list}`)
// })

const todoList  = []

todoList.unshift('Go to marriage')
todoList.unshift('buy a book')
todoList.unshift('return to hostel')
todoList.unshift('go to gym')
todoList.unshift('complete the dinner')
todoList.unshift('go to sleep')

for(let index = todoList.length-1 ; index >= 0; index--){

    console.log(`tomorrow schedule list is:${index + 1} ===> ${todoList[index]}`)
}

