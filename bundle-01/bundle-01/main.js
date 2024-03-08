/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

// Correzione
for (let i = 0; i < 5; i++) {
    console.log(i);
}

/*
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1.  Questa linea di codice é un ciclo che itera un numero fino a 5;
2.  C'é un errore di logica e non di sintassi, specificatamente in i > 5, perché il ciclo non sará mai vera perché la i é inizializzata a i = 0. Dunque la logica corretta sarebbe i < 5
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

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
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]