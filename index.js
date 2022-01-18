
const inputs = document.getElementsByTagName('input');
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', (e) => {
  e.preventDefault(); // avoid redirection after clicking submit

  // check firstname with REGEX
  let input = inputs[0].value;
  let regex = /.{3,}/;
  let label = document.getElementsByTagName('label')[0];
  if (regex.test(input)) label.style.color = 'green';
  else if (label.style.color !== 'red') {
    label.innerHTML = label.textContent + " (2 letters minimum)";
    label.style.color = 'red';
  }
  
  // check lastname with REGEX
  input = inputs[1].value;
  regex = /.{3,}/;
  label = document.getElementsByTagName('label')[1];
  if (regex.test(input)) label.style.color = 'green';
  else if (label.style.color !== 'red') {
    label.innerHTML = label.textContent + " (3 letters minimum)";
    label.style.color = 'red';
  }

  // check age with REGEX
  input = inputs[2].value;
  input = parseInt(input);
  console.log(typeof(input));
  regex = /1[8-9]|[2-9][0-9]/;
  label = document.getElementsByTagName('label')[2];
  if (regex.test(input)) label.style.color = 'green';
  else if (label.style.color !== 'red') {
    label.innerHTML = label.textContent + " (age > 18)";
    label.style.color = 'red';
  } 
});
