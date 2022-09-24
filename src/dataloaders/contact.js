import { dataCall } from "./dataCall.js";

const fetchMessage = (params) => {
  return fetch(`${import.meta.env.VITE_NODE_API}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": import.meta.env.VITE_NODE_API_KEY,
      "x-app-id": import.meta.env.VITE_NODE_API_APP_ID
    },
    body: JSON.stringify(params),
  });
};

const postMessage = (params) => {
  return dataCall(fetchMessage, params);
};

export default postMessage;
