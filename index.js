const axios = require('axios');

function getQuote() {
    axios.get("https://zenquotes.io/api/random")
        .then(function (response) {
            var quote = response.data[0];

            console.log(`Here's a motivational quote for you:`);
            console.log(`"${quote.q}" - ${quote.a}`);

        }) // end of axios .then block

        .catch(function (error) {
            console.error('Could not fetcha  quote. Try again later.', error.message);
        }); // end of axios 
}

getQuote();
