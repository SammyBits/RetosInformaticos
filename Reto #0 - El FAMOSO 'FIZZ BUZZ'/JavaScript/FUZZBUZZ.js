function fizzbuzz(num){ //Se crear la función FIZZBUZZ y se declara la variable num
    for(let i =1;i<= num; i++){ 
        if(i % 2 === 0 && i % 3 === 0) console.log("FizzBuzz"); //Si el numero es multiplo de 2 y de 3 , se escribirá la palabra Fizz Buzz
        else if(i % 3 === 0) console.log("Fizz"); //Si el numero es multiplo de 3 se escribirá la palabra  Fizz
        else if(i % 2 === 0) console.log("Buzz"); //Si el numero es multiplo de 2, se escribirá la palabra Buzz 
        else console.log(i);
    }

}

fizzbuzz(100); //Aquí se llama la función y se le da valor a la variable num