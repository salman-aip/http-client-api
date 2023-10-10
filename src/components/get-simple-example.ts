import axios from "axios";

export function AxiosGet() {
  axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
    console.log(response);
  });
}

export function FetchGet() {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export async function AxiosGetAsync() {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
