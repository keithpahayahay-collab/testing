let count = 0;

const button = document.getElementById('counterButton');

button.addEventListener('click', () => {
  count++;
  button.textContent = count;
});
