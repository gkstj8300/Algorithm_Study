function solution(today, terms, privacies) {
    let ex = new Map();
    let result = [];
    
    for(let str of terms) {
        const [kind, endDate] = str.split(' ');
        ex.set(kind, Number(endDate));
    }

    for(let i = 0; i < privacies.length; i++) {
        const [date, kind] = privacies[i].split(' ');
        
        let checkDate = new Date(date);
        let todayDate = new Date(today);
        
        checkDate.setMonth(checkDate.getMonth() + ex.get(kind));
        
        if(checkDate.getTime() <= todayDate.getTime()) {
            result.push(i+1);
        }
    }
    
    return result;
}