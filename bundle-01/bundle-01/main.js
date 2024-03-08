/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

// Correzione
for (let i = 0; i < 5; i++) {
    console.log(i);
}

/*
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1.  Questa linea di codice é un ciclo che itera un numero fino a 5;
2.  C'é un errore di sintassi e non di logica, specificatamente in i > 5, perché il ciclo non sará mai vera perché la i é inizializzata a i = 0. Dunque la logica corretta sarebbe i < 5
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

// Correzione
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

/*
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1.  Questo codice é una funzione con all'interno una istruzione condizionale. La condizione mi controlla se il numero é un multiplo di 2 che mi dará resto 0, di conseguenza se questo é effettivamente un numero multiplo di 2 allora mi sommerá +5. Se no mi ritorna il numero senza nessuna variazione.
2.  In questo codice c'é un errore di sintassi e non logico, perché con un solo uguale serve per assegnare un valore ad una variabile (e.s const = 0); invece il modulo per far sí che dia resto 0 bisogna dare piú segni di uguaglianza, quindi "==" o "===". Questo segno da un confronto tra valori
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

// Correzione
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
loopToFive()
/*
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. Questo codice come l'esercizio 1 é un ciclo for che itera un numero fino a 5;
2. Qua invece c'é un errore di sintassi e non logica, perché al posto della virgola "," dopo i = 0 e dopo i < 5, bisogna mettere un punto e virgola ";"
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) { // Un punto e virgola in piú; {Errore di sintassi} // numbers.lenght non deve avere - 1 perché se no non restituirebbe i numeri pari; {Errore di logica}
        if (numbers % 2 = 0); { // "=" sintassi sbagliato servono due o tre uguali ---> "==="; {Errore di sintassi} //numbers é sbagliato perché non dobbiamo prendere il contenuto dell'array e non il singolo numero {Errore di logica}
            evenNumbers.push(i); // É sbagliata perché mi ritornerebbero i numeri dispari e non uguali. {Errore di logica}
            console.log(i);
        }
        return evenNumbers; // Il return é nella posizione sbagliata perché non dovrebbe essere all'interno della condizione, ma dovrebbe essere fuori ma sempre all'interno delle funzione
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// Correzione
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
            console.log(evenNumbers);
        }
    }
    return evenNumbers;
}

displayEvenNumbers();
/*
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. Questo codice é una funzione con all'interno un'istruzione condizionale
2. In questo codice a differenza degli altri ha diversi errori di sintassi e logica;
3. 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/