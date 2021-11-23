document.querySelector("button").addEventListener("click", totales)
const inkomstList = []; // deklarareras tom så användarens value kan pushas in
const utgiftList = []; // deklarareras tom så användarens value kan pushas in




function totales(e) {
    e.preventDefault(); //preventar default

    let totalesUtgift = 0; // deklarera totalesUtfgift som noll
    let totalesInkomst = 0; // deklarera totalesInkomst som noll

    //läser in från select taggen i html
    const select = document.querySelector("select");

    //läser in användarens data från text fältet
    const text = document.querySelector(".text").value;

    //läser in användaren data från belopp fältet
    const belopp = document.querySelector(".belopp").value;

    //om användarens value är samma som + så kommer koden att pusha in de value från text + belopp i listan: inkomstList
    if (select.value == "+") { 
        document.querySelector(".inkomst-container").innerHTML += `<li class="inkomstList">${text} ${belopp}</li>`;
        inkomstList.push(belopp);
    }
    //om användarens value är samma som - så kommer koden att pusha in de value från text + belopp i listan: utgiftList
    else if (select.value == "-") {
        document.querySelector(".utgift-container").innerHTML += `<li class="utgiftList">${text} ${belopp}</li>`;
        utgiftList.push(belopp);
    }
    //om dom inte väljer nån i select rullmenyn så kommer denna alert att visas
    else if (select.value == "choose") {
        alert("ALERT!!! Du kan inte lämna fältet tomt!")
    }

    //map funktion för att mapa igenom listan och parsefloat gör så att användaren inte kan skriva in ett decimaltal
    inkomstList.map((e) => {
        console.log(parseFloat(e))
        totalesInkomst += parseFloat(e) //+= så den kan plussas ihop och inte skrivas öven
    }) 
    //map funktion för att mapa igenom listan och parsefloat gör så att användaren inte kan skriva in ett decimaltal
    utgiftList.map((e) => {
        totalesUtgift += parseFloat(e) //+= så den kan plussas ihop och inte skrivas öven
        console.log(totalesUtgift) 
    })

    document.querySelector(".vinst").textContent = totalesInkomst - totalesUtgift; // går in i document och hämtar innehållet i vinst sen räknar den inkomstSum minus totalesUtgift = TEXTCONTENT
    
    const vinst = totalesInkomst-totalesUtgift
    if (inkomstList.length > 0) { // om inkomstlistans längd är större än 0 så ska "inkomst kolumnen" visa vit bakgrund men grön border
        document.querySelector(".inkomst-container").style.backgroundColor = "white";
        document.querySelector(".inkomst-container").style.border= "2px solid green";
    }
    if (utgiftList.length > 0) { // om utgiftlistans längd är större än 0 så ska "utgift kolumnen" visa vit bakgrund men röd border
        document.querySelector(".utgift-container").style.backgroundColor = "white";
        document.querySelector(".utgift-container").style.border= "2px solid red";
    }

    if (vinst >= 0) { // om vinst är större eller lika med noll så ska den visa vit bakgrund med grön text
        document.querySelector(".vinst").style.backgroundColor = "white";
        document.querySelector(".vinst").style.color = "green";
    }
    if (vinst < 0) { // om vinst är mindre än noll så ska den visa vit bakgrund med röd text
        document.querySelector(".vinst").style.backgroundColor = "white";
        document.querySelector(".vinst").style.color = "red";
    }

}

