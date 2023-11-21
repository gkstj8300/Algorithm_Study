package baekjoon.temp;

import java.util.Scanner;

public class temp_7 {
	public static void main(String[] args) {
		//
//		Scanner sc = new Scanner(System.in);
//		
//		String str = sc.nextLine();
//		
//
//		String arr = sc.nextLine();
//		int count = 0;
//		
//		for(int i = 0; i < arr.length() - 1; i++) {
//			if(arr.charAt(i) == 32) {
//				count++;
//			}
//		}

		
		
		Scanner sc = new Scanner(System.in);
		
		String st = sc.nextLine().trim();
		sc.close();
		
		if(st.isEmpty()) {
			System.out.println(0);
		}else {
			System.out.println(st.split(" ").length);
		}
		
	}
}
