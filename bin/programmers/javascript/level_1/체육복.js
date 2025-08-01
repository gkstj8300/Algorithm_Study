// 전체 학생의 수 n, 도난당한 학생 lost, 여벌이 있는 학생 reserve = 체육수업을 들을 수 있는 학생의 수 return
function solution(n, lost, reserve) {
    const realLost = lost.filter(x => !reserve.includes(x));
    const realReserve = reserve.filter(x => !lost.includes(x));

    const clothes = Array(n + 1).fill(1);
    
    realLost.forEach(i => clothes[i]--);
    realReserve.forEach(i => clothes[i]++);

    for (let i = 1; i <= n; i++) {
        if (clothes[i] === 0) {
            if (clothes[i - 1] === 2) {
                clothes[i]++;
                clothes[i - 1]--;
            } else if (clothes[i + 1] === 2) {
                clothes[i]++;
                clothes[i + 1]--;
            }
        }
    }

    return clothes.slice(1).filter(v => v >= 1).length;
}