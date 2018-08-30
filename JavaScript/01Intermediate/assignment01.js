
let studentMarks = function(obtainedMarks,totalMarks){
        let result = (obtainedMarks/totalMarks) * 100

        if (result >= 90){
            myGrade = 'A-GRADE'
        }
        else if(result >= 80){
            myGrade = 'B-GRADE'
        }
        else if(result >= 70){
            myGrade = 'C-GRADE'
        }
        else if(result >= 60){
            myGrade = 'D-GRADE'
        }
        else if(result >= 50){
            myGrade = 'E-GRADE'
        }
        else{
            myGrade = 'FAIL IN THE EXAMINATION'
        }

        return `My percentage is ${result} and my grade is ${myGrade}`
}


console.log(studentMarks(510,600))
