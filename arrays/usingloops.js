const marks=[80,90,40,30]
marks.push(70)
console.log(`${marks.length}`)
marks.forEach(function (tot,index){
    let num=index+1
    console.log(`${num}.${tot}`)


})
console.log(marks)