function zeigeErklaerung() {
    let satzInput = document.getElementById("satzInput").value;
    let satzglied = document.getElementById("satzglied").value;
    

    if (satzInput === "") {
      window.location.href = "write.html";
    }
    else 
    if (satzglied === "") {
        alert("Bitte wähle eine Satzart aus.");
    } else {
        document.getElementById("erklärung").innerHTML = "Der Satz '" + satzInput + "' ist ein " + satzglied + ".";
    }
}