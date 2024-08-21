  const typing = document.querySelectorAll('.buttons')
  const display = document.querySelector('.screen')
  const clear = document.getElementById('clear-btn')
  const special = document.querySelectorAll('.s-buttons')

  typing.forEach(button => {
  button.addEventListener('click', function(){
    display.innerText += button.innerText;
  });
  });
  clear.addEventListener('click', function(){
    display.innerText ='';
  });
  special.forEach(button => {
    button.addEventListener('click', function(){
      display.innerText = button.innerText;
    });
  });
