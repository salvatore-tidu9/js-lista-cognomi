var ElencoCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// console.log(ElencoCognomi);


var IlTuoCognome = prompt("Inserisci il tuo cognome");

if (isNaN(IlTuoCognome)) {

    alert("Il nominativo inserito è valido.");

} else {

    alert("Attenzione ! Inserire un nominativo valido.");

    document.getElementById("elenco_cognomi").style.display = 'none';
}


ElencoCognomi.push(IlTuoCognome);

// console.log(ElencoCognomi);


function compare(a, b) {

    minA = a.toLowerCase();

    minB = b.toLowerCase();

    if (minA < minB) { return -1; }

    else {

        if (minA > minB) { return 1; }

        else { return 0; }

    }
}

ElencoCognomi.sort(compare);

console.log(ElencoCognomi);


for (var i = 0; i < ElencoCognomi.length; i++) {

    console.log(ElencoCognomi[i]);

    document.getElementById("elenco_cognomi").innerHTML += "<li>" + ElencoCognomi[i] + "</li>";

}








