package problemFor;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Scanner;
import java.util.StringTokenizer;

public class baek10871 {

	public static void main(String[] args) throws Exception {
		
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
		
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		
		
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");
		
		int a = Integer.parseInt(st.nextToken());
		int b = Integer.parseInt(st.nextToken());
		
		st = new StringTokenizer(br.readLine(), " ");
		
		StringBuilder sb = new StringBuilder();
		
		for(int i = 0; i < a; i++) {
			
			int n = Integer.parseInt(st.nextToken());
			
			if(n < b) {
				sb.append(n+" ");
			}
			
		}
		System.out.println(sb);
		 
		
		
	}

}
