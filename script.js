const balance = document.querySelector('.balance-box')
const bet = document.querySelector('.pay-table')
const spinButton = document.querySelector('.spin-button')

const symbols = {
    0: '3xBAR',
    1: 'BAR',
    2: '2xBAR',
    3: '7',
    4: 'CHERRY',
};

let matrix = {
    top: ['0', '0', '0'],
    mid: ['1', '1', '1'],
    bot: ['2', '2', '2'],
    nxt: ['3', '3', '3']
}

//reels
const reel1 = document.getElementById('reel-1');
const reel2 = document.getElementById('reel-2');
const reel3 = document.getElementById('reel-3');

//cells
//top
const top1 = reel1.querySelector('.reel__result .reel__result_top')
const top2 = reel2.querySelector('.reel__result .reel__result_top')
const top3 = reel3.querySelector('.reel__result .reel__result_top')

//mid
const mid1 = reel1.querySelector('.reel__result .reel__result_mid')
const mid2 = reel2.querySelector('.reel__result .reel__result_mid')
const mid3 = reel3.querySelector('.reel__result .reel__result_mid')

//bot
const bot1 = reel1.querySelector('.reel__result .reel__result_bot')
const bot2 = reel2.querySelector('.reel__result .reel__result_bot')
const bot3 = reel3.querySelector('.reel__result .reel__result_bot')

//nxt
const nxt1 = reel1.querySelector('.reel__result .reel__result_nxt')
const nxt2 = reel2.querySelector('.reel__result .reel__result_nxt')
const nxt3 = reel3.querySelector('.reel__result .reel__result_nxt')

//DEBUG MODE

let debugMode = document.querySelector('input[name="debug__toggle"]')

debugMode.addEventListener('change', function(){
    if(this.checked) {
        debugModeEnabled = true
    } else {
        debugModeEnabled = false
    }
})

const side = document.querySelectorAll('input[name="side"]')
for (var i = 0; i < side.length; i++) {
    side[i].addEventListener('change', function() {
        side.value = this.value;
    });
}

const debugReel1 = document.querySelectorAll('input[name="reel-1"]')
for (var i = 0; i < debugReel1.length; i++) {
    debugReel1[i].addEventListener('change', function() {
        debugReel1.value = parseInt(this.value);
    });
}

const debugReel2 = document.querySelectorAll('input[name="reel-2"]')
for (var i = 0; i < debugReel2.length; i++) {
    debugReel2[i].addEventListener('change', function() {
        debugReel2.value = parseInt(this.value);
    });
}

const debugReel3 = document.querySelectorAll('input[name="reel-3"]')
for (var i = 0; i < debugReel3.length; i++) {
    debugReel3[i].addEventListener('change', function() {
        debugReel3.value = parseInt(this.value);
    });
}



function winningCombinatinonsTop(){
    const combination = matrix.top.join('')
    let result = 0;
    
    if (combination === '444') {result = 2000; triggerWin(true, true, true)};
    if (combination === '333') {result = 150; triggerWin(true, true, true)};
    if (combination === '111') {result = 50; triggerWin(true, true, true)};
    if (combination === '000') {result = 20; triggerWin(true, true, true)};
    if (combination === '222') {result = 10; triggerWin(true, true, true)};
    if (!combination.includes('4') && !combination.includes('3')) {result = 5;triggerWin(true, true, true);};
    if (combination.includes('4') && combination.includes('3')) {
        result = 75; 
        triggerWin(matrix.top[0] === 4 || matrix.top[0] === 3, matrix.top[1] === 4 || matrix.top[1] === 3, matrix.top[2] === 4 || matrix.top[2] === 3);
    };
    
    function triggerWin(one, two, three){
        one && setTimeout(() => top1.classList.add('win'), 250); setTimeout(() => top1.classList.remove('win'), 1250)
        two && setTimeout(() => top2.classList.add('win'), 250); setTimeout(() => top2.classList.remove('win'), 1250)
        three && setTimeout(() => top3.classList.add('win'), 250); setTimeout(() => top3.classList.remove('win'), 1250)
    }
    
    return result
}


