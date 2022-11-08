// import functions and grab DOM elements
import { renderItem, renderFriend } from './render-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const tableEl = document.querySelector('.table-items');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

const tableItems = ['mushroom', 'mushroom', 'mushroom'];

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2,
    },
    {
        name: 'Sarah',
        satisfaction: 3,
    },
    {
        name: 'Missael',
        satisfaction: 1,
    },
    {
        name: 'Soraya',
        satisfaction: 2,
    },
];

addMushroomButton.addEventListener('click', () => {
    if (Math.random() > 0.5) {
        alert('You found a mushroom!');
        tableItems.push('mushroom');
        displayTableItems();
    } else if (Math.random() > 0.7) {
        alert('You found a....crunch bar?');
        tableItems.push('crunch-bar');
        displayTableItems();
    } else {
        alert('no luck!');
    }
});

addFriendButton.addEventListener('click', () => {
    // get the name from the input
    const friendName = friendInputEl.value;
    // create a new friend object
    const friendObj = { name: friendName, satisfaction: 1 };
    // push it into the friends state array, passed in as an argument
    friendData.push(friendObj);
    // reset the input
    friendInputEl.value = '';
    // display all the friends (use a function here)
    displayFriends();
});

function displayFriends() {
    // clear out the friends in DOM
    friendsEl.textContent = '';
    // for each friend in state . . .
    for (let friend of friendData) {
        // use renderFriend to make a friendEl
        const friendEl = renderFriend(friend);
        // this is a clickable list, so . . .
        //     add an event listener to each friend
        //         and if the friend's satisfaction level is below 3 and you have mushrooms left
        //             increment the friends satisfaction and decrement your mushrooms
        //             then display your friends and mushrooms with the updated state
        friendEl.addEventListener('click', () => {
            if (friend.satisfaction < 3 && tableItems[tableItems.length - 1] === 'mushroom') {
                friend.satisfaction++;
                tableItems.pop();
                displayTableItems();
                displayFriends();
            } else if (
                friend.satisfaction < 3 &&
                tableItems[tableItems.length - 1] === 'crunch-bar'
            ) {
                friend.satisfaction = 3;
                tableItems.pop();
                displayTableItems();
                displayFriends();
            }
        });
        // append the friendEl to the friends list in DOM
        friendsEl.append(friendEl);
    }
}

function displayTableItems() {
    // clear out the mushroom div
    tableEl.textContent = '';
    for (let i = 0; i < tableItems.length; i++) {
        // for each mushroom in your mushroom state, render and append a mushroom
        const item = renderItem(tableItems[i]);
        tableEl.append(item);
    }
}

displayFriends();
displayTableItems();
