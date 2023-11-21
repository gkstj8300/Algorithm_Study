package baekjoon.temp;

import java.util.Scanner;

public class temp_10 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt(); //紐� 媛쒖쓽 諛곗뿴�쓣 諛쏆쓣 吏�

		for(int i = 0; i < n; i++) {
			int[] count = new int[sc.nextInt()];
			int total = 0; 
			int high = 0;
			
			for(int j = 0; j < count.length; j++) {
				count[j] = sc.nextInt();
				total += count[j];
			} 
			 
			double avg = (double)total / count.length;
			
			for(int j = 0; j < count.length; j++) {
				if(count[j] > avg) {
					high++;
				}
			}
			System.out.printf("%.3f", 100.0 * high / count.length);
			System.out.println("%");
			
		}		
	
	}
}
