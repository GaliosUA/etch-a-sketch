const grid = document.querySelector('.grid');
const resetButton = document.querySelector('.small');
const set32 = document.querySelector('.mid');
const set64 = document.querySelector('.big');
const colorRed = document.querySelector('.red');
const colorYellow = document.querySelector('.yellow');
const colorBlue = document.querySelector('.blue');

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


function changeColor() {
    this.classList.add('cell-red');
}

createCell(784);

resetButton.addEventListener('click', function(){
    createCell(784)
    const cells = document.querySelectorAll('.grid div');
    cells.forEach(cell => cell.classList.add('cell'))
});
set32.addEventListener('click', function(){
    createCell(196)
    const cells = document.querySelectorAll('.grid div');
    cells.forEach(cell => cell.classList.add('cell-32'))
});
set64.addEventListener('click', function(){
    createCell(64)
    const cells = document.querySelectorAll('.grid div');
    cells.forEach(cell => cell.classList.add('cell-64'))
});


