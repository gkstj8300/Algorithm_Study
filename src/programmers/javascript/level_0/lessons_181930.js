/*
    주사위 게임 2

    * 문제 설명
    1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.

    세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
    세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
    세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점을 얻습니다.
    세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

    * 제한사항
    a, b, c는 1이상 6이하의 정수입니다.

    * 입출력 예
    a	b	c	result
    2	6	1	9
    5	3	3	473
    4	4	4	110592
*/

function solution(a, b, c){
    let arr = [a, b, c];
    let count = 0;
    return arr.reduce((acc, cur, idx) => {
        for(let i = 0; i < arr.length; i++){
            if(cur == arr[i] && idx != i){
                count++;
            }
        }
        return resultCheck(count-(count/2),a,b,c);
    }, "");
}

function resultCheck(count,a,b,c){
    if(count === 0){
        return a+b+c;
    } else if(count === 1) {
        return (a + b + c) * (a*a + b*b + c*c);
    } else if(count === 3){
        return (a + b + c) * (a*a + b*b + c*c) * (a*a*a + b*b*b + c*c*c) ;
    }
}