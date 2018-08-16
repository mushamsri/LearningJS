const marks=[{
    eng:'b',
    mat:'a'
},{
eng:'s',
mat:'e'
}]
console.log(marks)
let ind=marks.findIndex(function(tot,index){
    return tot.mat==='e'

})
console.log(ind)