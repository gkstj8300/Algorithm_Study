let result = solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]);

function solution(players, callings) {
    const player = {};
    for (let i = 0; i < players.length; i++) {
        player[players[i]] = i;
    }
    callings.forEach((name) => {
        let currentIdx = player[name];
        let target = players[currentIdx-1];
        player[name] -= 1;
        player[target] += 1;
        players[currentIdx] = target;
        players[currentIdx-1] = name;
    });
    
    return players;
}