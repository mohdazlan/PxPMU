async function getEmails() {
  return await fetch('http://localhost:3000/admin/')
    .then((response) => response.json())
    .then((data) => data);
}
