// Mobile-Media

const xMark = document.querySelector('#header-close');
const header = document.querySelector('header');
const togglerBtn = document.querySelector('#toggler-btn');



xMark.addEventListener('click', () => {
    header.style.display = 'none';
})

togglerBtn.addEventListener('click', () => {
    header.style.display = 'flex';
})


// cleaned dots

const dots = document.querySelectorAll('.dot');
const serviceCards = document.querySelectorAll('.service-card');
let currentDotIndex = 0;
const dotSwitchInterval = 2000; // Change this value to adjust the time interval between dot switches

function changeSelectedDot(selectedDotIndex) {
    const selectedDot = document.querySelector(`.dot${selectedDotIndex}`);
    const unselectedDots = [...dots].filter(dot => dot !== selectedDot);
    const selectedServiceCard = document.querySelector(`#service-card-${selectedDotIndex}`);
    const unselectedServiceCards = [...serviceCards].filter(card => card !== selectedServiceCard);

    selectedDot.style.backgroundColor = '#348888';
    unselectedDots.forEach(dot => dot.style.backgroundColor = '#D9D9D9');

    selectedServiceCard.style.display = 'flex';
    unselectedServiceCards.forEach(card => card.style.display = 'none');
}

function switchToNextDot() {
    const nextDotIndex = (currentDotIndex + 1) % dots.length;
    const dotsOrderWithoutSelected = [...dots].filter(dot => dot !== dots[nextDotIndex]).map(dot => parseInt(dot.classList[0].slice(-1)));
    changeSelectedDot(nextDotIndex + 1, ...dotsOrderWithoutSelected);
    currentDotIndex = nextDotIndex;
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const selectedDotIndex = index + 1;
        const dotsOrder = [2, 1, 3];
        const dotsOrderWithoutSelected = dotsOrder.filter(dotIndex => dotIndex !== selectedDotIndex);
        changeSelectedDot(selectedDotIndex, ...dotsOrderWithoutSelected);
        currentDotIndex = index;
});
});

setInterval(switchToNextDot, dotSwitchInterval);


// before cleanning the code

// slides dot control
// const dot1 = document.querySelector('.dot1');
// const dot2 = document.querySelector('.dot2');
// const dot3 = document.querySelector('.dot3');
// const dots = document.querySelectorAll('.dot');



// function dotChange(x, y, z){
//     const dot11 = document.querySelector('.dot'+x);
//     const dot22 = document.querySelector('.dot'+y);
//     const dot33 = document.querySelector('.dot'+z);
//     const servCard11 = document.querySelector('#service-card-'+x);
//     const servCard22 = document.querySelector('#service-card-'+y);
//     const servCard33 = document.querySelector('#service-card-'+z);
//     dot11.style.backgroundColor = '#348888';
//     dot22.style.backgroundColor = '#D9D9D9';
//     dot33.style.backgroundColor = '#D9D9D9';
//     servCard11.style.display = 'flex';
//     servCard22.style.display = 'none';
//     servCard33.style.display = 'none';
// }

// dot1.addEventListener('click', function(){
//     dotChange(1, 2, 3);
// })

// dot2.addEventListener('click', function(){
//     dotChange(2, 1, 3);
// })

// dot3.addEventListener('click', function(){
//     dotChange(3, 1, 2);
// })


// Chat icon
const chatIcon = document.querySelector('.chat-icon');
const chatDisplay = document.querySelector('.chat-display');
const chatX = document.querySelector('#chat-close');


chatIcon.addEventListener('click', function(){
    if(chatDisplay.style.display !== 'none'){
        chatDisplay.style.display = 'none';
    }else{
        chatDisplay.style.display = 'flex';
    }
})

chatX.addEventListener('click', function(){
    chatDisplay.style.display = 'none';
})


// distingush us section

// cleaned images slider with auto motion

const images = [
    document.querySelector('#img1'),
    document.querySelector('#img2'),
    document.querySelector('#img3'),
    document.querySelector('#img4'),
    document.querySelector('#img5')
];

const choiceCards = document.querySelectorAll('.choice-card');
let currentIndex = 0;
let timer;

function choiceCard(a, b, c, d, e) {
const cards = [
    document.querySelector('#card'+a),
    document.querySelector('#card'+b),
    document.querySelector('#card'+c),
    document.querySelector('#card'+d),
    document.querySelector('#card'+e)
];

cards[0].style.display = 'flex';
for(let i=1; i<cards.length; i++) {
    cards[i].style.display = 'none';
}
}

function handleImageHover(index, choices) {
images[index].addEventListener('mouseover', () => {
    choiceCard(...choices);
    clearInterval(timer);
});

images[index].addEventListener('mouseout', () => {
    timer = setInterval(changeImage, 2000);
});
}

function changeImage() {
currentIndex = (currentIndex + 1) % images.length;
const choices = [
    [1,2,3,4,5],
    [2,1,3,4,5],
    [3,2,1,4,5],
    [4,2,3,1,5],
    [5,2,3,4,1]
][currentIndex];
choiceCard(...choices);
}

handleImageHover(0, [1,2,3,4,5]);
handleImageHover(1, [2,1,3,4,5]);
handleImageHover(2, [3,2,1,4,5]);
handleImageHover(3, [4,2,3,1,5]);
handleImageHover(4, [5,2,3,4,1]);

timer = setInterval(changeImage, 2000);

choiceCards.forEach((card) => {
card.addEventListener('click', () => {
    clearInterval(timer);
    choiceCards.forEach((c) => {
    c.classList.remove('card-hover');
    });
    card.classList.add('card-hover');
    // timer = setInterval(changeImage, 5000);
});
});



// top images

// const image1 = document.querySelector('#img1');
// const image2 = document.querySelector('#img2');
// const image3 = document.querySelector('#img3');
// const image4 = document.querySelector('#img4');
// const image5 = document.querySelector('#img5');
// const choiceCards = document.querySelectorAll('.choice-card');


// image1.addEventListener('click', function(){
//     choiceCard(1,2,3,4,5);
// })
// image2.addEventListener('click', function(){
//     choiceCard(2,1,3,4,5)
// })
// image3.addEventListener('click', function(){
//     choiceCard(3,2,1,4,5)
// })
// image4.addEventListener('click', function(){
//     choiceCard(4,2,3,1,5)
// })
// // image4.addEventListener('mouseover', function(){
// //     choiceCard(4,2,3,1,5)
// // })
// image5.addEventListener('click', function(){
//     choiceCard(5,2,3,4,1)
// })

// function choiceCard(a, b, c, d, e){
//     const card1 = document.querySelector('#card'+a);
//     const card2 = document.querySelector('#card'+b);
//     const card3 = document.querySelector('#card'+c);
//     const card4 = document.querySelector('#card'+d);
//     const card5 = document.querySelector('#card'+e);
//     card1.style.display = 'flex';
//     card2.style.display = 'none';
//     card3.style.display = 'none';
//     card4.style.display = 'none';
//     card5.style.display = 'none';
//     // imag hover
//     // choiceCards.classList.remove('card-hover');
//     // ch
//     // const image11 = document.querySelector('#img'+a);
//     // image11.classList.add('card-hover');
//     // // if(card1.style.display == 'flex'){
//     // //     image11.classList.add('card-hover');
//     // // }
//     // // else{
        
//     // // }
// }

// choiceCards.forEach((card) => {
//     card.addEventListener('click', () => {
//         choiceCards.forEach((c) => {c.classList.remove('card-hover')});
//         card.classList.add('card-hover');
//     });
// });
