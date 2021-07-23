let emailRequestForm = document.querySelector('.email-request-form');

emailRequestForm.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('hiii');
  fetch('/admin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: document.querySelector('#name').value,
      email: document.querySelector('#email').value,
      text: document.querySelector('#message').value,
    }),
  })
    .then((res) => res.text())
    .then((data) => console.log(data));
});
