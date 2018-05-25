
document.forms[0].addEventListener('input', handleInputEvents);
document.forms[0].addEventListener('click', handleClickEvents);
// inputElement.addEventListener('blur', handleBlurEvents);

function handleClickEvents (e){
  e.preventDefault();
  if(e.target.type =='submit'){
    radioButtons(e);
    checkboxValiadtion(e);
  } else if(e.target.previousElementSibling.type == 'radio' ){
    toggleRadioBtns(e);
  } else if(e.target.previousElementSibling.type == 'checkbox'){
    toggleCheckboxBtns(e);
  }
};


function handleInputEvents(e){

    fullNameValidation(e);
    phoneValidation(e);
    emailValidation(e);
    reEmailValidation(e);
    addressValidation(e);
    cityValidation(e);
    stateValidation(e);
    countryValidation(e);
    zipCodeValidation(e);
    storylineValidation(e);
    urlValidation(e);

}


const fullNameValidation = (e) => {
  const tempName = document.getElementById('full-name');
  const pattern=/^[A-Z][a-z]{3,}\s[A-Z][a-z]+$/gm;
  tempName.required = 'true';

  if(pattern.test(tempName.value)){
    tempName.classList.remove('invalid');
    tempName.classList.add('valid');
  }else{
    tempName.classList.remove('valid');
    tempName.classList.add('invalid');
  }
}

const phoneValidation = (e) => {
  const tempNumber = document.getElementById('phone');
  const pattern=/^((90[0-9]{3})?0|\+358\s?)(?!(100|20(0|2(0|[2-3])|9[8-9])|300|600|700|708|75(00[0-3]|(1|2)\d{2}|30[0-2]|32[0-2]|75[0-2]|98[0-2])))(4|50|10[1-9]|20(1|2(1|[4-9])|[3-9])|29|30[1-9]|71|73|75(00[3-9]|30[3-9]|32[3-9]|53[3-9]|83[3-9])|2|3|5|6|8|9|1[3-9])\s?(\d\s?){4,19}\d$/gm;
  e.preventDefault();
  if(!pattern.test(tempNumber.value)){
    tempNumber.classList.remove('valid');
    tempNumber.classList.add('invalid');
  }else{
    tempNumber.classList.add('valid');
    tempNumber.classList.remove('invalid');

  }
}

const emailValidation = (e) => {
  const tempEmail = document.getElementById('e-mail');
  const pattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gm;
  if(!pattern.test(tempEmail.value)){
    tempEmail.classList.remove('valid');
    tempEmail.classList.add('invalid');
  }else{
    tempEmail.classList.add('valid');
    tempEmail.classList.remove('invalid');
  }
}

const reEmailValidation = (e) => {
  const tempEmail = document.getElementById('e-mail');
  // //console.dir(tempEmail);
  const reEmail = document.getElementById('re-email');
  // e.preventDefault();
  emailValidation(e);
  if(tempEmail.value!==reEmail.value){
    reEmail.classList.remove('valid');
    reEmail.classList.add('invalid');
  }else{
    reEmail.classList.add('valid');
    reEmail.classList.remove('invalid');

  }

}

const addressValidation = (e) => {
  const tempStreet = document.getElementById('street-address');
  const pattern=/[\w\d\s]{3,}/gm;
  tempStreet.required = 'true';

  if(pattern.test(tempStreet.value)){
    tempStreet.classList.remove('invalid');
    tempStreet.classList.add('valid');
  }else{
    tempStreet.classList.remove('valid');
    tempStreet.classList.add('invalid');
  }
}

const cityValidation = (e) => {
  const tempCity = document.getElementById('city');
  const pattern=/^[A-Z][\w\s]{3,25}/gm;
  tempCity.required = 'true';
  e.preventDefault();

  if(pattern.test(tempCity.value)){
    tempCity.classList.remove('invalid');
    tempCity.classList.add('valid');
  }else{
    tempCity.classList.remove('valid');
    tempCity.classList.add('invalid');
  }
}

