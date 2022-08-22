function getButtonValueById(btnCLick){
  document.getElementById('color').style.backgroundColor='bg-green-200';
  

  const playerList = document.getElementById('order-list');
  const newPlayer = document.createElement('li');
  const player = btnCLick;
  if(playerList.children.length < 5){
    newPlayer.innerText = player;
    playerList.appendChild(newPlayer);

    
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






