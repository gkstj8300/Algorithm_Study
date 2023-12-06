const test1 = {
    solution(price, money, count) {
        let data = 0;
        for(let i = 1; i <= count; i++){
            data += price*i
        }
        if(money >= data){
            return 0;
        }
        if(money < data){
            return Math.abs(money-data);
        }
    }
}

const test2 = {
    solution(x, y) {        
        let answer = "";
        for(let i = 0; i < 10; i++) {
            let x_cnt = x.split('').filter(x => Number(x) === i).length;
            let y_cnt = y.split('').filter(y => Number(y) === i).length;
            answer += i.toString().repeat(Math.min(x_cnt, y_cnt));
        }    
        
        if(answer === "") { 
            return "-1";
        }
        else if(answer.split('').filter(x => x === "0").length === answer.length) { 
            return "0";
        }
        else {
            return answer.split('').sort().reverse().join('');
        }
        return result;
    }
}

