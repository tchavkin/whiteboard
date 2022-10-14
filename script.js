
var d = document.getElementById('box2')

var horizontal = 0

var vertical = 0

document.addEventListener('keydown', (event) => {
    console.log(event.key, horizontal, vertical, d.style.left,);
    if (event.key === 'ArrowUp') {
        vertical = vertical + 5;
        d.style.bottom = `${vertical + 5}px`;
    }
    if (event.key === 'ArrowDown') {
        vertical = vertical - 5;
        d.style.bottom = `${vertical - 5}px`;
    }
    if (event.key === 'ArrowLeft') {
        horizontal = horizontal - 5;
        d.style.left = `${horizontal - 5}px`;
    }
    if (event.key === 'ArrowRight') {
        horizontal = horizontal + 5;
        d.style.left = `${horizontal + 5}px`;
    }
});


//bug: change initial value of box2 to fix jumping bug







// var d = document.getElementById('box2')

// var horizontal = 0

// function buttonClick() {
    // horizontal = horizontal + 5;
    // d.style.position = "absolute";
    // d.style.left = `${horizontal + 5}px`;
    // d.style.top = '200px';
// }






// 
// d.style.color='blue';
// d.style.left = x_pos+'200px';
// d.style.top = y_pos+'200px';

