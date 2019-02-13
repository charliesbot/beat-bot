import fetch from "node-fetch";
import { config } from "./oauth";

const getUserData = async token => {
  const response = await fetch(config.profilePath, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  return await response.json();
};

export default getUserData;
