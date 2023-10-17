package programmers.java.level_0;

/*
	n의 배수
	
	* 문제 설명
	정수 num과 n이 매개 변수로 주어질 때, 
	num이 n의 배수이면 1을 return n의 배수가 아니라면 
	0을 return하도록 solution 함수를 완성해주세요.
	
	* 제한사항
	2 ≤ num ≤ 100
	2 ≤ n ≤ 9
*/

public class lessons_181937 {

	
    public int solution(int num, int n) {
        int answer = 0;
        if(num%n == 0) {
        	answer = 1;
        } else if(num%n == 1) {
        	answer = 0;
        }
        return answer;
    }
    
	public static void main(String[] args) {
		lessons_181937 lessons = new lessons_181937();
		lessons.solution(492, 861);
	}

}
