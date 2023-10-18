import axios from "axios";

const api = axios.create({
  // data provided from the server
  data: {},

  // response.headers
  headers: {},

  // status
  // statusText

  // config that was provided to axios-request
  //config: {}

  // request that generated this response
  // request: {}
});

axios.get("").then((response) => {
  response.data;
  response.headers;
  response.status;
  response.statusText;
  response.request;
});
