// Container div that will hold all the boxes
const grid = document.querySelector('.grid');

// Set initial grid dimensions to 16x16 
let columns = 16;
let rows = 16;

function createGrid(rows, columns) {
    for (let i = 0; i < columns; i++) {
        // Create column divs
        const column = document.createElement('div');
        column.className = 'column';
    
        for (let j = 0; j < rows; j++) {
            // Create row divs
            const row = document.createElement('div');
            row.className = 'row';
            row.setAttribute('id', 'box');
            // Append rows to columns
            column.appendChild(row);
        };
        // Append column to grid
        grid.appendChild(column);
    };
}
// Run this function on document load with the initial row/column values
window.onload = createGrid(rows, columns);

// Set the Grid Size input feild's placeholder to the current grid size
const input = document.getElementById('size');
input.setAttribute('placeholder', `${columns}x${rows}`);

function resizeGrid() {
    // Split input by the 'x' where the left value is rows and the right is columns
    handledInput = input.value.split('x');
    rows = handledInput[0];
    columns = handledInput[1];

    // Send values to the createGrid function
    createGrid(rows, columns);
};


// When you hover over a box, change its background color
boxes = document.querySelectorAll('.row');

boxes.forEach(box => {
    box.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'aqua';
    });    
});
