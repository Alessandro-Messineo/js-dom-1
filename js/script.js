// Consegna

// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.

// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

// BONUS

// Facciamo accendi e spegni:

// Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
// Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
// E così via...


// prende gli id degli elementi e li salva in delle variabili
const lampadina = document.getElementById("white_lamp");
const btn = document.getElementById("btn");

// Stato iniziale: spenta
let accesa = false;

// evento click del bottone
btn.addEventListener('click', () => {
    // condizione per vedere se la lamapina è on o off
    if (accesa) {
        // cambia il file dell'immagine
        lampadina.setAttribute("src", "img/white_lamp.png");
        // cambia la scritta dentro il bottone
        btn.textContent = "Accendi";
        accesa = false;
    } else {
        // cambia il file dell'immagine
        lampadina.setAttribute("src", "img/yellow_lamp.png");
        // cambia la scritta dentro il bottone
        btn.textContent = "Spegni";
        accesa = true;
    }
});
