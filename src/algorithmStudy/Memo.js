/** 
 * 스파이 의상 문제(해시)
 * Map(2) { 'eyewear' => 1, 'headgear' => 2 }
*/

function getCombinationCount(map) {
    let result = 1;

    for (let count of map.values()) {
        result *= (count + 1); // 선택 + 선택 안 함
    }

    return result - 1; // 모두 안 입는 경우 제외
}

/**
 * 모든 경우의 수 중 가장 큰 수
 * [6, 10, 2] = [6102, 6210, 1062, 1026, 2610, 2106]
 */

function solution(numbers) {
    const answer = numbers
        .map(String)  // 숫자를 문자열로 변환
        .sort((a, b) => (b + a) - (a + b))  // 비교 기준: b+a vs a+b
        .join('');  // 이어붙임

    // 예외 처리: '0000'처럼 모두 0이면 '0' 하나만 리턴
    return answer[0] === '0' ? '0' : answer;
}