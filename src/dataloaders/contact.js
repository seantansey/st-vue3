import { dataCall } from "./dataCall.js";

const fetchMessage = (params) => {
  return fetch(`${import.meta.env.VITE_NODE_API}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
};

const postMessage = (params) => {
  return dataCall(fetchMessage, params);
};

export default postMessage;
