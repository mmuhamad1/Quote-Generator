/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/

var quotes = [
  {quote: 'I believe I can fly', source: 'R. Kelly'}, {quote: 'We will either find a way, or make one', source: 'Hannabil'},
{quote: 'Indeed, in the rememberance of Allah to hearts find rest', source: 'Allah', citation: 'Quran', year: '630 CE'}
]



/***
 * `getRandomQuote` function
***/

var getRandomQuote = function() {
  var index = Math.floor(Math.Random() * quotes.length)

  return quotes[index]
}

/***
 * `printQuote` function
***/

var printQuote = function() {

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);