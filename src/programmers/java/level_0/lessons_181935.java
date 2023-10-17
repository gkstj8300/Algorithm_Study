package programmers.java.level_0;

/*
	홀짝에 따라 다른 값 반환하기
	
	* 문제 설명
	양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 
	n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.
	
	* 제한사항
	1 ≤ n ≤ 100
*/


public class lessons_181935 {

    public int solution(int n) {
        int answer = 0;
        for(int i = 1; i <= n; i++) {
            if(n % 2 == 0 && i % 2 == 0) {
            	answer += (i*i);
            } else if(n % 2 == 1 && i % 2 == 1) {
            	answer += i;
            }
    	}
        return answer;
    }
    
	public static void main(String[] args) {
		lessons_181935 lessons = new lessons_181935();
		lessons.solution(10);
	}

}