const stateValidation = (e) => {
  const tempState = document.getElementById('state');
  const pattern=/^[A-Z][\w\s]{3,20}/gm;
  tempState.required = 'true';
  e.preventDefault();
  if(pattern.test(tempState.value)){
    tempState.classList.remove('invalid');
    tempState.classList.add('valid');
  }else{
    tempState.classList.remove('valid');
    tempState.classList.add('invalid');
  }
}

const countryValidation = (e) => {
  const temp = document.getElementById('country');
  const pattern=/^[A-Z][\w\s]{3,20}/gm;
  temp.required = 'true';
  e.preventDefault();
  if(pattern.test(temp.value)){
    temp.classList.remove('invalid');
    temp.classList.add('valid');
  }else{
    temp.classList.remove('valid');
    temp.classList.add('invalid');
  }
}

const zipCodeValidation = (e) => {
  const temp = document.getElementById('zipCode');
  const pattern=/^\d{2,6}/gm;
  temp.required = 'true';
  e.preventDefault();

  if(pattern.test(temp.value)){
    temp.classList.remove('invalid');
    temp.classList.add('valid');
  }else{

    temp.classList.remove('valid');
    temp.classList.add('invalid');
  }
}

const storylineValidation = (e) => {
  const temp = document.getElementById('story');
  const pattern=/^[\w\d]{2,200}/gm;
  // temp.required = 'true';
  e.preventDefault();
  console.log(temp);
  if(pattern.test(temp.value)){
    temp.classList.remove('invalid');
    temp.classList.add('valid');
  }else{
    temp.classList.remove('valid');
    temp.classList.add('invalid');
  }
}

const radioButtons = (e) => {
  const temp = document.getElementsByClassName('radio-btn-container');
  const tempInput = temp[0].getElementsByTagName('INPUT');
  const tempArray = Array.from(tempInput);
  let tmp = 'false';
  for (let i = 0; i<tempArray.length; i++){
      if(tempArray[i].checked){tmp = 'true';}
      }
  if(tmp =='false'){

    alert ("Atleast one in Primary Design should be selected");
  }
}

const checkboxValiadtion = (e) => {
  const temp = document.getElementsByClassName('checkbox-container');
  const tempInput = temp[0].getElementsByTagName('INPUT');
  const tempLeft = document.getElementsByClassName('left-column');
  const tempLeftInput = tempLeft[0].childNodes[3].getElementsByTagName('INPUT');
  const tempRight = document.getElementsByClassName('right-column');
  const tempRightInput = tempLeft[0].childNodes[3].getElementsByTagName('INPUT');
  const tempArray = Array.from(tempInput);
  const tempLeftArray = Array.from(tempLeftInput);
  const tempRightArray = Array.from(tempRightInput);
  let tmp = 'false';
  // if(tmp){
  //   for (let i = 0; i<tempArray.length; i++){
  //       if(tempArray[i].checked=='false'){tmp = 'true';
  //       }
  //   }
  // }else alert ('a');

  // for (let i = 0; i<tempLeftArray.length; i++){
  //       if(tempLeftArray[i].checked){tmp = 'true';
  //       }
  //       else{alert("At least one experience checkbox should be selected.")
  //       }
  // }
  // for(let i = 0; i<tempRightArray.length; i++){
  //       if(tempRightArray[i].checked){tmp = 'true';}
  //       else{
  //         alert("At least one interest checkbox should be selected.")
  //       }
  // }
}

const toggleRadioBtns = (e) =>{
  e.target.previousElementSibling.checked = true;
}

const check = (e) => {
  e.target.previousElementSibling.checked = true;
}
const unCheck = (e) =>{
  e.target.previousElementSibling.checked = false;
}

const toggleCheckboxBtns = (e) => {
    let value = e.target.previousElementSibling.checked;
    if(!value){
      check(e);
    }else unCheck(e);
}
const urlValidation = (e) =>{
  const temp = document.getElementById('url');
  const pattern=/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm
  temp.required = 'true';
  e.preventDefault();
  if(pattern.test(temp.value)){
    temp.classList.remove('invalid');
    temp.classList.add('valid');
  }else{
    temp.classList.remove('valid');
    temp.classList.add('invalid');
  }
}


//
// function handleBlurEvents (e){
//
// }
