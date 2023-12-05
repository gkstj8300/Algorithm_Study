var fs = require('fs');
// const [...a] = fs.readFileSync("input.txt").toString().trim().split("\n");
const [...a] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = solution([...a]);
console.log(result);

function solution(a) {
    let sum = 0;
    a.map((data) => {
        if(data.split(' ')[2].trim() !== 'P'){
            sum += Number(data.split(' ')[1]);
        }
    })
    
    let sum2 = 0;
    a.map((data) => {
        let grade = data.split(' ')[2];
        let score = data.split(' ')[1];
        sum2 += scoreSum(grade, score);
    })
    return (sum2/sum).toFixed(6);
}

function scoreSum(grade, score){
    if(grade.trim() == 'A+'){
        return score * 4.5;
    }else if(grade.trim() == 'A0'){
        return score * 4.0;
    }else if(grade.trim() == 'B+'){
        return score * 3.5;
    }else if(grade.trim() == 'B0'){
        return score * 3.0;
    }else if(grade.trim() == 'C+'){
        return score * 2.5;
    }else if(grade.trim() == 'C0'){
        return score * 2.0;
    }else if(grade.trim() == 'D+'){
        return score * 1.5;
    }else if(grade.trim() == 'D0'){
        return score * 1.0;
    }else if(grade.trim() == 'F'){
        return score * 0;
    }else if(grade.trim() == 'P'){
        return 0;
    }
}