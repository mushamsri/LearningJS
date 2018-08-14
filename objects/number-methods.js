let check=function(num){
    let min=1
    let max=5
    let ran=Math.floor(Math.random()*(max-min+1))+min
    return num===ran

}
console.log(check(1))