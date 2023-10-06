package baekjoon.IOandOperation;

import java.util.Scanner;

public class Operation4 {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		int a = 472;
		int b = 385;
		
		scanner.close();
		
		System.out.println((b % 10));
		System.out.println((b/10%10));
		System.out.println(b/100);
		
		System.out.println("==========================");
		
		System.out.println(a * (b % 10));
		System.out.println(a * (b % 100 / 10));
		System.out.println(a * (b / 100));
		System.out.println(a * b);
		
		
				

	}

}
