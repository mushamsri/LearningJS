let myaccount={
    name:'aruna',
    expenses:'0',
    income:'0'
}
let addexpense=function(account,amount){
    account.expenses=account.expenses+amount
}
let addincome=function(account,income){
    account.income=account.income+income
}
let resetaccount=function(account){
    account.expenses=0,
    account.income=0
}
let accountsummary=function(account){
    let balance=account.income-account.expenses
    return `${account.name} has$ ${balance}.${account.income}`
}
addincome(myaccount,1000)
addexpense(myaccount,3)
console.log(accountsummary(myaccount))
resetaccount(myaccount)
console.log(accountsummary(myaccount))