const quotes = [
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The best way to predict the future is to create it. - Peter Drucker",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The harder I work, the luckier I get. - Gary Player",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson"
]
// function to generate random quotes

function getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
}
// function to display quotes
function displayQuote() {
    const randomQuote = getRandomQuote();
    document.getElementById("quote").innerHTML = randomQuote;
}

document.getElementById("quote-button").addEventListener("click", displayQuote);