function winningCombinatinonsMid(){
    const combination = matrix.mid.join('')
    let result = 0;
    
    if (combination === '444') {result = 1000; triggerWin(true, true, true)};
    if (combination === '333') {result = 150; triggerWin(true, true, true)};
    if (combination === '111') {result = 50; triggerWin(true, true, true)};
    if (combination === '000') {result = 20; triggerWin(true, true, true)};
    if (combination === '222') {result = 10; triggerWin(true, true, true)};
    if (!combination.includes('4') && !combination.includes('3')) {result = 5;triggerWin(true, true, true);};
    if (combination.includes('4') && combination.includes('3')) {
        result = 75; 
        triggerWin(matrix.mid[0] === 4 || matrix.mid[0] === 3, matrix.mid[1] === 4 || matrix.mid[1] === 3, matrix.mid[2] === 4 || matrix.mid[2] === 3);
    };
    
    function triggerWin(one, two, three){
        one && setTimeout(() => mid1.classList.add('win'), 250); setTimeout(() => mid1.classList.remove('win'), 1250)
        two && setTimeout(() => mid2.classList.add('win'), 250); setTimeout(() => mid2.classList.remove('win'), 1250)
        three && setTimeout(() => mid3.classList.add('win'), 250); setTimeout(() => mid3.classList.remove('win'), 1250)
    }
    
    return result
}


function winningCombinatinonsBot(){
    const combination = matrix.bot.join('')
    let result = 0;
    
    if (combination === '444') {result = 4000; triggerWin(true, true, true)};
    if (combination === '333') {result = 150; triggerWin(true, true, true)};
    if (combination === '111') {result = 50; triggerWin(true, true, true)};
    if (combination === '000') {result = 20; triggerWin(true, true, true)};
    if (combination === '222') {result = 10; triggerWin(true, true, true)};
    if (!combination.includes('4') && !combination.includes('3')) {result = 5;triggerWin(true, true, true);};
    if (combination.includes('4') && combination.includes('3')) {
        result = 75; 
        triggerWin(matrix.bot[0] === 4 || matrix.bot[0] === 3, matrix.bot[1] === 4 || matrix.bot[1] === 3, matrix.bot[2] === 4 || matrix.bot[2] === 3);
    };
    
    function triggerWin(one, two, three){
        one && setTimeout(() => bot1.classList.add('win'), 250); setTimeout(() => bot1.classList.remove('win'), 1250)
        two && setTimeout(() => bot2.classList.add('win'), 250); setTimeout(() => bot2.classList.remove('win'), 1250)
        three && setTimeout(() => bot3.classList.add('win'), 250); setTimeout(() => bot3.classList.remove('win'), 1250)
    }
    
    return result
}


