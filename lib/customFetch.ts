// customFetch.ts
import axios from "axios";
const url = process.env.NEXT_PUBLIC_API_URL as string;
const customFetch = axios.create({
  baseURL: url,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export default customFetch;
