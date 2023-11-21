package baekjoon.problemWhile;

import java.util.Scanner;

public class baek1110 {

	public static void main(String[] args) {
		
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        if(n<10)
            n *= n * 10;
    
        int left, right, cnt = 0, sum = n;
 
        while(true) {
            left = sum / 10;
            System.out.println("1 : "+sum / 10);
            right = sum % 10;
            System.out.println("2 : "+sum % 10);
            sum = left + right;
            System.out.println("3 : "+left + right);
            
            sum = right * 10 + sum % 10;
            System.out.println("4 : "+right * 10 + sum % 10);
            System.out.println("====================");
            cnt++;
            if(sum == n)
                break;
        }
        System.out.println(cnt);
        
        
	}
		
}