//DEBUG MODE
function setCombination(){

    let reel1 = getRandomInt()
    let reel2 = getRandomInt()
    let reel3 = getRandomInt()
    
    let matrix = {
        top: [reel1, reel2, reel3],
        mid: [setNext(reel1, 1), setNext(reel2, 1), setNext(reel3, 1)],
        bot: [setNext(reel1, 2), setNext(reel2, 2), setNext(reel3, 2)],
        nxt: [setNext(reel1, 3), setNext(reel2, 3), setNext(reel3, 3)],
    }
    
    if(debugMode.checked){
        reel1 = debugReel1.value
        reel2 = debugReel2.value
        reel3 = debugReel3.value

        if (side.value === 'top'){
            matrix = {
                top: [reel1, reel2, reel3],
                mid: [setNext(reel1, 1), setNext(reel2, 1), setNext(reel3, 1)],
                bot: [setNext(reel1, 2), setNext(reel2, 2), setNext(reel3, 2)],
                nxt: [setNext(reel1, 3), setNext(reel2, 3), setNext(reel3, 3)],
            }
        }
        
        if (side.value === 'mid'){
            matrix = {
                top: [setPrev(reel1, 1), setPrev(reel2, 1), setPrev(reel3, 1)],
                mid: [reel1, reel2, reel3],
                bot: [setNext(reel1, 1), setNext(reel2, 1), setNext(reel3, 1)],
                nxt: [setNext(reel1, 2), setNext(reel2, 2), setNext(reel3, 2)],
            }
        }
        
        if (side.value === 'bot'){
            matrix = {
                top: [setPrev(reel1, 2), setPrev(reel2, 2), setPrev(reel3, 2)],
                mid: [setPrev(reel1, 1), setPrev(reel2, 1), setPrev(reel3, 1)],
                bot: [reel1, reel2, reel3],
                nxt: [setNext(reel1, 1), setNext(reel2, 1), setNext(reel3, 1)],
            }
        }
    }
    
    function getRandomInt() {
        return Math.floor(Math.random() * Math.floor(5));
    }
    
    function setNext(reelNumber, step){
        let result = parseInt(reelNumber);
        
        for (i = 1; i <= step; i++){
            result = result === 4 ? 0 : result + 1
        }
        
        return result
    }
    
    function setPrev(reelNumber, step){
        let result = parseInt(reelNumber);
        
        for (i = 1; i <= step; i++){
            result = result === 0 ? 4 : result - 1
        }
        
        return result
    }
    
    
    return matrix
}

function drawCell(side, position){
    return `url(Reel/${symbols[matrix[side][position]]}.png)`
}

function drawReel1(){
    top1.style.backgroundImage = drawCell('top', 0)
    mid1.style.backgroundImage = drawCell('mid', 0)
    bot1.style.backgroundImage = drawCell('bot', 0)
    nxt1.style.backgroundImage = drawCell('nxt', 0)
}


function drawReel2(){
    top2.style.backgroundImage = drawCell('top', 1)
    mid2.style.backgroundImage = drawCell('mid', 1)
    bot2.style.backgroundImage = drawCell('bot', 1)
    nxt2.style.backgroundImage = drawCell('nxt', 1)
}

function drawReel3(){
    top3.style.backgroundImage = drawCell('top', 2)
    mid3.style.backgroundImage = drawCell('mid', 2)
    bot3.style.backgroundImage = drawCell('bot', 2)
    nxt3.style.backgroundImage = drawCell('nxt', 2)
}

//reel functions
function stopReel(element){
    element.classList.add('stop');
}

function startReel(element){
    element.classList.remove('stop');
    element.classList.remove('init');
}

function toggleButtonDisabled(state){
    spinButton.disabled = state;
}

function spin(){
    toggleButtonDisabled(true)
    
    let _balance = parseInt(balance.value);
    let _bet = parseInt(bet.value);
    
    if(_balance === 0){
        alert('Please deposit money for your balance');
        return
    } 
    
    if(!_balance || !_bet ){
        alert('Enter values');
        return
    } 
    
    if(_balance < _bet ){
        alert('Cannot place bets higher that your balance');
        return
    }
    
    _balance = _balance - _bet;
    
    startReel(reel1);
    startReel(reel2);
    startReel(reel3);
    
    matrix =  setCombination();
    
    balance.value = _balance;
    
    setTimeout(() => {drawReel1(); stopReel(reel1)}, 2000);;
    setTimeout(() => {drawReel2(); stopReel(reel2)}, 2500);;
    setTimeout(() => {drawReel3(); stopReel(reel3)}, 3000);;
    setTimeout(() => {
        toggleButtonDisabled(false)
        _balance = _balance + winningCombinatinonsTop() + winningCombinatinonsMid() + winningCombinatinonsBot();
        balance.value = _balance; 
    }, 3000)    
    
}