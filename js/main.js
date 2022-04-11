let firstName = document.getElementById('firstName');
let secondName = document.getElementById('secondName');
let nameError = document.getElementById('nameError');
let phoneNum = document.getElementById('number');
let phoneError = document.getElementById('phoneError');
let elInputs = document.querySelectorAll('.validation-input');
let password = document.getElementById('password');
let passwordError = document.getElementById('passwordError');
let passwordError2 = document.getElementById('passwordError2');
elInputs.forEach((input)=>{
  input.addEventListener('blur', ()=>{
    if(input.value==''){
      input.style.borderColor='#ff6e6e'
    }
    else{
      input.style.borderColor='#ccc'
    }
  })
})


firstName.addEventListener('blur',()=>{
  let x = firstName.value;
  try {
    for( let i = 0; i < x.length; i++){
      if(!isNaN(x.charAt(i)) && !(x.charAt(i) === " ") ){
        throw "*Do not enter a number"
      } else {
        nameError.innerHTML = '';
      }
  }
  }
  catch(error) {
    nameError.innerHTML = error;
  }
})

secondName.addEventListener('blur',()=>{
  let x = secondName.value;
  try {
    for( let i = 0; i < x.length; i++){
      if(!isNaN(x.charAt(i)) && !(x.charAt(i) === " ") ){
        throw "*Do not enter a number"
      } else {
        nameError.innerHTML = '';
      }
  }
  }
  catch(error) {
    nameError.innerHTML = error;
  }
})


phoneNum.addEventListener('blur',()=>{
  let x = phoneNum.value.toString();
  let b = '+998'
  console.log(x);
  try {
  if(x.indexOf(b) > -1){
    throw "*Do not enter a number"
  }

  }
  catch(error) {
    phoneError.innerHTML = error;
  }
})


password.addEventListener('blur',()=>{
  let x = password.value;
  try {
    for( let i = 0; i < x.length; i++){
      if((x.charAt(i)) || (x.charAt(i) === " ")){
        throw "*Enter a number"
      } else {
        nameError.innerHTML = '';
      }
  }
  }
  catch(error) {
    passwordError.innerHTML = error;
  }
})

