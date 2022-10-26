// Utility Logic

function isEmpty(testString) {
  return (testString.trim().length === 0);
}

// Business Logic

function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (isEmpty(word)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}


// UI Logic

function boldPassage(word, text) {
  if ((text.trim().length === 0) || (word.trim().length === 0)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

// test space
  if (word.includes(element)) {
    element.splice(word.length);  //separate piece of element that matches word

  }

  String.replaceAll("target", "<strong> target </strong>");



// test space above

function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});

curseWord = "zoinks"

function omitCurseWords (curseWord, text) {
  let textArray = text.split(' ');
  let newTextArray = textArray.filter(function(curseWord, textArray) {
    !textArray.includes(curseWord)
  }, 0, textArray);
  return newTextArray;
};

let curseWord = "zoinks";
let text = ["zoinks"];
omitCurseWords(curseWord, text);

// function filterCurseWords(curseWord, textArray) {
//   if (!textArray.includes(curseWord)) {
//   return textArray;
//   }
// }

// const curseWord = "zoinks";
// const text = "like zoinks scoob";
// omitCurseWords(curseWord, text);



const string = "like zoinks scoob"
const curseWord = "zoinks"

const textArray = string.split(' ');
const newTextArray = textArray.filter(function(element) {
    return element != curseWord;
  });
console.log(newTextArray);


// Aitana's version
const string = "like zoinks scoob"
const curseWord = "zoinks"

function filterString(string, curseWord) {
  const textArray = string.split(' ');
  const filteredArray = textArray.filter(function(element) {
    return element != curseWord;
  });
  const filteredString = filteredArray.join(" ");
  console.log(filteredString);

// Anton's version
const offensiveArray = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];

function removeOffensiveWords(wordArray, text) {
  const textArray = text.split(" ");
  const resultArray = textArray.filter(function(word) { 
    !wordArray.includes(word);
  });
  return resultArray.join(" ");
}


// let curseWord = "zoinks";
// let text = ["zoinks"];
// omitCurseWords(curseWord, text);

// function filterCurseWords(curseWord, textArray) {
//   if (!textArray.includes(curseWord)) {
//   return textArray;
//   }
// }

// const curseWord = "zoinks";
// const text = "like zoinks scoob";
// omitCurseWords(curseWord, text);


