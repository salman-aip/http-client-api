import axios from "axios";

export function AxiosPost() {
  axios
    .post(
      `https://jsonplaceholder.typicode.com/posts`,
      {
        title: "foo",
        body: "bar",
        userId: 1,
      },
      { headers: { "Content-type": "application/json; charset=UTF-8" } },
    )
    .then((response) => console.log(response));
}

export async function AxiosPostAsync() {
  try {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      {
        title: "foo",
        body: "bar",
        userId: 1,
      },
      { headers: { "Content-type": "application/json; charset=UTF-8" } },
    );

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export async function FetchPost() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  }).then((response) => response.json());

  console.log(response);
}
