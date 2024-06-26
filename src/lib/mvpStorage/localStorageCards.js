
// Starts user with complete deck of array methods to study
// if cards every change, but LS already has cards, this function won't update LS
//
export function initializeArrayCards() {
    if (!localStorage.getItem('cards')) {
        const cards = [
            { id: 1, name: 'at', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Returns the element at the specified index in the array.' },
            { id: 2, name: 'concat', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.' },
            { id: 3, name: 'copyWithin', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Copies array elements within the array, to and from specified positions.' },
            { id: 4, name: 'entries', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Returns a new Array Iterator object that contains the key/value pairs for each index in the array.' },
            { id: 5, name: 'every', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Tests whether all elements in the array pass the test implemented by the provided function.' },
            { id: 6, name: 'fill', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Fills all the elements of an array from a start index to an end index with a static value.' },
            { id: 7, name: 'find', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Returns the value of the first element in the array that satisfies the provided testing function.' },
            { id: 8, name: 'findIndex', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Returns the index of the first element in the array that satisfies the provided testing function.' },
            { id: 9, name: 'findLast', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Returns the last element in the array that satisfies the provided testing function.' },
            { id: 10, name: 'findLastIndex', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Returns the last index of the element in the array that satisfies the provided testing function.' },
            { id: 11, name: 'filter', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Creates a new array with all elements that pass the test implemented by the provided function.' },
            { id: 12, name: 'flat', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.' },
            { id: 13, name: 'flatMap', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'First maps each element using a mapping function, then flattens the result into a new array.' },
            { id: 14, name: 'forEach', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Executes a provided function once for each array element.' },
            { id: 15, name: 'includes', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Determines whether an array includes a certain value among its entries, returning true or false as appropriate.' },
            { id: 16, name: 'indexOf', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Returns the first index at which a given element can be found in the array, or -1 if it is not present.' },
            { id: 17, name: 'join', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Joins all elements of an array into a string.' },
            { id: 18, name: 'keys', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Returns a new Array Iterator object that contains the keys for each index in the array.' },
            { id: 19, name: 'lastIndexOf', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Returns the last index at which a given element can be found in the array, or -1 if it is not present.' },
            { id: 20, name: 'map', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Creates a new array with the results of calling a provided function on every element in the calling array.' },
            { id: 21, name: 'pop', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Removes the last element from an array and returns that element. This method changes the length of the array.' },
            { id: 22, name: 'push', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Adds one or more elements to the end of an array and returns the new length of the array.' },
            { id: 23, name: 'reduce', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.' },
            { id: 24, name: 'reduceRight', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Executes a reducer function (that you provide) on each element of the array, resulting in a single output value. The only difference between reduce() and reduceRight() is that reduce() goes from left to right and reduceRight() goes from right to left.' },
            { id: 25, name: 'reverse', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Reverses the order of the elements in an array in place — the first becomes the last, and the last becomes the first.' },
            { id: 26, name: 'shift', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Removes the first element from an array and returns that removed element. This method changes the length of the array.' },
            { id: 27, name: 'slice', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.' },
            { id: 28, name: 'some', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Tests whether at least one element in the array passes the test implemented by the provided function.' },
            { id: 29, name: 'sort', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Sorts the elements of an array in place and returns the sorted array.' },
            { id: 30, name: 'splice', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Changes the content of an array by removing, replacing, or adding elements, and returns an array containing the removed elements, if any.' },
            { id: 31, name: 'toString', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Returns a string representing the specified array and its elements.' },
            { id: 32, name: 'toLocaleString', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Returns a localized string representing the array and its elements.' },
            { id: 33, name: 'unshift', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Adds one or more elements to the beginning of an array and returns the new length of the array.' },
            { id: 34, name: 'values', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Returns a new Array Iterator object that contains the values for each index in the array.' },
            { id: 35, name: 'Array.from', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Creates a new Array instance from an array-like or iterable object.' },
            { id: 36, name: 'Array.isArray', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Determines whether the passed value is an Array.' },
            { id: 37, name: 'Array.of', lastReviewed: null, nextDue: new Date().toISOString(), interval: 1, easeFactor: 2.5, description: 'Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.' },
        ];
        localStorage.setItem('cards', JSON.stringify(cards));
    }
}

function getTodayDate() {
    return new Date().toISOString().split('T')[0];
}

function getCards() {
    return JSON.parse(localStorage.getItem('cards') || '[]'); // [] prevents a falsy value breaking code later
}

// cards not learnt/reviewed yet
function getNewCards(cards) {
    return cards.filter(card => !card.lastReviewed);
}

// Learning cards (been answered >= once) and due for review today
function getLearningCards(cards) {
    const today = getTodayDate();
    return cards.filter(card => card.lastReviewed && card.nextDue.split('T')[0] <= today && card.interval <= 1);
}

// Cards that were 'learnt' and now in review phase, and due for review today.
function getReviewCards(cards) {
    const today = getTodayDate();
    return cards.filter(card => card.lastReviewed && card.nextDue.split('T')[0] <= today && card.interval > 1);
}

// fetch cards for today and combine them. Prioritise New cards, then Learning, then Review.
export function getCardsForStudySession() {
    const cards = getCards(); // Fetch and parse once. Replace later with DB
    const newCards = getNewCards(cards);
    const learningCards = getLearningCards(cards);
    const reviewCards = getReviewCards(cards);
    const sessionCards = [...newCards, ...learningCards, ...reviewCards];
    return sessionCards;
}

// gets stats for cards due today, whether new, learning or to review (note it doesn't look at interval)
export function getDueCards() {
    const today = getTodayDate();
    const cards = getCards();
    return cards.filter(card => card.nextDue.split('T')[0] <= today);
}

// Interval: For "Again" and "Hard", interval is either reset or slightly increased.
//           For "Good" and "Easy", interval * ease factor, with "Easy" getting a larger multiplier.
// Ease:     adjusted slightly down for "Again" and "Hard" and up for "Easy". Affects how quickly intervals increase in the future.
// Date:     `lastReviewed` updated to current date. And `nextDue` calculated from new interval.
export function updateCard(cardId, score) {
    const cards = JSON.parse(localStorage.getItem('cards') || '[]');
    const card = cards.find(c => c.id === cardId);
    const currentDate = new Date();

    switch (score) {
        case 'Again':
            card.interval = 1; // Reset interval to 1 day
            card.easeFactor = Math.max(1.3, card.easeFactor - 0.2); // Decrease ease factor, minimum 1.3
            break;
        case 'Hard':
            card.interval = Math.max(1, card.interval * 1.2); // Increase interval slightly
            card.easeFactor = Math.max(1.3, card.easeFactor - 0.1); // Slightly decrease ease factor
            break;
        case 'Good':
            card.interval *= card.easeFactor; // Increase interval by ease factor
            break;
        case 'Easy':
            card.interval *= card.easeFactor * 1.3; // Significantly increase interval
            card.easeFactor += 0.1; // Increase ease factor
            break;
    }

    card.lastReviewed = currentDate.toISOString();
    card.nextDue = new Date(currentDate.getTime() + card.interval * 24 * 60 * 60 * 1000).toISOString();
    console.log({card})

    localStorage.setItem('cards', JSON.stringify(cards));
}

export function getNextCard() {
    const cards = JSON.parse(localStorage.getItem('cards'));
    const sortedCards = cards.filter(card => !card.lastReviewed || new Date(card.nextDue) <= new Date());
    return sortedCards.length > 0 ? sortedCards[0] : null;
}
