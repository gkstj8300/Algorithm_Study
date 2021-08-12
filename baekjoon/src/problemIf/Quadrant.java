package problemIf;

import java.util.Scanner;

public class Quadrant {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		
		int a = scanner.nextInt();
		int b = scanner.nextInt();
		
		scanner.close();
		
		if(a > 0) {
			if(b > 0) {
				System.out.println("1");
			}else if(b < 0) {
				System.out.println("4");
			}
		}else if(a < 0) {
			if(b > 0) {
				System.out.println("2");
			}else if(b < 0) {
				System.out.println("3");
			}
		}

	}

}
