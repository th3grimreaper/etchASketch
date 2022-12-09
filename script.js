const buttons = document.querySelectorAll("button");
const colorToggle = document.querySelector(".colormode");
const contSqr = document.querySelector("div.square");
const color = document.querySelector("input#colorpick");
const gridSize = document.querySelector("#grid-size");
const rangeDisplayVal = document.querySelector("#range-value");
const erase = document.querySelector('.erase');
const clearGrid = document.querySelector('.clear-grid');


//store current color
let currentGridValue;

//btns = [...buttons];
//
//btns.forEach(button => {
//  button.addEventListener('click', addGrid);
//});

gridSize.addEventListener('change', addGrid);

gridSize.addEventListener('input', (event) => {
  rangeDisplayVal.value = event.target.value;
})

//add child grids inside container
function addGrid(event) {
  contSqr.innerHTML = "";
  currentGridValue = event.target.value;
  let n = event.target.value; //event.target.id;
  let num = Math.pow(n, 2);
  for(let i=1; i<=num; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add('gridtemp');
    contSqr.appendChild(newDiv);
  }
  contSqr.style.gridTemplateColumns = `repeat(${n}, 1fr)`; 
  contSqr.style.gridTemplateRows = `repeat(${n}, 1fr);`;
}

//enable eraser
erase.addEventListener('click', () => {
  contSqr.addEventListener('mouseover', (e)=> {
    if (e.target.classList.contains('gridtemp')) {
      e.target.style.background = "";
    }
  });
});

//enable color mode
colorToggle.addEventListener('click', () => {
  contSqr.addEventListener('mouseover', (e) => {
    if(e.target.classList.contains('gridtemp')) {
      e.target.style.backgroundColor = color.value;
    }
  });
});


//clear grid
clearGrid.addEventListener('click', () => {
  contSqr.innerHTML = "";
  let n = currentGridValue;
  let num = Math.pow(n, 2);
  for (let i=1; i<=num; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add('gridtemp');
    contSqr.appendChild(newDiv);
  }
  contSqr.style.gridTemplateColumns = `repeat(${n}, 1fr)`; 
  contSqr.style.gridTemplateRows = `repeat(${n}, 1fr);`;
});
