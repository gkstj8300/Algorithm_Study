// bandage =  [시전 시간, 초당 회복량, 추가 회복량] 
// health = 최대 체력
// attacks[i] = [공격 시간, 피해량]

function solution(bandage, health, attacks) {
    const [castTime, hps, extraHeal] = bandage;
    const maxHealth = health;

    let currentHealth = health;
    let healCount = 0;
    let attackIndex = 0;

    const attackMap = new Map(attacks);

    const [lastTime, _] = attacks[attacks.length - 1];

    for (let i = 1; i <= lastTime; i++) {
        if (attackMap.has(i)) {
            const damage = attackMap.get(i);
            currentHealth -= damage;
            if (currentHealth <= 0) return -1;

            healCount = 0;
        } else {
            currentHealth += hps;
            healCount++;

            if (healCount === castTime) {
                currentHealth += extraHeal;
                healCount = 0;
            }

            if (currentHealth > maxHealth) {
                currentHealth = maxHealth;
            }
        }
    }

    return currentHealth;
}
