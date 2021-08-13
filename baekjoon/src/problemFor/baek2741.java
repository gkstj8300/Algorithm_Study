package problemFor;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Scanner;

public class baek2741 {

	public static void main(String[] args) throws Exception {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        
        int n = Integer.parseInt(br.readLine().trim());
        
        for(int i = 1; i <= n; i++) {
        	
        	bw.write(i + "\n");
        }
        
        bw.flush();
        bw.close();
        
	}
	
	/*public static void main(String [] args) {
		
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		
		for(int i = 1; i <= n; i++	) {
			System.out.println(i);
		}
		
	}*/
	

}
