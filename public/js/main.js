/* This JS will populate the front page */
let callMeForm = document.querySelector('.call-me-form');

document.addEventListener('DOMContentLoaded', async function () {
  let projects = await getProjects();
  let articles = document.querySelector('.articles');
  articles.innerHTML = '';
  projects.forEach((x) => {
    let projectHTML = `<div class="col-4">
    <div class="card">
        <img class="card-img-top" src="${x.imageURL}" alt="${x.title}">
        <div class="card-body">
            <h4 class="card-title">${x.title}</h4>
            <p class="card-text">${x.description}</p>
            <a href="/sight?id=${x.id}" class="btn btn-primary">Details</a>
        </div>
    </div>
</div>`;
    articles.insertAdjacentHTML('beforeend', projectHTML);
  });
});

callMeForm.addEventListener('submit', function (e) {
  e.preventDefault();
  let phoneInp = callMeForm.querySelector('input');
  fetch('/admin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      phoneNumber: phoneInp.value,
    }),
  })
    .then((res) => res.text())
    .then(() => alert('We will call you back as soon as possible'));
});
