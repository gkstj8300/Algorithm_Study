package problemIf;

import java.util.Scanner;

public class alarm {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		
		int h = scanner.nextInt();
		int m = scanner.nextInt();

		
		int hh = h;
		int mm = m-45;
		
		scanner.close();
		 
		if(mm < 0) {
			mm = mm + 60;
			hh--;
			if(hh < 0) {
				hh = hh + 24;
			}
		}
		System.out.println(hh + " " + mm);
		
		

	}

}
