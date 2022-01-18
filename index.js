const regexes = {
  0: /.{3,}/,
  1: /.{5,}/
}
const inputs = document.getElementsByTagName('input');
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', (e) => {
  e.preventDefault(); // avoid redirection after clicking submit

  for (let i = 0; i < 2; i++) {
    const input = inputs[i].value;
    let regexp = regexes[i];
    if (regexp.test(input)) document.getElementsByTagName('label')[i].style.color = 'green';
    else document.getElementsByTagName('label')[i].style.color = 'red';
  }
});
