const marks=[{
    eng:'e',
    mat:'a'
},
{
    eng:'s',
    mat:'a'
}]
const find=function(marks,engmarks){
    const index=marks.findIndex(function(tot,index){
        return tot.eng===engmarks

    })
    return marks[index]
}
const tot=find(marks,'e')
console.log(tot)