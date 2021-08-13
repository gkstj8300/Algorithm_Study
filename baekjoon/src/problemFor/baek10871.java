package problemFor;

import java.util.Scanner;

public class baek10871 {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		//첫째 줄에 N과 X가 주어진다.
		int n = sc.nextInt();
		int x = sc.nextInt();
		int[] a = new int[n];
		
		for(int i = 0; i < n; i++) {
			a[i] = sc.nextInt();
			if(a[i] < x) {
				System.out.print(a[i]+" ");
			}
		}

	}

}
