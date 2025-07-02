const wordGen = () => {
    const wordS = ['flyer', 'flier', 'fliers', 'flyers', 'flying', 'flyings', 'flyer\'s', 'flier\'s', 'flyers\'s', 'fliers\'s'];
    const word = Math.floor(Math.random() * wordS.length);
    return wordS[word]
}
console.log(wordGen());
// This function generates a random word from the predefined list and logs it to the console.
// The words include variations of "flyer" and "flier" in different forms.
switch(this.wordS){
    case 'flyer':
        console.log('This is a flyer');
        break;
        case 'flier':
            console.log('This is a flier');
            break;
            case 'fliers':
                console.log('These are fliers');
                break;
                case 'flyers':
                    console.log('These are flyers');
                    break;
                    case 'flying':
                        console.log('This is flying');
                        break;
                        case 'flyings':
                            console.log('These are flyings');
                            break;
                            case 'flyer\'s':
                                console.log('This is a flyer\'s');
                                break;
                                case 'flier\'s':
                                    console.log('This is a flier\'s');
                                    break;
                                    case 'flyers\'s':
                                        console.log('These are flyers\'s');
                                        break;
                                        case 'fliers\'s':
                                            console.log('These are fliers\'s');
                                            break;
                                            default:
                                                console.log('Unknown word');
                                                break;
}