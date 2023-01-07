const tl = document.getElementById('top-left');
const tp = document.getElementById('top');
const tr = document.getElementById('top-right');
const lt = document.getElementById('left');
const cn = document.getElementById('center');
const rt = document.getElementById('right');
const bl = document.getElementById('bottom-left');
const bm = document.getElementById('bottom');
const br = document.getElementById('bottom-right');
let turn = true;
let x_turn = document.getElementById('x_turn');
let o_turn = document.getElementById('o_turn');
const game_over = document.getElementById('game_over');
const result = document.getElementById('result');
const restart = document.getElementById('restart_button');


let x_location = new Array();
let o_location = new Array();
const winning_combination = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7']
]


function win_checker(location, player) {
    if (x_location.length + o_location.length < 9) {
        for (const combitnation of winning_combination) {
            if (combitnation.every(e => location.includes(e))) {
                game_over.style.display = 'block';
                result.innerText = `${player} WINS!`;
                break;
            }
        }
    } else {
        game_over.style.display = 'block';
        result.innerText = 'TIE!';
    }
}

function play(button) {
    while (button.textContent == '') {
        if (turn) {
            button.textContent = 'x';
            x_location.push(button.getAttribute('position'));
            x_location.sort();
            win_checker(x_location, 'X');
            turn = false;
        } else {
            button.className = 'o';
            button.textContent = 'o';
            o_location.push(button.getAttribute('position'));
            o_location.sort();
            console.log(o_location)
            win_checker(o_location, 'O');
            turn = true;
        }
        x_turn.classList.toggle('turn_on');
        x_turn.classList.toggle('turn_off');
        o_turn.classList.toggle('turn_on');
        o_turn.classList.toggle('turn_off');
    }
}


tl.addEventListener('click', function() {
    play(this)
}); 
tp.addEventListener('click', function() {
    play(this)
});
tr.addEventListener('click', function() {
    play(this)
});
lt.addEventListener('click', function() {
    play(this)
});
cn.addEventListener('click', function() {
    play(this)
});
rt.addEventListener('click', function() {
    play(this)
});
bl.addEventListener('click', function() {
    play(this)
});
bm.addEventListener('click', function() {
    play(this)
});
br.addEventListener('click', function() {
    play(this)
});


restart.addEventListener('click', function() {
    window.location.reload();
});