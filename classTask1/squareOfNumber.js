const numbers = [2,4,6,8,10]

    let newNumbers = numbers.map(function(squareOfNumbers){
        return squareOfNumbers * squareOfNumbers;
    })
    console.log(newNumbers)