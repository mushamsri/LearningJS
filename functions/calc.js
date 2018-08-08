let cal=function(marks,totmarks){
    let percent=(marks/totmarks)*100
    let grade=''
    if(percent>=90){
        grade='A'
    }
    else if(percent>=80){
        grade='B'
    }else if(percent>=70){
        grade='C'
    }else if(percent>=60){
        grade='D'
    }else{
        grade='F'
    }
    return `${grade} (${percent}%)`
}
let result=cal(9,20)
console.log(result)