const createForm = document.querySelector('.create-post-form');
let createTitle = document.querySelector('#create-title');
let createCountry = document.querySelector('#create-country');
let createImageUrl = document.querySelector('#create-image-url');
let createText = document.querySelector('#create-text');
let createImageFile = document.querySelector('#create-image-file');
let createDonation = document.querySelector('#create-donation');
let createDate = document.querySelector('#create-date');

createForm.addEventListener('submit', function (e) {
  e.preventDefault();
  let text = createText.value;
  let data = new FormData();
  data.append('title', createTitle.value);
  data.append('location', createCountry.value);
  data.append('text', text);
  data.append('donation', createDonation.value);
  data.append('eventdate', createDate.value);
  data.append('description', text.substring(0, text.indexOf('.') + 1));
  data.append('imageUrl', createImageUrl.value);
  data.append('imageFile', createImageFile.files[0]);

  fetch('http://localhost:3000/projects', {
    method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    body: data,
    // JSON.stringify({
    //   title: createTitle.value,
    //   description: text.substring(0, text.indexOf('.') + 1),
    //   text: text,
    //   location: createCountry.value,
    //   imageUrl: createImageUrl.value,
    //   donation: createDonation.value,
    //   eventdate: createDate.value,
    // }),
  })
    .then((response) => response.text())
    .then((data) => window.history.go());
});
// createForm.addEventListener('submit', function (e) {
//   e.preventDefault();
//   let text = createText.value;
//   let data = new FormData();
//   data.append('title', createTitle.value);
//   data.append('country', createCountry.value);
//   data.append('text', text);
//   data.append('description', text.substring(0, text.indexOf('.') + 1));
//   data.append('imageUrl', createImageUrl.value);
//   data.append('imageFile', createImageFile.files[0]);

//   fetch('http://localhost:3000/projects', {
//     method: 'POST',
//     body: data,
//   })
//     .then((response) => response.text())
//     .then((data) => window.history.go());
// });

function disableInput(input1, input2) {
  if (input1.value) {
    input2.disabled = true;
  } else {
    input2.disabled = false;
  }
}

createImageUrl.addEventListener('change', function () {
  disableInput(this, createImageFile);
});
createImageFile.addEventListener('change', function () {
  disableInput(this, createImageUrl);
});
