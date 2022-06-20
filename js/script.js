console.log("JS OK")


/* 
1- Preparo una variabile per contenere il nome
2- Preparo una variabile per contenere il cognome
3- preparo una variabile per contenere il colore preferito
4- recupero variabile per la password
5- chiedo il nome
6- chiedo il cognome
7- chiedo il colore
8- risultato password



*/


// recupero password

const passGenerator = document.getElementById("password");
console.log(passGenerator);

// chiedo nome

const firstName = prompt("Qual è il tuo nome?");
console.log(firstName);

// chiedo cognome

const lastName = prompt("Qual è il tuo cognome?");
console.log(lastName);

// chiedo colore preferito

const favColor = prompt("Qual è il tuo colore preferito?");
console.log(favColor);

// calcolo password

const password = firstName + lastName + favColor + 21;
console.log(password);

// risultato password

passGenerator.innerText = `La tua password è: ${password}`;
