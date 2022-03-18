import java.util.Scanner;

public class CodeRunner {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Ingrese el valor de A: ");
    int a = sc.nextInt();
    System.out.print("Y el valor de B: ");
    int b = sc.nextInt();

    System.out.println("Resultado = " + (a-b));
  }
}