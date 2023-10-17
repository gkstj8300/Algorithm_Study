package programmers.java.level_0;

/*
	문자열 곱하기
	
	* 문제 설명
	문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.
	
	* 제한사항
	1 ≤ my_string의 길이 ≤ 100
	my_string은 영소문자로만 이루어져 있습니다.
	1 ≤ k ≤ 100
*/

public class lessons_181940 {

    public String solution(String my_string, int k) {
        String answer = "";
        for(int i = 1; i <= k; i++) {
        	answer += my_string;
        }
        System.out.println(answer);
        return answer;
    }
	
	public static void main(String[] args) {
		lessons_181940 lessons = new lessons_181940();
		lessons.solution("String", 3);
	}

}
