// Set initial grid dimensions to 16x16 
let columns = 16;
let rows = 16;

// Function that creates the grid given a number of rows and columns
function createGrid(rows, columns) {
    // Get container div and store it in a variable
    const gridContainer = document.querySelector('.container');

    // Create a div that will hold the grid
    const grid = document.createElement('div');
    grid.className = 'grid';

    // Append grid to html body
    gridContainer.appendChild(grid);

    for (let i = 0; i < columns; i++) {
        // Create column divs
        const column = document.createElement('div');
        column.className = 'column';
        column.setAttribute('id', 'col');
    
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

// Set the Grid Size input feild's value to the current grid size
const input = document.getElementById('size');
input.setAttribute('value', `${columns}x${rows}`);

// Function that resizes the grid
function resizeGrid() {
    // Split input by the 'x' where the left value is rows and the right is columns
    handledInput = input.value.split('x');
    rows = handledInput[0];
    columns = handledInput[1];

    // Send values to the createGrid function
    createGrid(rows, columns);
    // Run the draw function
    draw();
};

// Function that deletes the old grid
function deleteGrid() {
    // Get entire grid div in a variable so it can be deleted before making a new one
    const oldGrid = document.querySelector('.grid');
    oldGrid.parentNode.removeChild(oldGrid);
};


function draw() {
    // When you hover over a box, change its background color
    boxes = document.querySelectorAll('.row');

    boxes.forEach(box => {
        box.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'aqua';
    });    
});
}
draw();

