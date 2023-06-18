document.addEventListener('DOMContentLoaded', function() {
    // Auftrag-Dropdown-Element
    var auftragDropdown = document.querySelector('#auftrag-section select');
    // Textfelder
    var auftragTextfeld = document.querySelector('#auftrag-textfeld');
    var materialTextfeld = document.querySelector('#material-textfeld');
    var massnahmeTextfeld = document.querySelector('#massnahme-textfeld');
    var monteurTextfeld = document.querySelector('#monteur-textfeld');
  
    // Event-Listener für Dropdown-Änderungen
    auftragDropdown.addEventListener('change', function() {
      var selectedOption = auftragDropdown.value;
  
      // Überprüfen der ausgewählten Option
      if (selectedOption === 'reperatur-absperrventil') {
        auftragTextfeld.value = 'Reparatur Absperrventil';
        materialTextfeld.value = 'Absperrventil 1 Stk';
        massnahmeTextfeld.value =
          'Strang Abgesperrt, Strang entleert, Absperrventil demontiert, neues Absperrventil montiert';
        monteurTextfeld.value = 'Max Mustermann';
      } else if (selectedOption === 'austausch-waschbecken') {
        auftragTextfeld.value = 'Austausch Waschbecken';
        materialTextfeld.value = 'Waschbecken, Armatur, Geruchsverschluss';
        massnahmeTextfeld.value =
          'Demontage altes Waschbecken, Montage neues Waschbecken, Anschlussarbeiten';
        monteurTextfeld.value = 'Max Mustermann';
      } else {
        // Wenn keine Option ausgewählt ist, Textfelder leeren
        auftragTextfeld.value = '';
        materialTextfeld.value = '';
        massnahmeTextfeld.value = '';
        monteurTextfeld.value = '';
      }
    });
  });
  