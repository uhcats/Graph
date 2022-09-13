const board = JXG.JSXGraph.initBoard('box', { boundingbox: [-10, 10, 10, -10], axis: true });


const input = document.querySelector('#input');
const btn = document.querySelector('#btn');







const inputChange = () => {
  input.addEventListener('input', (e) => {
    const inputValue = e.target.value
    console.log('działa');

    const inputValueArray = inputValue.split('');

    inputValueArray.findIndex(index => {
      console.log(index);
    })

  })
}


const init = () => {

  btn.addEventListener('click', () => {
    inputChange();
  })
}


init();




var l1 = board.create('line', [1.0, -10, 10]);