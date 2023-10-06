package baekjoon.problemIf;

import java.util.Scanner;

public class leapYear {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		StringBuilder sb = new StringBuilder();
		
		int a = sc.nextInt();
	
		
		for(int i = 0; i <= a; i++) {
			
			int b = sc.nextInt();
			
			for(int j = 0; j <= b; j++) {
				
				String str = sc.next();
				
				for(int k = 0; k < str.length(); k++) {
					
					sb.append(str.charAt(k)*b);
					
				}
				
			}
			
		}
		
		System.out.println(sb);
		
	}

}
