package programmers.java.level_1;

import java.util.Scanner;

public class Main {

	public int solution(String str, char t) {
		int result = 0;
		t = Character.toUpperCase(t);
		for(int i = 0; i < str.length(); i++) {
			if(str.toUpperCase().charAt(i) == t) {
				result++;
			}
		}
		System.out.println(result);
		
		return result;
	}
	
	public static void main(String[] args) {
		Main main = new Main();
		Scanner sc = new Scanner(System.in);
		
		String str = sc.next();
		char c = sc.next().charAt(0);
		
		main.solution(str, c);
	}

}
