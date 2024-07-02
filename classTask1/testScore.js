const testScores = [44,78,98,56,44,54,33,88,99,77];

    let newScores = testScores.filter(function(testScore)
    {return testScore > 70;
    })
    console.log(newScores)
