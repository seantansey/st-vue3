import { dataCall } from "./dataCall.js";

const fetchAccessToken = (params) => {
  return fetch(`${import.meta.env.VITE_NODE_API}/authenticate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
};

const getAccessToken = (params) => {
  return dataCall(fetchAccessToken, params);
};

export default getAccessToken;