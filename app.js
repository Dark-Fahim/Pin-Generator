function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        console.log('got 3 and again call', pin)
        return getPin()
    }
}


function generatePin(){
    let pin = getPin();
    document.getElementById('display-input').value = pin
}

// 
document.getElementById('key-pad').addEventListener('click', function(event){
  const number = event.target.innerText;
  const calcInput = document.getElementById('typed-numbers');
  if(isNaN(number)){
    if(number == 'C'){
        calcInput.value = ''
    }
  }
  else{
    const previousNumber = calcInput.value;
    const newCalc = previousNumber + number
    calcInput.value = newCalc;
  }
  
});

function verifyPin(){
    const pin = document.getElementById('display-input').value;
    const typedPin = document.getElementById('typed-numbers').value;
    const sucessMessege = document.getElementById('notify-pass');
    const failError = document.getElementById('notify-fail');
    if(pin == typedPin){
        sucessMessege.style.display = 'block'
        failError.style.display = 'none'  
    }
    else{

        failError.style.display = 'block'
        sucessMessege.style.display = 'none'
    };
}
