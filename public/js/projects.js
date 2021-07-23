async function getProjects() {
  return await fetch('/projects')
    // await fetch(`${req.protocol}://${req.get('host')}/projects`)
    .then((res) => res.json())
    .then((data) => data);
}
