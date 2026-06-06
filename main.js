async function getDataExampleFetch() {
  const response = fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

async function getDataExampleAxios() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1",
  );

  console.log(response.data);
}

async function getDataExampleAll() {
  const response = await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log(response.data);
      showDataExampleAll(response.data);
    })
    .catch((error) => {
        console.log(error);
      alert('Ocurrió un error al obtener los datos. (Status del Error: ' + error + ')');
    })
    .finally(() => {
      console.log("Request completed");
    });
}

async function showDataExampleAll(posts) {
  let postsTable = document.querySelector(".js-posts tbody");

  posts.forEach((post) => {
    let row = document.createElement("tr");
    row.innerHTML = `
          <th scope="row">${post.id}</th>
          <td>${post.title}</td>
        `;

    postsTable.appendChild(row);
  });
}

console.log("Hola Mundo");
