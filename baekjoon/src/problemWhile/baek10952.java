package problemWhile;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class baek10952 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		

		
		while(true) {
			
			int a = sc.nextInt();
			int b = sc.nextInt();
			
			if(a==0 && b==0) {
				break;
			}
			
			System.out.println(a+b);
			
		}
		sc.close();
		
		
		
		
//		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
//		
//		StringBuilder sb = new StringBuilder();
//		
//		while(true) {
//			
//			String str = br.readLine();
//			StringTokenizer st = new StringTokenizer(str, " ");
//			int a = Integer.parseInt(st.nextToken());
//			int b = Integer.parseInt(st.nextToken());
//
//			
//			if(a == 0 && b == 0) {
//				break;
//			}
//			
//			sb.append((a+b)+"\n");
//		}
//		System.out.println(sb);
//		
//		br.close();
//		bw.flush();
//		bw.close();
		 
	}

}
