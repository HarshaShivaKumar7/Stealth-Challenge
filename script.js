function findLongestWord(sentence) {
    const words = sentence.match(/[a-zA-Z]+/g) || [];
    let longestWord = "";
    let maxVowels = 0;
  
    for (const word of words) {
      const vowelCount = (word.match(/[aeiou]/gi) || []).length;
  
      if (word.length > longestWord.length || (word.length === longestWord.length && vowelCount > maxVowels)) {
        longestWord = word;
        maxVowels = vowelCount;
      }
    }
  
    return longestWord;
  }
  
  const userInput = prompt("Please enter a sentence:");
  
  if (userInput) {
    const longestWordWithMostVowels = findLongestWord(userInput);
    console.log("Longest word with most vowels:", longestWordWithMostVowels || "No word found!!");
  } else {
    console.log("No input provided.");
  }
  