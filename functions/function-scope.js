let f2c=function(fah){
    let celsius=(fah-32)*5/9
    if(celsius<=0){
        let isfreezing=true
    }
    return celsius
}
let t1=f2c(32)
let t2=f2c(68)
console.log(t1)
console.log(t2)