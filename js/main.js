// Snack 1
/*Crea un array composto da 10 brand famosi (Sony, Gucci, Apple, Samsung, Dolce&Gabbana). 
- Partendo da questo array creare un nuovo array dove tutti i brand dovranno essere "normalizzati" (le lettere maiuscole saranno convertite in minuscolo quindi Gucci diventerà gucci) e aggiungere, sempre in questo contesto di "clonazione", una nuova proprietà denominata "foundationYear". Quest'ultima proprietà conterrà l'anno (mettete un valore voi, è necessario inserire valore reale) in cui l'azienda è stata fondata. */

// const brands = [
//     {
//         name: 'Sony',
//     },
//     {
//         name: 'Gucci',
//     },
//     {
//         name: 'Apple',
//     },
//     {
//         name: 'Samsung',
//     },
//     {
//         name: 'Dolce&Gabbana',
//     },
//     {
//         name: 'Prada',
//     },
//     {
//         name: 'Dior',
//     },
//     {
//         name: 'Louis Vuitton',
//     },
//     {
//         name: 'Chanel',
//     },
//     {
//         name: 'Versace',
//     }
// ];

// console.log(brands);

// // MAP
// const newArray = brands.map((obj)=> {
    
//     let newobj = {
//         name: obj.name.toLowerCase(),
//         foundationYear: '',
//     }

//     return newobj;

// });

// console.log(newArray);




// SNACK 2 
// Crea un array composto da 10 automobili. 
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi in 3 array separati. Inserire nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo e ultimo il resto delle auto. 
// Infine stampa separatamente i 3 array.

const auto = [
    {
        marca: '',
        modello: '',
        alimentazione: 'benzina',
    },
    {
        marca: '',
        modello: '',
        alimentazione: 'diesel',
    },
    {
        marca: '',
        modello: '',
        alimentazione: 'gpl',
    },
    {
        marca: '',
        modello: '',
        alimentazione: 'elettrico',
    },
    {
        marca: '',
        modello: '',
        alimentazione: 'metano',
    },
    {
        marca: '',
        modello: '',
        alimentazione: 'benzina',
    },
    {
        marca: '',
        modello: '',
        alimentazione: 'diesel',
    },
    {
        marca: '',
        modello: '',
        alimentazione: 'gpl',
    },
    {
        marca: '',
        modello: '',
        alimentazione: 'metano',
    },
    {
        marca: '',
        modello: '',
        alimentazione: 'elettrico',
    },
];

console.log(auto);

const autoBenzina = auto.filter((element) => {
   return element.alimentazione === 'benzina';   
});

const autoDiesel = auto.filter((element) => {
    return element.alimentazione === 'diesel';   
});

const autoRest = auto.filter((element) => {
    return element.alimentazione !== 'benzina' && element.alimentazione !== 'diesel';   
});

console.log(autoBenzina);
console.log(autoDiesel);
console.log(autoRest);



//SNACK 3
// Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe.
// Crea un nuovo array con la lista dei mammiferi.*/

const animals = [
    { 
        nome: 'leone', 
        famiglia: 'felidi', 
        classe: 'mammiferi',
    },

    { 
        nome: 'cane', 
        famiglia: 'canidi', 
        classe: 'mammiferi',
    },

    { 
        nome: 'gallina', 
        famiglia: 'fasianidi', 
        classe: 'uccelli',
    },

];

const mammiferi = animals.filter((obj) =>{
    return obj.classe === 'mammiferi';
});

console.log(mammiferi);




// SNACK 4
// Crea un array di 8 oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un'età.
// Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
// 'Mario Rossi può guidare',
// 'Luigi Verdi non può guidare',
// 'Silvia Neri può guidare',


const persone = [
    { 
        nome: 'marco', 
        cognome: 'rossi', 
        eta: 17,
    },

    { 
        nome: 'simone', 
        cognome: 'verdi', 
        eta: 18,
    },

    { 
        nome: 'luca', 
        cognome: 'gialli', 
        eta: 26,
    },

];

console.log(persone);


// const newArray = persone.map((obj) =>{

//     if (obj.eta >= 18){
//        return ` ${obj.nome}  ${obj.cognome}  può guidare`
//     } else {
//        return ` ${obj.nome}  ${obj.cognome}  non può guidare`
//     }

     
// });

const filteredArray = persone.map(obj =>  `${obj.nome} ${obj.cognome}${obj.eta >= 18 ? '': ' non'} può guidare`)

console.log(filteredArray);



// SNACK 5
// Crea un array di 8 oggetti che rappresenti i pc in vendita nel nostro negozio: ogni pc ha un nome, una marca, un booleano 
// che indica se esce con Windows come OS di fabbrica (hasWindows: true oppure hasWindows: false) ed il prezzo e prezzo scontato 
// Creiamo un nuovo array che indichi i pc che hanno Windows e di questi andiamo a tirar fuori la differenza tra prezzo originale e scontato.


const allPc = [
    {
        nome: "abc",
        marca: "apple",
        hasWindows: true,
        prezzo: 1000,
        prezzoScontato: 800,
    },

    {
        nome: "abc",
        marca: "apple",
        hasWindows: false,
        prezzo: 1000,
        prezzoScontato: 700,
    },

    {
        nome: "abc",
        marca: "apple",
        hasWindows: true,
        prezzo: 2000,
        prezzoScontato: 1200,
    },

    {
        nome: "abc",
        marca: "apple",
        hasWindows: false,
        prezzo: 1000,
        prezzoScontato: 800,
    },

    {
        nome: "abc",
        marca: "apple",
        hasWindows: true,
        prezzo: 1000,
        prezzoScontato: 800,
    },

    {
        nome: "abc",
        marca: "apple",
        hasWindows: false,
        prezzo: 1000,
        prezzoScontato: 500,
    },
];

// FOR EACH
const windowsPc =[];

allPc.forEach((obj) => {

    if (obj.hasWindows === true){
        windowsPc.push( {
           ...obj,
           sconto: obj.prezzo - obj.prezzoScontato,
        })
    }
});


// MAP
// const windowsPc = allPc.map((obj) => {

//         if (obj.hasWindows === true){
//         return {
//            ...obj,
//            sconto: obj.prezzo - obj.prezzoScontato,
//         }
//     }
    
// });
//


// MAP E FILTER CONCATENATI
// const windowsPc = allPc.filter( obj => obj.hasWindows).map( obj => {
//     return {
//         ...obj,
//         sconto: obj.prezzo - obj.prezzoScontato,
//     }
// });

console.log(windowsPc);







