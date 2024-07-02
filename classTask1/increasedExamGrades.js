
const examGrade = [85,92,78,88,95]

    let newExamScores = examGrade.map(function(addFiveToScores){
        return addFiveToScores + 5;
    })
    console.log(newExamScores)