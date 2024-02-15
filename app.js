const container = document.querySelector('#container');
const btn = document.querySelector('#button');
let initial_size = 16;

generateGrid(initial_size);

function generateGrid(size) {
  let numberOfTiles = size * size;
  for (let i = 0; i < numberOfTiles; i++) {
    const div = document.createElement('div');
    div.classList.add('div');
    container.append(div);
  }

  let newHeight = (newWidth = 360 / size);
  const newDivs = document.querySelectorAll('.div');
  newDivs.forEach((div) => {
    div.style.height = newHeight.toString() + 'px';
    div.style.width = newWidth.toString() + 'px';
  });
}

function deleteGrid() {
  const divs = document.querySelectorAll('.div');
  for (let div of divs) {
    div.remove();
    console.log('divs removed');
  }
}

function addHover() {
  const divs = document.querySelectorAll('.div');
  console.log(divs);

  divs.forEach((div) => {
    div.addEventListener('mouseenter', (e) => {
      div.classList.add('hover');
    });
  });
}

btn.addEventListener('click', (e) => {
  deleteGrid();
  let input = prompt('Enter grid size');
  generateGrid(input);
  addHover();
});

document.querySelector('#container').addEventListener('click', addHover);
