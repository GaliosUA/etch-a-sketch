const grid = document.querySelector('.grid');
const resetButton = document.querySelector('.reset');
const set32 = document.querySelector('.cell-32');
const set64 = document.querySelector('.cell-64');

function createCell (number) {
    if (grid.childNodes.length != 0) {
        while (grid.firstChild) {
            grid.removeChild(grid.lastChild);
        }
    }
    let counter = 0;
    while (counter < number) {
        grid.appendChild(document.createElement('div'));
        grid.lastChild.classList.add('cell');
        grid.lastChild.addEventListener('mouseenter', changeColor);
        counter++;
    }
}


function changeColor(e) {
    this.classList.add('cell-yellow');
}

function logText() {
    createCell(1024);
}

createCell(1024);

resetButton.addEventListener('click', logText);
set32.addEventListener('click', logText);
set64.addEventListener('click', logText);


