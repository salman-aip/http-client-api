import axios from "axios";

const api = axios.create({
  baseURL: "",
  headers: { "Content-type": "application/json; charset=UTF-8" },
  // Must be a plain object or a URLSearchParams object
  params: {
    ID: 243,
  },
  // request-body
  data: {
    firstName: "Salman",
    lastName: "Farshe",
  },
  // alternative - request-body
  // only the value is sent, not the key
  // data: "Country=Brasil&City=Belo Horizonte",

  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 1000, // default is `0` (no timeout)

  // should be made using credentials
  withCredentials: false, // default

  // allows changes to the request data before it is sent to the server
  transformRequest: [
    (data, headers) => {
      return data;
    },
  ],
  // allows changes to the response data to be made before
  transformResponse: [
    (data) => {
      return data;
    },
  ],

  // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  auth: {
    username: "salman",
    password: "123456",
  },

  // `responseType` indicates the type of data that the server will respond with
  responseType: "json", // default

  // `onUploadProgress` allows handling of progress events for uploads
  // browser only
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `onDownloadProgress` allows handling of progress events for downloads
  // browser only
  onDownloadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `maxContentLength` defines the max size of the http response content in bytes allowed in node.js
  maxContentLength: 2000,

  // `maxBodyLength` (Node only option) defines the max size of the http request content in bytes allowed
  maxBodyLength: 2000,
});
