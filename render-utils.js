export function renderItem(item) {
    const div = document.createElement('div');

    if (item === 'mushroom') {
        div.classList.add('mushroom');
    } else if (item === 'crunch-bar') {
        div.classList.add('crunch-bar');
    }

    return div;
}

export function renderFriend(friend) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');

    div.classList.add('friend');
    nameEl.classList.add('name');
    emojiEl.classList.add('emoji');

    nameEl.textContent = friend.name;

    if (friend.satisfaction === 1) {
        emojiEl.textContent = '😒';
    }

    if (friend.satisfaction === 2) {
        emojiEl.textContent = '😐';
    }

    if (friend.satisfaction === 3) {
        emojiEl.textContent = '😀';
    }

    div.append(nameEl, emojiEl);
    return div;
}
