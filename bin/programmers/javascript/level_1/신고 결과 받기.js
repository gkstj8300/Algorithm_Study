function solution(id_list, report, k) {
    let countMap = new Map();
    let reportMap = new Map();
    
    let uniqueReport = new Set(report);
    
    for (let arr of uniqueReport) {
        const [userId, reportId] = arr.split(' ');
        
        countMap.set(reportId, (countMap.get(reportId) || 0) + 1);
        
        if (reportMap.has(userId)) {
            reportMap.get(userId).push(reportId);
        } else {
            reportMap.set(userId, [reportId]);
        }
    }
    
    let result = [];
    
    for (let id of id_list) {
        let count = 0;
        
        if (reportMap.get(id)) {
            for (let i = 0; i < reportMap.get(id).length; i++) {
                let reportId = reportMap.get(id)[i];
                
                if (countMap.get(reportId) >= k) {
                    count++;
                }
            }   
        }
        result.push(count);
    }
    
    return result;
}