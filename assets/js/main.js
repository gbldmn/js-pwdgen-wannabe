// esercizio info

// chiedere all'utente il suo nome
// chedere all'utente il suo cognome
// chiedere all'utente il suo colore prefe
// scrivere sulla pagina nomecognomecolorepreferito21




            //    DOMANDE UTENTE

let nome = prompt ("come ti chiami?");
console.log(nome);

let cognome = prompt ("qual'è il tuo cognome");
console.log(cognome);

let colore = prompt ("qual'è il tuo colore preferito?");
console.log(colore);


            //  IMPOSTAZIONE PASSWORD


let password = nome + cognome + colore + '21';
console.log (password);


           //  SCRIVERE SU LAYOUT

document.getElementById("password").innerHTML = password;




