const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only way to do great work is to love what you do. - Steve Jobs",]


const usedIndexes = new Set()
const quoteElement = document.getElementById("quote") 

function generateQuote(){
    if (usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }
    while (true){
        const randomIdx = Math.floor(Math.random()* quotes.length)
        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]

        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx) 
        break

    }
     
    


}