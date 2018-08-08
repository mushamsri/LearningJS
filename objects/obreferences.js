let myaccount={
    name:'aruna',
    expenses:'5000',
    income:'24000'
}
let addExpense=function(account,amount){
    account.expenses=account.expenses+amount,
    console.log(account)
}
let total=addExpense(myaccount,300)
console.log(total)