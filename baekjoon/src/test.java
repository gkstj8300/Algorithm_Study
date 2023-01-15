import java.io.*;
import java.util.*;

public class test {

	public static void main(String[] args) throws Exception {

		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		int sum = 0;
		String str = sc.next();
		
		for(int i = 0; i < n; i++) {
			sum += str.charAt(i)-'0';
		}
		
		System.out.println(sum);
		
		
	}

}
