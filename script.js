const RGBMode = document.getElementById('RGB');
const numSlider = document.getElementById('range-selector');
const eraserMode = document.getElementById('eraser');
const colorSelecter = document.getElementById('color-selector');
const divContainer = document.getElementById('div-container');
const gridNumber = document.getElementById('grid-number');

numSlider.addEventListener("input", addDivs);
eraserMode.addEventListener("click",changeColor);

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
        box.style.flexBasis = flexBasis;
        divContainer.appendChild(box);
    }
}

function changeColor(event)
{
    /* Depending on the object that calls this function, 
    we will know whether we're changing the color to the color from the selector
    RGB or the eraser */


}

function eraser()
{

}

addDivs(); //16 x 16 grid is initialized as soon as page is loaded

