const typing = document.querySelectorAll('.buttons')
  const display = document.querySelector('.screen')
  const clear = document.getElementById('clear-btn')
  
  typing.forEach(button => {
  button.addEventListener('click', function(){
    display.innerText += button.innerText;
  });
  });
  clear.addEventListener('click', function(){
    display.innerText ='';
  });

