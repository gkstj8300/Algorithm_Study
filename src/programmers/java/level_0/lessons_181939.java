package programmers.java.level_0;

/*
	더 크게 합치기
	
	*  문제 설명
	연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다.
	예를 들면 다음과 같습니다.
	12 ⊕ 3 = 123
	3 ⊕ 12 = 312
	양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.
	단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.
	
	* 제한사항
	1 ≤ a, b < 10,000
*/

public class lessons_181939 {
	
    public int solution(int a, int b) {
        int num1 = Integer.parseInt((Integer.toString(a)+Integer.toString(b)));
        int num2 = Integer.parseInt((Integer.toString(b)+Integer.toString(a)));
        int answer = 0;
        if(num1 > num2) {
        	answer = num1;
        } else {
        	answer = num2;
        }
        return answer;
    }
    
	public static void main(String[] args) {
		lessons_181939 lessons = new lessons_181939();
		lessons.solution(492, 861);
	}

}
