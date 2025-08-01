function solution(schedules, timelogs, startday) {
    let count = 0;

    for (let i = 0; i < schedules.length; i++) {
        let [h, m] = splitTime(schedules[i]);
        m += 10;
        if (m >= 60) {
            h += 1;
            m -= 60;
        }

        let success = true;

        for (let j = 0; j < 7; j++) {
            let day = (startday - 1 + j) % 7 + 1;

            if (day === 6 || day === 7) continue;

            let [ah, am] = splitTime(timelogs[i][j]);

            if (ah > h || (ah === h && am > m)) {
                success = false;
                break;
            }
        }

        if (success) count++;
    }

    return count;
}

function splitTime(time) {
    let hour = Math.floor(time / 100);
    let minute = time % 100;
    return [hour, minute];
}
