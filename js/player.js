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






