let result = solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]);

function solution(name, yearning, photo) {
    const score = {};
    name.forEach((data, idx) => {
        score[data] = yearning[idx];
    });
    
    let answer = [];
    photo.map((val,idx) => {
        let num = 0;
        val.map((val) => {
            num += score[val] ? score[val] : 0;
        })
        answer.push(num);
    });
    return answer;
}