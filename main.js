const wordGen = () => {
    const wordS = ['flyer', 'flier', 'fliers', 'flyers', 'flying', 'flyings', 'flyer\'s', 'flier\'s', 'flyers\'s', 'fliers\'s'];
    const word = Math.floor(Math.random() * wordS.length);
    return wordS[word]
}
console.log(wordGen());
// This function generates a random word from the predefined list and logs it to the console.
// The words include variations of "flyer" and "flier" in different forms.