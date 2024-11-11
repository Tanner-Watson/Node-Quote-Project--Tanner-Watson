const axios = require('axios');

// array of local quotes
const localQuotes = [
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "No matter how qualified or deserving we are, we will never reach a better life until we can imagine it for ourselves and allow ourselves to have it.", author: "Richard Bach" },
    { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" }
];


function getQuote() {
    axios.get("https://zenquotes.io/api/random")
        .then(function (response) {
            var quote = response.data[0];

            console.log(`Here's a motivational quote for you:`);
            console.log(`"${quote.q}" - ${quote.a}`);

        }) // end of axios .then block

        .catch(function (error) {
            console.error('Could not fetcha  quote. Try again later.', error.message);

            //pick random quote from local quote array
            //generate a random number between the array length, thats rounded to the nearest integer.
            const randomIndex = Math.floor(Math.random() * localQuotes.length);
            const randomQuote = localQuotes[randomIndex];
            console.log(`Here's a motivational quote for you:`);
            console.log(`"${randomQuote.quote}" - ${randomQuote.author}`);
        }); // end of axios 
}

getQuote();
