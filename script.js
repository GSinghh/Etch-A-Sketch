const RGBMode = document.getElementById('rgb');
const numSlider = document.getElementById('range-selector');
const eraserMode = document.getElementById('eraser');
const divContainer = document.getElementById('div-container');
const gridNumber = document.getElementById('grid-number');
const black = document.getElementById('black');

let mode;

numSlider.addEventListener("input", addDivs);
eraserMode.addEventListener("click",getMode);
RGBMode.addEventListener("click", getMode);
black.addEventListener("click", getMode);


function addDivs()
{
    /*This function will be adding divs to the div-container element
    It will also be dynamically resizing the grid and changing the gridNumber value */


    divContainer.innerHTML = " "; 
    gridNumber.innerHTML = "Grid-Size: " + numSlider.value + " x " + numSlider.value;
    var numElements = numSlider.value * numSlider.value;
    for(var i = 0; i < numElements; i++)
    {
        const box = document.createElement('div');
        const flexBasis = `calc(${100 / numSlider.value}%)`;
        box.className = 'box';
        box.addEventListener('mouseenter', getColor)
        box.style.flexBasis = flexBasis;
        divContainer.appendChild(box);
    }
}

function getColor(event)
{
    /* Depending on the object that calls this function, 
    we will know whether we're changing the color to the color from the selector
    RGB or the eraser */

    let color;

    if (mode == "rgb")
    {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        color = `rgb(${r},${g},${b}`;
    }
    else if(mode == "eraser")
    {
        color = 'white';
    }
    else if(mode == "black")
    {
        color = 'black'
    }

    event.target.style.backgroundColor = color;
}

function getMode(event)
{
    mode = event.target.id;
}

addDivs(); //16 x 16 grid is initialized as soon as page is loaded

