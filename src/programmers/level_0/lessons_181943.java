package programmers.level_0;

import java.io.BufferedReader;
import java.util.Scanner;

/*
	문자열 겹쳐쓰기
	* 문제 설명
	문자열 my_string, overwrite_string과 정수 s가 주어집니다. 
	문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 
	문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
	
	* 제한사항
	my_string와 overwrite_string은 숫자와 알파벳으로 이루어져 있습니다.
	1 ≤ overwrite_string의 길이 ≤ my_string의 길이 ≤ 1,000
	0 ≤ s ≤ my_string의 길이 - overwrite_string의 길이
*/

public class lessons_181943 {

    public String solution(String my_string, String overwrite_string, int s) {
    	StringBuffer sb = new StringBuffer(); 
    	String answer = sb.append(my_string).delete(s, overwrite_string.length()+s).insert(s, overwrite_string).toString();
        return answer;
    }
	
	public static void main(String[] args) {
		lessons_181943 lessons = new lessons_181943();
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String b = sc.next();
        int c = sc.nextInt();
        lessons.solution(a, b, c);
	}

}
