"use strict";

const quotes = [
  "Today is your opportunity to build the tomorrow you want.",
  "Do the best yu can until you know better then when you know better do better.",
  "sometimes we are tested not to show our weaknesses, But to discover our strengths.",
  "Work hard in silence, let your success be your noise.",
  "The best way to predict the future is to define it.",
  "Life offers you so many doors, it is up to you which one has to be opened and which one has to be closed.",
  "Beauty is hidden in everthing , just leanr how to observe it.",
  "Don't be pushed around by the fears in your mind, Be led by the dreams in your heart.",
  "True friend are never apart, may be in distance but not in heart.",
  "Time and good friends are two things, that become more valuable the older you get.",
  "Success is not final; failure is not fatal: It is the courage to continue that counts.",
  "Success is not just about making money, it's about making a difference.",
  "You are never too old to set another goal or to dream a new dream.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Your time is limited, don't waste it living someone else's life.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "In the middle of every difficulty lies opportunity.",
  "A friend is someone who knows all about you and still loves you.",
  "Friendship is the inexpressible comfort of feeling safe with a person, having neither to weigh thoughts nor measure words.",
  "A true friend is somebody who can make us feel better no matter how bad things may be.",
  "Education is the foundation upon which we build our future.",
  "The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.",
  "The beautiful thing about learning is that no one can take it away from you.",
  "An investment in knowledge pays the best interest.",
  "The harder the battle, the sweeter the victory.",
  "The only way to achieve the impossible is to believe it is possible.",
  "Obstacles are those frightful things you see when you take your eyes off your goal.",
  "A journey of a thousand miles begins with a single step.",
  "Success usually comes to those who are too busy to be looking for it.",
  "A real friend is one who walks in when the rest of the world walks out.",
  "The only person you are destined to become is the person you decide to be.",
  "Education is the most powerful weapon which you can use to change the world.",
  "There is no elevator to success. You have to take the stairs.",
  "Success is the result of perfection, hard work, learning from failure, loyalty, and persistence.",
  "The only thing that overcomes hard luck is hard work.",
  "Opportunities are usually disguised as hard work, so most people don't recognize them.",
  "There is no shortcut to achievement. Life requires thorough preparation—veneer isn't worth anything.",
  "Hard work without talent is a shame, but talent without hard work is a tragedy.",
  "The three great essentials to achieve anything worthwhile are, first, hard work; second, stick-to-itiveness; third, common sense.",
  "Life is 10% what happens to us and 90% how we react to it.",
];
const colors = ["#e7c0f8", "#f9cea4", "#bebef2", "#efa5a5", "#b1f1b1"];

function displayRandomQuotes() {
  const eachQuote = document.getElementById("quote");
  eachQuote.innerHTML = "";
 
  const randomQuoteIndexes = getRandomIndexes(quotes.length, 5);
  for (let i = 0; i < randomQuoteIndexes.length; i++) {
    const randomQuoteIndex = randomQuoteIndexes[i];
    const randomColorIndex = i % colors.length;

    const quote = quotes[randomQuoteIndex];
    const color = colors[randomColorIndex];

    const quoteElement = document.createElement("p");
    quoteElement.textContent = quote;
    quoteElement.style.backgroundColor = color;
    eachQuote.appendChild(quoteElement);
  }
}

function getRandomIndexes(maximum, count) {
  const indexes = [];
  while (indexes.length < count) {
    const randomIndex = Math.floor(Math.random() * maximum);
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }
  return indexes;
}

// Initially displaying 5 random quotes
displayRandomQuotes();

const regenerateBtn = document.getElementById("generateBtn");
regenerateBtn.addEventListener("click", displayRandomQuotes);
