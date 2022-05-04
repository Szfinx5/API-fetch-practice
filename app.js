async function getQuote(){
    let response = await fetch("https://api.kanye.rest/");
    let data = await response.json();
    h1Element.innerText = data.quote;
    
    if (!quoteHistory.includes(data.quote)){
        quoteHistory.push(data.quote);
    }
    
    if (quoteHistory.length > 1){
        addToHistory(quoteHistory[quoteHistory.length-2])
    }
}

function addToHistory (string){
    console.log(string);
    let newLi = document.createElement("li");
    newLi.innerText = string;
    historyOl.appendChild(newLi);
}

let quoteHistory = []
let h1Element = document.querySelector("h1");
let newQuoteButton = document.querySelector("#new-quote-button");
let historyOl = document.querySelector("#kanye-quote-history");

newQuoteButton.addEventListener("click", getQuote);
