function getButtonValueById(btnCLick){

  

  const button1 = document.getElementById('color-1');
  button1.style.backgroundColor='gray';

  const button2 = document.getElementById('color-2');
  button2.style.backgroundColor='gray';

  const button3 = document.getElementById('color-3');
  button3.style.backgroundColor='gray';

  const button4 = document.getElementById('color-4');
  button4.style.backgroundColor='gray';

  const button5 = document.getElementById('color-5');
  button5.style.backgroundColor='gray';
  
  const button6 = document.getElementById('color-6');
  button6.style.backgroundColor='gray';
 
  

  

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






