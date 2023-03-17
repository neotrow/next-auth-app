import axios from "axios";

const makeApiCall = (origin: string) => {
  const isServer = typeof window === "undefined";

  origin += isServer ? " (server)" : " (client)";

  void axios.get("http://localhost:3020/api/whatever?origin=" + origin);
};

export { makeApiCall };
