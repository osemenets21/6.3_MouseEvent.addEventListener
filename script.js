const blockOne = document.querySelector('.block_one');
const blockTwo = document.querySelector('.block_two');
const blockThree = document.querySelector('.block_three');

function addBackgroundOne(){
    let background = prompt('Write link');
    blockOne.style.backgroundImage = `url(${background})`;
}

function addBackgroundTwo(){
    let background1 = prompt('Write link');
    blockTwo.style.backgroundImage = `url(${background1})`;
}

function addBackgroundThree(){
    let background2 = prompt('Write link');
    blockThree.style.backgroundImage = `url(${background2})`;
}
 
blockOne.addEventListener("click", addBackgroundOne);
blockTwo.addEventListener("click", addBackgroundTwo);
blockThree.addEventListener("click", addBackgroundThree);