function eintragen() {
    // Daten aus den Eingabefeldern lesen
    var datum = document.getElementById("datum").value;
    var projekt = document.getElementById("projekt").value;
    var stunden = document.getElementById("stunden").value;
    var beschreibung = document.getElementById("beschreibung").value;
  
    // Überprüfen, ob alle Felder ausgefüllt sind
    if (datum === "" || projekt === "" || stunden === "" || beschreibung === "") {
      alert("Bitte füllen Sie alle Felder aus.");
      return false;
    }
  
    // Neue Zeile für die Tabelle erstellen
    var table = document.getElementById("stundenzettel");
    var row = table.insertRow(-1);
  
    // Zellen für die Daten erstellen und befüllen
    var datumCell = row.insertCell(0);
    var projektCell = row.insertCell(1);
    var stundenCell = row.insertCell(2);
    var beschreibungCell = row.insertCell(3);
  
    datumCell.innerHTML = datum;
    projektCell.innerHTML = projekt;
    stundenCell.innerHTML = stunden;
    beschreibungCell.innerHTML = beschreibung;
  
    // Formular zurücksetzen
    document.getElementById("datum").value = "";
    document.getElementById("projekt").value = "";
    document.getElementById("stunden").value = "";
    document.getElementById("beschreibung").value = "";
  
    return false; // Verhindert das tatsächliche Absenden des Formulars
  }
  