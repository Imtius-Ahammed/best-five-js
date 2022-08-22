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

