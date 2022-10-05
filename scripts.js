// Container div that will hold all the boxes
const grid = document.querySelector('.grid');

// 16x16 grid 
let columns = 16;
let rows = 16;

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

// When you hover over box, change its class to a diff name,
// and change that class' background color in css
boxes = document.querySelectorAll('.row');

boxes.forEach(box => {
    box.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'aqua';
    });    
});
