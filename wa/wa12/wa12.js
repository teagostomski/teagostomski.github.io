document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector("#js-new-quote");
    btn.addEventListener('click', getQuote);

    const answerBtn = document.querySelector("#js-tweet");
    answerBtn.addEventListener('click', getAnswer);

    const answerText = document.querySelector('#js-answer-text');

    const endpoint = "https://api.quotable.io/random";

    let answer = '';

    async function getQuote() {
        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            console.log(json);
            displayQuote(json.content);
            answer = json.author;
        } catch (err) {
            console.error("Error fetching quote:", err.message);
            alert('Failed to fetch new quote');
        }
    }

    function displayQuote(quote) {
        const quotetext = document.querySelector("#js-quote-text");
        quotetext.textContent = quote;
    }

    function getAnswer() {
        answerText.textContent = answer;
    }

    getQuote();
});