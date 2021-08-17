package problemArray;

import java.util.Scanner;

public class baek3052 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		int[] a = new int[10];
		int[] b = {42, 84, 42, 42, 42, 42, 42, 43, 1, 5};
		int count = 0;
		for(int i = 0; i < b.length; i++) {
			
			if(b[i] % 42 == 0) {
				System.out.println(b[i]+"완료");
			}else if(b[i] % 42 == 1) {
				count++;
			}
			
		}
		
		
		System.out.println(count);
	}

}
