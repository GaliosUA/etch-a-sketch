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

createCell(1024);

resetButton.addEventListener('click', function(){
    createCell(1024)
    const cells = document.querySelectorAll('.grid div');
    cells.forEach(cell => cell.classList.add('cell'))
});
set32.addEventListener('click', function(){
    createCell(256)
    const cells = document.querySelectorAll('.grid div');
    cells.forEach(cell => cell.classList.add('cell-32'))
});
set64.addEventListener('click', function(){
    createCell(64)
    const cells = document.querySelectorAll('.grid div');
    cells.forEach(cell => cell.classList.add('cell-64'))
});


