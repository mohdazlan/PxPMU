async function getProjects() {
  return await fetch('http://localhost:3000/projects')
    // await fetch(`${req.protocol}://${req.get('host')}/projects`)
    .then((res) => res.json())
    .then((data) => data);
}
