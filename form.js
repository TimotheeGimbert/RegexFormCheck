const inputs = document.getElementsByTagName('input');
let input = null;
let inputBis = null;
let regex = null;
let label = null;
let labelBis = null;
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', (e) => {
  e.preventDefault(); // avoid redirection after clicking submit

  // check firstname with REGEX
  let firstNameIsValid = false;
  input = inputs[0].value;
  regex = /.{3,}/;
  label = document.getElementsByTagName('label')[0];
  if (regex.test(input)) {
    label.style.color = 'green';
    firstNameIsValid = true;
  }
  else if (label.style.color !== 'red') {
    label.innerHTML = label.textContent + " (2 letters minimum)";
    label.style.color = 'red';
  }
  
  // check lastname with REGEX
  let lastNameIsValid = false;
  input = inputs[1].value;
  regex = /.{3,}/;
  label = document.getElementsByTagName('label')[1];
  if (regex.test(input)) {
    label.style.color = 'green';
    lastNameIsValid = true;
  }
  else if (label.style.color !== 'red') {
    label.innerHTML = label.textContent + " (3 letters minimum)";
    label.style.color = 'red';
  }

  // check age with REGEX
  let ageIsValid = false;
  input = inputs[2].value;
  regex = /1[8-9]|[2-9][0-9]/;
  label = document.getElementsByTagName('label')[2];
  if (regex.test(input)) {
    label.style.color = 'green';
    ageIsValid = true;
  }
  else if (label.style.color !== 'red') {
    label.innerHTML = label.textContent + " (age > 18)";
    label.style.color = 'red';
  } 

  // check email with REGEX
  let emailsAreValid = false;
  input = inputs[3].value;
  inputBis = inputs[4].value;
  regex = /.+@.+[.]{1}.+/;
  label = document.getElementsByTagName('label')[3];
  labelBis = document.getElementsByTagName('label')[4];
  if (regex.test(input) && input === inputBis) {
    label.style.color = 'green';
    labelBis.style.color = 'green';
    emailsAreValid = true;
  }
  else if (label.style.color !== 'red') {
    label.innerHTML = label.textContent + " (email addresses should be valid and identical)";
    label.style.color = 'red';
    labelBis.style.color = 'red';
  }

  // check password with REGEX
  let passwordsAreValid = false;
  input = inputs[5].value;
  inputBis = inputs[6].value;
  regex = /.{6,}/;
  label = document.getElementsByTagName('label')[5];
  labelBis = document.getElementsByTagName('label')[6];
  if (regex.test(input) && input === inputBis) {
    label.style.color = 'green';
    labelBis.style.color = 'green';
    passwordsAreValid = true;
  }
  else if (label.style.color !== 'red') {
    label.innerHTML = label.textContent + " (should be at least 6 characters)";
    label.style.color = 'red';
    labelBis.innerHTML = labelBis.textContent + " (should be identical to password)";
    labelBis.style.color = 'red';
  }

  // CGU must be accepted
  let boxIsChecked = false;
  input = inputs[7].checked;
  label = document.getElementsByTagName('label')[7];
  if (input === true) {
    label.style.color = 'green';
    boxIsChecked = true;
  }
  else if (label.style.color !== 'red') {
    label.style.color = 'red';
  } 

  if (firstNameIsValid 
      && lastNameIsValid 
      && ageIsValid 
      && emailsAreValid 
      && passwordsAreValid
      && boxIsChecked)
      window.location = 'afterForm.html';
});
