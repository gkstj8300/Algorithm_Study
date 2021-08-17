package problemArray;

import java.util.Arrays;
import java.util.Scanner;

public class baek10818 {

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] data = new int[N];

        for(int i = 0; i < N; i++){
            data[i] = sc.nextInt();
        }

        int min = data[0]; 
        int max = data[0];

        for(int i = 0; i< N; i++){
            if(min > data[i]){
                min = data[i];
            }else if(max < data[i]){
                max = data[i];
            }
        }

        System.out.println(min+" "+max);

    }
	
}