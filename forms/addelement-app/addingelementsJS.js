const todos=[{
    text:'hello',
    completed:false
},{
    text:'I am Aruna',
    completed:true
},{
    text:'from Accenture',
    completed:true
},{
    text:'hyderabad',
    completed:false
}]
const propertylength=todos.filter(function(todo){
    return !todo.completed
})
const countFalseTodos = document.createElement('h1')
countFalseTodos.textContent=`you have ${propertylength.length} todos left`
document.querySelector('body').appendChild(countFalseTodos)

todos.forEach(function(todo){
    const para=document.createElement('p')
    para.textContent=todo.text
    document.querySelector('body').appendChild(para)

})
