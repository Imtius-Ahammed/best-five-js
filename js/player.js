
////calculation
//per player
document.getElementById('calculate-btn').addEventListener('click',function(){
  const inputElement = getInputValueById('per-player');
  const orderList = document.getElementById('order-list');
  const orderListChild = orderList.children.length;
  
  const calculateResult = inputElement*orderListChild;

  const playerExpenses = document.getElementById('player-expenses');
  playerExpenses.innerText = calculateResult;
})

// manager and coach

document.getElementById('calculate-total').addEventListener('click', function(){
  const managerInput = getInputValueById('manager-input');

 
  const coachInput = getInputValueById('coach-input');

  const playerExpenses = getTextValueById('player-expenses');

  const calculateTotal = managerInput + coachInput + playerExpenses;

  const total = document.getElementById('total');
  total.innerText = calculateTotal;
})






