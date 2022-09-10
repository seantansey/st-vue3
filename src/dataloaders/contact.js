import { dataCall } from "./dataCall.js";
import { useUIStore } from "@/stores/ui";

const store = useUIStore();

const fetchMessage = (params) => {
  return fetch(`${import.meta.env.VITE_NODE_API}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${store.bearerToken}`
    },
    body: JSON.stringify(params),
  });
};

const postMessage = (params) => {
  return dataCall(fetchMessage, params);
};

export default postMessage;
