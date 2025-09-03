//Create EventListener for on page load 
window.addEventListener('load', getQuote);

//Create EventListener for button
document.getElementById("spin").addEventListener("click", getQuote);

//Selecting the ID's in the HTML in order to populate data
const quoteAuthor = document.getElementById("author");
const quoteText = document.getElementById("quote");

//Endpoint Definition
const APIURL = "https://dummyjson.com/quotes";

function getQuote() {
    fetch(APIURL)
        .then(response => response.json())
        .then(function (data) {
            //Returns message to console that connection to the API is ok, then populates the Author and text from quote
            console.log('Quote recieved ok from API');
            quoteAuthor.innerText = data.author;
            quoteText.innerText = data.quote;
        })
        .catch((error) => {
            //returns error to console with what the error is and then populates with default quote and replaces copyright for a failure notice to the UI.
            console.error('Error:', error);
            quoteAuthor.innerText = 'Marcus Brigstocke';
            quoteText.innerText = "Computer games don't affect kids; I mean if Pac-Man affected us as kids, we'd all be running around in darkened rooms, munching magic pills and listening to repetitive electronic music.";
            apiFailed.innerText = "Sorry... API Connection Failed - Only have the 1 default quote available for the moment!"
            copyright.innerText = ""
        });
}

