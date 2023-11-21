package baekjoon.problemArray;

import java.util.HashSet;
import java.util.Scanner;

public class baek3052 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		HashSet h = new HashSet();
		
		for(int i = 0; i < 10; i++) {
			h.add(sc.nextInt() % 42);
		}
		
		sc.close();
		System.out.println(h.size());
		
		/*int[] a = new int[10];
		int[] b = new int[42];
		int count = 0;
		
		for(int i = 0; i < a.length; i++) {
			a[i] = sc.nextInt();
		}
		
		for(int i = 0; i < a.length; i++) {
			b[a[i]%42]++;
		}
		
		for(int i = 0; i < b.length; i++) {
			if(b[i] != 0) {
				count++;
			}
		}
		
		
		System.out.println(count);*/
	}

}
