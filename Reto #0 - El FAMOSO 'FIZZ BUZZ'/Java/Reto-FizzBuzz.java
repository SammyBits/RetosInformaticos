public class FizzBuzz {
    public static void main(String[] args) {
        // Iteramos sobre los números del 1 al 100
        for (int i = 1; i <= 100; i++) {
            // Verificamos si el número es múltiplo de 3 y de 5 a la vez
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println("FizzBuzz"); // Si es así, imprimimos "FizzBuzz"
            } else if (i % 3 == 0) {
                System.out.println("Fizz"); // Si es múltiplo de 3, imprimimos "Fizz"
            } else if (i % 5 == 0) {
                System.out.println("Buzz"); // Si es múltiplo de 5, imprimimos "Buzz"
            } else {
                System.out.println(i); // Si no es múltiplo de 3 ni de 5, imprimimos el número
            }
        }
    }
}
