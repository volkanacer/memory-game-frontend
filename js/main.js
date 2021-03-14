let clickedCard = null;
let preventClick = false;
let combosFound = 0;

//kaarten opnieuw indelen (werkt niet met images..)

const images = [
    'sakura1',
    'sakura2',
    'sakura3',
    'sakura4',
    'sakura5',
    'sakura6',
    'sakura7',
    'sakura8',
]

const cards = [...document.querySelectorAll('.card')];
for (let image  of images) {
    const cardAINdex = parseInt(Math.random() * cards.length);
    const cardA = [cardAIndex];
    cards.splice(cardAIndex, 1);
    cardA.className += ` ${image}`;
    cardA.setAttribute('data-image', image);

    const cardBIndex = parseInt(Math.random() * cards.length);
    const cardB = [cardBIndex];
    cards.splice(cardBIndex, 1);
    cardB.className += ` ${image}`;
    cardB.setAttribute('data-image', image);
}

function onCardClicked(e) {
    const target = e.currentTarget;

    if (
        preventClick ||
        target === clickedCard ||
        target.className.includes('done')
    ) {
        return;
    }

    target.className = target.className
    .replace('image-hidden', '')
    .trim();
    target.className += ' done';

    if (!clickedCard) {
    // als er op de kaart is geklikt, hou het open, vertoon de afbeelding.
        clickedCard = target;
    }   else if (clickedCard) {
        // als er op de kaart is geklikt, controleer of de nieuwe kaart overeenkomt met de oude kaart.
        if (
            clickedCard.getAttribute('data-image') !== 
            target.getAttribute('data-image')
        ) {
            preventClick = true;
            setTimeout(() => {
            clickedCard.className = 
                clickedCard.className.replace('done', '').trim() + 
                'image-hidden';
            target.className =
                target.className.replace('done', '').trim() +
                'image-hidden';
            clickedCard = null;
            preventClick = false;
            }, 500);
        } else {
            combosFound++;
            clickedCard = null;
            if (combosFound === 8) {
                alert('YOU WIN!');
            }
        }
    }
}
