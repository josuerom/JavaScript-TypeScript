public class Multiply {

	public static void main(String[] args) {
		Multiply practice = new Multiply();
		practice.multiplication(50, -9);
	}

	public void multiplication(int a, int b) {
		int result = 0;
		boolean positive = Math.abs(b) == b;

		for (int i = 1; i <= Math.abs(b); i++) {
			if (positive) {
				result = result + a;
			} else {
				result = result - a;
			}
		}
		System.out.println("Result is = " + result);
	}
}