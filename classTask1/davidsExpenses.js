

let davidsDailyExpenses =  {"groceries":150,
    "dining out":100,
    "transportation":50,
    "entertainment":80,}


function davidsExpenses(object){
let sum = 0
for (let items in object){
sum += object[items]
}
return sum;
}
console.log(davidsExpenses(davidsDailyExpenses))


