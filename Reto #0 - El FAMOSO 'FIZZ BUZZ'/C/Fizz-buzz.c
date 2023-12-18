#include <stdio.h>

int main() {
    // Iteramos sobre los números del 1 al 100
    for (int i = 1; i <= 100; i++) {
        // Verificamos si el número es múltiplo de 3 y de 5 a la vez
        if (i % 3 == 0 && i % 5 == 0) {
            printf("FizzBuzz\n"); // Si es así, imprimimos "FizzBuzz"
        } else if (i % 3 == 0) {
            printf("Fizz\n"); // Si es múltiplo de 3, imprimimos "Fizz"
        } else if (i % 5 == 0) {
            printf("Buzz\n"); // Si es múltiplo de 5, imprimimos "Buzz"
        } else {
            printf("%d\n", i); // Si no es múltiplo de 3 ni de 5, imprimimos el número
        }
    }
    return 0;
}
