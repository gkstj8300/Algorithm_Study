console.log( solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]) );

function solution(participant, completion) {
    let map = new Map();
    for(let i = 0; i < participant.length; i++) {
        map.set(participant[i], (map.get(participant[i])+1) || 1);
    }
    for(let i = 0; i < completion.length; i++) {
        map.set(completion[i], (map.get(completion[i])-1));
    }
    let result = [...map].filter((data) => data[1] !== 0);
    
    return result[0][0];
}