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

function getInputValueById(inpuId){
  const inputField = document.getElementById(inpuId);
  const inputValueString = inputField.value;
  const inputValue = parseInt(inputValueString);
  return inputValue;
}

function getTextValueById(elementId){
  const textElement = document.getElementById(elementId);
  const textValueString =textElement.innerText;
  const textValue = parseInt(textValueString);
  return textValue;
}
