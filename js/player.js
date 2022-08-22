function getButtonValueById(btnCLick){
  const playerList = document.getElementById('order-list');
  const newPlayer = document.createElement('li');
  const player = btnCLick;
  if(playerList.children.length < 5){
    newPlayer.innerText = player;
    playerList.appendChild(newPlayer);
    this.disabled=true;
  }
  else{
    alert('You can not choose more than 5 players');
  }

  
}



////calculation
//per player
document.getElementById('calculate-btn').addEventListener('click',function(){
  const inputElement = getInputValueById('per-player')
  
  const calculateResult = inputElement*5;

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






