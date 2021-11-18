
document.querySelector("button").addEventListener("click", countBudget)
const inkomstList= []; // deklarareras tom så användarens value kan pushas in
const utgiftList= []; // deklarareras tom så användarens value kan pushas in




function countBudget(e) {
    e.preventDefault();

    let costSum= 0;
    let incomeSum= 0;
    //läser in från select taggen i html
    const select = document.querySelector("select"); 

    //läser in användarens data från text fältet
    const text = document.querySelector(".text").value; 

    //läser in användaren data från belopp fältet
    const belopp = document.querySelector(".belopp").value; 

    if(select.value == "+"){
        document.querySelector(".inkomst-container").innerHTML +=`<li class="inkomstList">${text} ${belopp}</li>`;
        inkomstList.push(belopp);
        

    } else if(select.value== "-"){
        document.querySelector(".utgift-container").innerHTML +=`<li class="utgiftList">${text} ${belopp}</li>`;
        utgiftList.push(belopp);
    }

    
    else if(select.value == "choose"){
            alert ("ALERT! Du kan inte lämna fältet tomt!")
    }   
    
    inkomstList.map( (e)=>{
        console.log(parseFloat(e))
        incomeSum += parseFloat(e)
    })
    console.log(utgiftList)

    utgiftList.map( (e)=>{
        costSum += parseFloat(e)
        console.log(costSum)
        
    })

    document.querySelector(".vinst").textContent = incomeSum - costSum;
    console.log(".vinst");
}



