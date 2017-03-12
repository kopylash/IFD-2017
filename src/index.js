import Counter from './Counter';

const counter = new Counter();

let btn = document.createElement('button');
btn.innerHTML = `Clicked ${counter.getCount()} times`;

btn.addEventListener('click', () => {
  counter.increase();
  btn.innerHTML = `Clicked ${counter.getCount()} times`;
});

document.body.appendChild(btn);


