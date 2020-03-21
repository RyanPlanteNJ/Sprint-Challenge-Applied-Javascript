// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

let container = document.querySelector('.header-container');

function Header() {
  let header = document.createElement('div');
  let date = document.createElement('span');
  let lambda = document.createElement('h1');
  let temp = document.createElement('span');


  container.appendChild(header);
  header.append(date, lambda, temp);

  header.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');

  date.textContent = 'March 28, 2019';
  lambda.textContent = 'Lambda Times';
  temp.textcontnet = '98°';

  return header;

}

Header();
