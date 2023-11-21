package baekjoon.IOandOperation;

import java.util.Scanner;

public class Operations {
	
	public static void main(String []args) {
	
		Scanner scanner = new Scanner(System.in);
		int a = scanner.nextInt();
		int b = scanner.nextInt();
		scanner.close();
		
		System.out.println(a+b);
		System.out.println(a-b);
		System.out.println(a*b);
		System.out.println(a/b);
		System.out.println(a%b);
		
		
	}
}
