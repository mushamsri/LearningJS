let isvalid=function(password){
    if(password.length>=8 && !password.includes('password')){
        return true
     } else {
          return false
        }

    }
console.log(isvalid('abcd'))
console.log(isvalid('abc#$264ud'))
console.log(isvalid('password'))