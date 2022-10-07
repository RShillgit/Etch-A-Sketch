// Set initial grid dimensions to 16x16 
let columns = 16;
let rows = 16;

// set initial color to black
let inkColor = 'black';

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

    // Error message
    const errorMessage = 'Please input dimensions between 1 and 100 separated by an "x".  Ex: 20x20';
    // Error handling
    if (handledInput[0] < 1 || handledInput[1] < 1 || handledInput[0] > 100 || handledInput[1] > 100 || 
        isNaN(handledInput[0]) || isNaN(handledInput[1])) {
        alert(errorMessage);
        return createGrid(rows,columns);
    }
    rows = handledInput[0];
    columns = handledInput[1];

    // Send values to the createGrid function
    createGrid(rows, columns);
    // Run the draw function
    draw(inkColor);
};

// Function that deletes the old grid
function deleteGrid() {
    // Get entire grid div in a variable so it can be deleted before making a new one
    const oldGrid = document.querySelector('.grid');
    oldGrid.parentNode.removeChild(oldGrid);
};

// Function that changes the ink color
function changeColor() {
    // Get user input
    const userColor = document.getElementById('color').value;
    // send color to draw function
    draw(userColor);
}

// Function that changes ink color to white to act as an eraser
function eraseColor() {
    let inkColor = 'white';
    draw(inkColor);
}

// Function that clears grid of all drawings
function clearGrid() {
    // Get box container
    const boxes = document.querySelectorAll('.row');
    // For each box, set its background to white
    boxes.forEach(box => {
        box.style.backgroundColor = 'white';
    })
}

// Function that allows user to draw on grid
function draw(inkColor) {
    // When you hover over a box, change its background color
    boxes = document.querySelectorAll('.row');

    boxes.forEach(box => {
        box.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = inkColor;
    });    
});
}

function rainbow() {
     // Get boxs in a variable
     boxes = document.querySelectorAll('.row');

     boxes.forEach(box => {
        box.addEventListener('mouseover', function(e) {
            // Get all possible characters for hex values
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            e.target.style.backgroundColor = color; 
        });
    });
}