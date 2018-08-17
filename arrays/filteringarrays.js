const marks=[{
    eng:'e',
    mat:'a'
},
{
    eng:'s',
    mat:'a'
}]
const deletesheet=function (marks,marksvalue){
    const index=marks.findIndex(function (mark){
        return mark.eng.toLowerCase()===marksvalue.toLowerCase()

    })
    if (index>-1){
        marks.splice(index,1)
    }
}
const getvalues=function(marks){
    return marks.filter(function(mark){
        return !mark.mat===false
    })
}
console.log(getvalues(marks))