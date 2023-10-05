package baekjoon.problemString;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Scanner;

public class baek2908 {

	public static void main(String[] args) throws Exception {

		//1번째 풀이
		/*BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		String[] s = br.readLine().split(" "); //split으로 공백을 기준으로 자름
		
		StringBuffer sb1 = new StringBuffer(); // StringBuffer reverse메소드 사용을 위해
		StringBuffer sb2 = new StringBuffer();
		sb1.append(s[0]);
		sb2.append(s[1]);
		
		int a = Integer.parseInt(sb1.reverse().toString());
		int b = Integer.parseInt(sb2.reverse().toString());
		
		if(a > b) {
			System.out.println(a);
		}else if(a < b) {
			System.out.println(b);
		}*/
		
		//2번째 풀이
		Scanner sc = new Scanner(System.in);
		
		String s1 = sc.next();
		String s2 = sc.next();
		String t = "";
		
		for(int i = s1.length()-1; i >= 0; i--) {
			t += s1.charAt(i);
		}
		s1 = t;
		t = "";
		
		for(int i = s2.length()-1; i >= 0; i--) {
			t += s2.charAt(i);
		}
		s2 = t;
		
		int n1 = Integer.parseInt(s1);
		int n2 = Integer.parseInt(s2);
		
		if(n1 > n2) {
			System.out.println(n1);
		}else if(n1 < n2) {
			System.out.println(n2);
		}
		
		
		
	}

}










