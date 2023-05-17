const grid = document.querySelector('.grid');
console.log(grid);

function createCell (number) {
    let counter = 0;
    while (counter < number) {
        grid.appendChild(document.createElement('div'));
        counter++;
    }
    const cells = document.querySelectorAll('.grid div');
    cells.forEach (cell => cell.classList.add('cell'));
    cells.forEach (cell => cell.addEventListener('mouseenter', colorCell));
}
function colorCell (color) {
    if (color == 'yellow') {
        const cells = document.querySelectorAll('.grid div');
        cells.forEach (cell => cell.classList.add('cell-yellow'));
    } else {
        const cells = document.querySelectorAll('.grid div');
        cells.forEach (cell => cell.classList.add('cell-green'));
    }
}
createCell(256);

