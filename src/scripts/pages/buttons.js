const radioButtons = document.querySelectorAll('input[name="add-to-bag"]');
const addToBagButton = document.querySelector('#add-to-bag-demo')

radioButtons.forEach(btn => {
    btn.addEventListener('change', showSelected);
  } ) 

addToBagButton.addEventListener('click', addToBag);

function showSelected(e) {
addToBagButton.className = "";
addToBagButton.classList.add(e.target.value)
}

function addToBag() {
    addToBagButton.classList.add('adding')

    setTimeout(() => addToBagButton.classList.remove('adding'), 2000) 
}