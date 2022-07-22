// PER ogni numero che va da 1 a 100
for (let i = 1; i <= 100; i++) {
    const number = i;
    
    // SE il numero è un multiplo di 3 e 5
    if (number % 3 === 0 && number % 5 === 0) {
        // stampare la stringa 'FizzBuzz'
        console.log('FizzBuzz');
    } else if (number % 3 === 0) {    // SE il numero è un multiplo di 3
        // stampare la stringa 'Fizz'
        console.log('Fizz');
    } else if (number % 5 === 0) {    // SE il numero è un multiplo di 5
        // stampare la stringa 'Buzz'
        console.log('Buzz');
    } else {
        // stampare il numero nella console
        console.log(number); 
    }
}