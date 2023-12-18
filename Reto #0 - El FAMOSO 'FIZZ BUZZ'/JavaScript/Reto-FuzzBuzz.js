// Iteramos sobre los números del 1 al 100
for (let i = 1; i <= 100; i++) {
    // Verificamos si el número es múltiplo de 3 y de 5 a la vez
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); // Si es así, imprimimos "FizzBuzz"
    } else if (i % 3 === 0) {
        console.log("Fizz"); // Si es múltiplo de 3, imprimimos "Fizz"
    } else if (i % 5 === 0) {
        console.log("Buzz"); // Si es múltiplo de 5, imprimimos "Buzz"
    } else {
        console.log(i); // Si no es múltiplo de 3 ni de 5, imprimimos el número
    }
}
