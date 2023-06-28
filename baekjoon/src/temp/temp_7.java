package temp;

import java.util.Scanner;

public class temp_7 {
	public static void main(String[] args) {
		//1踰덉㎏ ���씠
		/*Scanner sc = new Scanner(System.in);
		
		String str = sc.nextLine();
		
		StringTokenizer st = new StringTokenizer(str, " ");
		System.out.println(st.countTokens());*/
		
		//2踰덉㎏ ���씠�뒗 ��由�
		/*Scanner sc = new Scanner(System.in);
		String arr = sc.nextLine();
		int count = 0;
		
		for(int i = 0; i < arr.length() - 1; i++) {
			if(arr.charAt(i) == 32) {
				count++;
			}
		}
		System.out.println(count);*/
		
		//3踰덉㎏ ���씠
		Scanner sc = new Scanner(System.in);
		
		String st = sc.nextLine().trim();
		sc.close();
		
		if(st.isEmpty()) {
			System.out.println(0);
		}else {
			System.out.println(st.split(" ").length);
		}
		
	}
}
