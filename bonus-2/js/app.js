// selezionare il container
const containerElement = document.querySelector('.container');

// PER ogni numero che va da 1 a 100
for (let i = 1; i <= 100; i++) {
    const number = i;
    // creare un div
    const divElement = document.createElement('div');
    
    // inserire il contenuto del div
    if (number % 3 === 0 && number % 5 === 0) {    // SE il numero è un multiplo di 3 e 5
        // stampare la stringa 'FizzBuzz'
        divElement.append('FizzBuzz');
    } else if (number % 3 === 0) {    // SE il numero è un multiplo di 3
        // stampare la stringa 'Fizz'
        divElement.append('Fizz');
    } else if (number % 5 === 0) {    // SE il numero è un multiplo di 5
        // stampare la stringa 'Buzz'
        divElement.append('Buzz');
    } else {
        // stampare il numero nella console
        divElement.append(number); 
    }
    
    // aggiungere il div nella pagina
    containerElement.append(divElement);
}