// Define API Endpoint Constant
const api = "https://api.quotable.io/random";

// Access DOM Elements
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const btnElement = document.getElementById("btn");

// Define a Function to Get Quotes
function getQuote() {
    fetch(api)
    .then(response => response.json())
    .then(data => {
        quoteElement.textContent = data.content;
        authorElement.textContent = "- " + data.author;
    })
    .catch(error => console.log("Error fetching quote:", error));
}

// Add an Event Listener to the Button
btnElement.addEventListener("click", getQuote);



