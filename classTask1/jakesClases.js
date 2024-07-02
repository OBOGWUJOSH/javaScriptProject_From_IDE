
let student = "jake";
let clasesTime = ["9:00AM", "11:00AM","1:00PM", "3:00PM", "5:00PM"]

function timeOfClasses(a){

    time = a.forEach((time)=>{
        if (time.slice(-2)===("PM"))
            console.log(time);
    })
}

timeOfClasses(clasesTime);
